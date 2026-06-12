export const site = {
  name: "Cat Gear Index",
  description: "A structured cat supplies database for comparing litter, litter boxes, fountains, feeders, carriers, trees, scratchers, and maintenance costs.",
  url: "https://catgearindex.com",
  author: "Cat Gear Index Editorial Desk"
};

export function canonical(pathname: string) {
  return new URL(pathname, site.url).toString();
}
