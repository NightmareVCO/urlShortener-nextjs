import mongoose from "mongoose";

export const urlSchema = new mongoose.Schema(
  {
    shortUrl: {
      type: String,
    },
    originalUrl: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: Boolean,
      default: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

export interface UrlProperties {
  shortUrl: string;
  originalUrl: string;
  date: Date;
  status: boolean;
  clicks: number;
  user: string;
}

export const Url = mongoose.models.Url || mongoose.model("Url", urlSchema);

// @Id
// ObjectId id;
// private String url;
// private String originalUrl;
// private Date date;
// private Boolean status;
// private int clicks;
// @Reference
// private List<Statistic> statistics = new ArrayList<>();
// @Reference
// private User user;

// private String session;
