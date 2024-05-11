import { User } from "@models/user/user.model";
import {
  emailValidationSchema,
  idValidationSchema,
  userValidationSchema,
} from "@models/user/user.schema";
import { connectToDatabase } from "@utils/connectToDatabase";
import { to } from "@utils/to";
// import { unstable_noStore as noStore } from "next/cache";
import { validateData } from "@utils/validation";

export const getUsers = async (q: string, page: number) => {
  connectToDatabase();

  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 5;

  const [users, error] = await to(
    User.find({
      $or: [{ name: { $regex: regex } }, { email: { $regex: regex } }],
    })
      .sort({ createdAt: -1 })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1)),
  );
  if (error) throw new Error(`Error fetching all users: ${error}}`);

  const [usersAmount, amountError] = await to(
    User.find({
      $or: [{ name: { $regex: regex } }, { email: { $regex: regex } }],
    }).countDocuments(),
  );
  if (amountError) throw new Error(`Error fetching all users: ${error}}`);

  return { usersAmount, users };
};

export const getAmountOfUsers = async () => {
  connectToDatabase();
  const [amount, error] = await to(User.countDocuments());
  if (error) throw new Error(`Error fetching amount of users: ${error}}`);

  return amount;
};

export const getLastWeekUsers = async () => {
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

    const users = await User.find({
      createdAt: { $gte: start, $lt: end },
    }).countDocuments();

    data.push({
      name: day,
      n1: users,
    });
  }

  return data;
};

export const getWeeklyUserGrowth = async () => {
  connectToDatabase();

  const now = new Date();
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

  const [usersThisWeek, errorThisWeek] = await to(
    User.find({
      createdAt: { $gte: oneWeekAgo },
    }),
  );
  if (errorThisWeek)
    throw new Error(`Error fetching users from this week: ${errorThisWeek}`);

  const [usersLastWeek, errorLastWeek] = await to(
    User.find({
      createdAt: { $gte: twoWeeksAgo, $lt: oneWeekAgo },
    }),
  );
  if (errorLastWeek)
    throw new Error(`Error fetching users from last week: ${errorLastWeek}`);

  let growth;
  if (usersLastWeek.length === 0) {
    growth = usersThisWeek.length > 0 ? 100 : 0;
  } else {
    growth =
      ((usersThisWeek.length - usersLastWeek.length) / usersLastWeek.length) *
      100;
  }

  return growth;
};

export const getUserById = async (id: string) => {
  // noStore(); Para evitar que se almacene en la caché
  validateData(idValidationSchema, { _id: String(id) });

  connectToDatabase();
  const [user, error] = await to(User.findById(id));
  if (error) throw new Error(`Error fetching user by ID: ${error}}`);

  return user;
};

export const getUserByEmail = async (email: string) => {
  validateData(emailValidationSchema, { email });

  connectToDatabase();
  const [user, error] = await to(User.findOne({ email }));
  if (error) throw new Error(`Error fetching user by email: ${error}}`);

  return user;
};

export const getUserByUsername = async (username: string) => {
  connectToDatabase();
  const [user, error] = await to(User.findOne({ username }));
  if (error) throw new Error(`Error fetching user by username: ${error}}`);

  return user;
};

export const createUser = async (user: any) => {
  validateData(userValidationSchema, user);

  connectToDatabase();
  const [newUser, error] = await to(User.create(user));
  if (error) throw new Error(`Error creating user: ${error}}`);

  return newUser;
};

export const updateUser = async (id: string, user: any) => {
  validateData(idValidationSchema, { _id: id });
  validateData(userValidationSchema, user);

  connectToDatabase();
  const [updatedUser, error] = await to(
    User.findByIdAndUpdate(id, user, { new: true }),
  );
  if (error) throw new Error(`Error updating user: ${error}}`);

  return updatedUser;
};

export const deleteUser = async (id: string) => {
  validateData(idValidationSchema, { _id: id });

  connectToDatabase();
  const [deletedUser, error] = await to(User.findByIdAndDelete(id));
  if (error) throw new Error(`Error deleting user: ${error}}`);

  return deletedUser;
};
