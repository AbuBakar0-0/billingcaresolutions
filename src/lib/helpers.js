export const deslugify = (slug) => {
  const deslug = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return deslug;
};

export const slugify = (text) => {
  const slug = text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");

  return slug;
};
