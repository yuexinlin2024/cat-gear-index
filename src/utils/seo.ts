export const site = {
  name: "Cat Gear Index",
  description: "Practical cat grooming, washing, and home care guides with routines, product notes, and non-medical maintenance advice.",
  url: "https://catgearindex.com",
  author: "Cat Gear Index Editorial Desk"
};

export function canonical(pathname: string) {
  return new URL(pathname, site.url).toString();
}
