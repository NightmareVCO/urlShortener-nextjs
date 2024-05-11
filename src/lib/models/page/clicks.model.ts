import mongoose from "mongoose";

export const clicksSchema = new mongoose.Schema(
  {
    clicks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export interface ClickProperties {
  clicks: number;
}

export const Click =
  mongoose.models.Click || mongoose.model("Click", clicksSchema);
