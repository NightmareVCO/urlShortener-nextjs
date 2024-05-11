import axios from "axios";

export const getPreview = async (url: string) => {
  try {
    const domain = new URL(url).hostname;
    const response = await axios.post(
      "https://api.linkpreview.net",
      {
        q: domain,
      },
      {
        headers: {
          "X-Linkpreview-Api-Key": process.env.LINKPREVIEW_API_KEY,
        },
      },
    );

    return response.data.image;
  } catch {
    return "/LinkLoom.svg";
  }
};
