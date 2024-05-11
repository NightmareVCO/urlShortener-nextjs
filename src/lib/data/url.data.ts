import { Url } from "@models/url/url.model";
import { connectToDatabase } from "@utils/connectToDatabase";
import { to } from "@utils/to";
import { unstable_noStore as noStore } from "next/cache";

export const getUrls = async (q: string, page: number) => {
  noStore();
  connectToDatabase();

  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 5;

  const [urls, error] = await to(
    Url.find({
      $or: [
        { shortUrl: { $regex: regex } },
        { originalUrl: { $regex: regex } },
      ],
    })
      .sort({ createdAt: -1 })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1)),
  );
  if (error) throw new Error(`Error fetching all urls: ${error}}`);

  const [urlsAmount, amountError] = await to(
    Url.find({
      $or: [
        { shortUrl: { $regex: regex } },
        { originalUrl: { $regex: regex } },
      ],
    }).countDocuments(),
  );
  if (amountError) throw new Error(`Error fetching all urls: ${error}}`);

  return { urlsAmount, urls };
};

export const getAmountOfUrls = async () => {
  connectToDatabase();
  const [amount, error] = await to(Url.countDocuments());
  if (error) throw new Error(`Error fetching amount of urls: ${error}}`);

  return amount;
};

export const getLastNUrls = async (amountOfUrls: number) => {
  connectToDatabase();

  const urls = await Url.find().sort({ createdAt: -1 }).limit(amountOfUrls);

  return urls;
};

export const getWeeklyUrlGrowth = async () => {
  connectToDatabase();

  const now = new Date();
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

  const [urlsThisWeek, errorThisWeek] = await to(
    Url.find({
      createdAt: { $gte: oneWeekAgo },
    }),
  );
  if (errorThisWeek)
    throw new Error(`Error fetching urls from this week: ${errorThisWeek}`);

  const [urlsLastWeek, errorLastWeek] = await to(
    Url.find({
      createdAt: { $gte: twoWeeksAgo, $lt: oneWeekAgo },
    }),
  );
  if (errorLastWeek)
    throw new Error(`Error fetching urls from last week: ${errorLastWeek}`);

  let growth;
  if (urlsLastWeek.length === 0) {
    growth = urlsThisWeek.length > 0 ? 100 : 0;
  } else {
    growth =
      ((urlsThisWeek.length - urlsLastWeek.length) / urlsLastWeek.length) * 100;
  }

  return Math.floor(growth);
};

export const getAverageUrlsPerUser = async () => {
  connectToDatabase();

  const result = await Url.aggregate([
    {
      $group: {
        _id: "$user",
        urlCount: { $sum: 1 },
      },
    },
    {
      $group: {
        _id: null,
        averageUrls: { $avg: "$urlCount" },
      },
    },
  ]);

  return Math.floor(result[0]?.averageUrls) || 0;
};

export const getWeeklyAverageUrlsPerUserGrowth = async () => {
  connectToDatabase();

  const now = new Date();
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

  const resultThisWeek = await Url.aggregate([
    { $match: { createdAt: { $gte: oneWeekAgo } } },
    { $group: { _id: "$user", urlCount: { $sum: 1 } } },
    { $group: { _id: null, averageUrls: { $avg: "$urlCount" } } },
  ]);

  const resultLastWeek = await Url.aggregate([
    { $match: { createdAt: { $gte: twoWeeksAgo, $lt: oneWeekAgo } } },
    { $group: { _id: "$user", urlCount: { $sum: 1 } } },
    { $group: { _id: null, averageUrls: { $avg: "$urlCount" } } },
  ]);

  const averageThisWeek = resultThisWeek[0]?.averageUrls || 0;
  const averageLastWeek = resultLastWeek[0]?.averageUrls || 0;

  let growth;
  if (averageLastWeek === 0) {
    growth = averageThisWeek > 0 ? 100 : 0;
  } else {
    growth = ((averageThisWeek - averageLastWeek) / averageLastWeek) * 100;
  }

  return Math.floor(growth);
};

export const getUrlById = async (id: string) => {
  connectToDatabase();
  const [url, error] = await to(Url.findById(id));
  if (error) throw new Error(`Error fetching url by ID: ${error}}`);

  return url;
};

export const getUrlByUserId = async (userId: string, reverse: boolean) => {
  connectToDatabase();
  const [urls, error] = await to(
    Url.find({ user: userId }).sort({ _id: reverse ? -1 : 1 }),
  );
  if (error) throw new Error(`Error fetching url by username: ${error}}`);

  return urls;
};

export const createUrl = async (url: any) => {
  const { originalUrl, shortUrl, userId, userSession: session } = url;

  connectToDatabase();
  if (userId) {
    const [newUrl, error] = await to(Url.create({ ...url, user: url.userId }));
    if (error) throw new Error(`Error creating url: ${error}}`);
    return newUrl;
  } else {
    const [newUrl, error] = await to(
      Url.create({ originalUrl, shortUrl, session }),
    );
    if (error) throw new Error(`Error creating url: ${error}}`);
    return newUrl;
  }
};

export const updateUrl = async (id: string, url: any) => {
  connectToDatabase();
  const [updatedUrl, error] = await to(
    Url.findByIdAndUpdate(id, url, { new: true }),
  );
  if (error) throw new Error(`Error updating url: ${error}}`);

  return updatedUrl;
};

export const deleteUrl = async (id: string) => {
  connectToDatabase();
  const [deletedUrl, error] = await to(Url.findByIdAndDelete(id));
  if (error) throw new Error(`Error deleting url: ${error}}`);

  return deletedUrl;
};

export const getUrlByShortUrl = async (shortUrl: string) => {
  connectToDatabase();
  const [url, error] = await to(Url.findOne({ shortUrl }));
  if (error) throw new Error(`Error fetching url by shortUrl: ${error}}`);

  return url;
};

export const getLastWeekUrls = async () => {
  connectToDatabase();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const data = [];

  for (const day of days) {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    start.setDate(
      start.getDate() - ((start.getDay() + 7 - days.indexOf(day)) % 7),
    );

    const end = new Date(start);
    end.setDate(start.getDate() + 1);

    const urls = await Url.find({
      createdAt: { $gte: start, $lt: end },
    }).countDocuments();

    data.push({
      name: day,
      n1: urls,
    });
  }

  return data;
};
