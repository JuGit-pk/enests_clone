// ----- QUERIES TYPES -----

export interface IHomePageQuery {
  // pageTitle: string;
  heroImage: { url: string; alternativeText: string }
  mainHeading: string
  subHeading: string
}

interface ISubCategoriesCompanyCount {
  _id: string
  count: number
  url: string
  __typename: string
}
export interface ICountry {
  name: string
  alpha2Code: string
}
export interface ICompany {
  name: string
  subCategory: string
  tagline: string
  summary: string
  address: string
  status: string
  createdAt: string
  companySize: number
  country: string
  city: string
  website: string
  logo: { url: string; width: number; height: number }
  category: {
    name: string
    subCategories: {
      name: string
      pageTitle: string
      url: string
    }
  }
}
export interface ICompaniesListingQuery {
  subCategoriesCompanyCount: ISubCategoriesCompanyCount[]
  companiesListingMetadata: {
    listingTitle: string
    pageTitle: string
    metaDescription: string
  }
  countries: ICountry[]
  companies: ICompany[]
}
