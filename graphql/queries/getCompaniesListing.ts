import { gql } from '@apollo/client'

export const COMPANIES_LISTING_QUERY = gql`
  query subCategoriesCompanies(
    $category: String!
    $categorySlug: String!
    $subCategory: String!
    $limit: Int
    $offset: Int
    $where: JSON
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
    companies(limit: $limit, start: $offset, where: $where) {
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
    companiesCount(where: $where)
  }
`
