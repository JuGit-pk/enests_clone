export interface IHomePageQuery {
  // pageTitle: string;
  heroImage: { url: string; alternativeText: string };
  mainHeading: string;
  subHeading: string;
}
export interface IReview {
  reviewSite: string;
  reviewMsg: string;
  date: string;
}

interface subCategory {
  name: string;
  url: string;
}
export interface ICategory {
  name: string;
  url: string;
  id: string;
  shortName: string;
  slug: string;
  icon: string;
  subCategories: subCategory[];
}
