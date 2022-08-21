import { gql } from '@apollo/client'

export const COMPANIES_LISTING_QUERY = gql`
  query subCategoriesCompanies(
    $category: String
    $categorySlug: String!
    $subCategory: String!
  ) {
    subCategoriesCompanyCount(category: $category) {
      _id
      url
      count
    }
    companiesListingMetadata(
      category: $categorySlug
      subCategory: $subCategory
    ) {
      pageTitle
      metaDescription
      listingTitle
    }
    countries {
      name
      alpha2Code
    }
    companies {
      name
      subCategory
      tagline
      summary
      createdAt
      companySize
      country
      city
      website
      logo {
        url
        width
        height
      }
      category {
        name
        subCategories {
          name
          pageTitle
          url
        }
      }
    }
  }
`
