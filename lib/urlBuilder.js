export const toBaseUrl = (url) => {
  return process.env.NEXT_PUBLIC_WORDPRESS_API_URL + url;
};