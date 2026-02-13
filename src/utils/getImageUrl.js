export const getImageUrl = (url) => {
  if (!url) return "";

  // If already full URL (production case)
  if (url.startsWith("http")) {
    return url;
  }

  // If relative URL (local case)
  return process.env.REACT_APP_DEV_URL + url;
};
