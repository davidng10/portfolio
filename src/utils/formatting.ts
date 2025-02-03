export const removeTrailingSlash = (path: string) => {
  return path.length > 1 ? path.replace(/\/$/, "") : path;
};
