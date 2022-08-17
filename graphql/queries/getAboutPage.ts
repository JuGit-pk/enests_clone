import { gql } from "@apollo/client";

export const ABOUT_PAGE_QUERY = gql`
  query {
    about {
      pageTitle
      metaDescription
      heading
      image {
        url
        alternativeText
      }
      imageRightContent
      content
    }
  }
`;
