import mongoose from "mongoose";

export const visitSchema = new mongoose.Schema(
  {
    visits: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export interface VisitsProperties {
  visits: number;
}

export const Visit =
  mongoose.models.Visit || mongoose.model("Visit", visitSchema);
