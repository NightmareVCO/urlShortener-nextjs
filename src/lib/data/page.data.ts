import { Click } from "@models/page/clicks.model";
import { Visit } from "@models/page/visits.model";
import { connectToDatabase } from "@utils/connectToDatabase";

// export const incrementPageVisits = async () => {
//   connectToDatabase();
//   await Page.updateOne(
//     { _id: "6638366d41246b923f798e51" },
//     { $inc: { visits: 1 } },
//     { upsert: true },
//   );
// };

// export const incrementPageClicks = async () => {
//   connectToDatabase();
//   await Page.updateOne(
//     { _id: "6638366d41246b923f798e51" },
//     { $inc: { clicks: 1 } },
//     { upsert: true },
//   );
// };

export const incrementPageClicks = async () => {
  connectToDatabase();
  return await Click.create({ clicks: 1 });
};

export const incrementPageVisits = async () => {
  connectToDatabase();
  return await Visit.create({ visits: 1 });
};

export const getWeeklyData = async () => {
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

    const visits = await Visit.find({
      createdAt: { $gte: start, $lt: end },
    }).countDocuments();

    const clicks = await Click.find({
      createdAt: { $gte: start, $lt: end },
    }).countDocuments();

    data.push({
      name: day,
      n1: visits,
      n2: clicks,
    });
  }

  return data;
};
