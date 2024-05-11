import mongoose from "mongoose";

interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

export const connectToDatabase = async () => {
  try {
    if (connection.isConnected) return;

    const mongoURI = process.env.MONGO || "";
    const database = await mongoose.connect(mongoURI);
    connection.isConnected = database.connections[0].readyState;
  } catch (error) {
    throw new Error("Error connecting to database: " + error);
  }
};
