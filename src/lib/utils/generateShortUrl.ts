export const generateShortUrl = (longUrl: string) => {
  const hostname = new URL(longUrl).hostname.replace("www.", "").split(".")[0];
  const random = Math.floor(Math.random() * 1000);
  return `${hostname}${random}`;
};
