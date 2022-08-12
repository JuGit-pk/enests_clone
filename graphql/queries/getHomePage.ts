import { gql } from "@apollo/client";

export const HOME_PAGE_QUERY = gql`
  query {
    home {
      pageTitle
      metaDescription
      heroImage {
        url
        alternativeText
      }
      mainHeading
      subHeading
      textUnderSearchBox
      aboutImage {
        url
        alternativeText
      }
      aboutHeading
      aboutDescription
      categoryImage {
        url
        alternativeText
      }
      categoryTitle
      categoryDescription
      reviewsTitle
      reviewsDescription
      listingTitle
      listingDescription
      listingImage {
        url
        alternativeText
      }
      blogTitle
      blogDescription
    }
    categories(limit: 6, where: { isMain: true }) {
      id
      name
      shortName
      slug
      icon
    }
    popularCategories {
      id
      name
      slug
      icon
      coverImage {
        url
        alternativeText
      }
    }
    posts(limit: 3, sort: "createdAt:DESC") {
      id
      title
      excerpt
      url
      coverImage {
        url
        alternativeText
      }
      category {
        name
        slug
      }
      author
    }
    reviews(limit: 12, sort: "createdAt:DESC") {
      id
      rating
      review
      user {
        username
        firstName
        lastName
        photo {
          url
          alternativeText
        }
      }
      company {
        slug
        name
      }
      createdAt
    }
  }
`;
