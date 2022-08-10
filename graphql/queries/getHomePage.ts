import { gql } from "@apollo/client";

export const HOME_PAGE_QUERY = gql`
  query {
    home {
      heroImage {
        url
        alternativeText
      }
      mainHeading
      subHeading
      textUnderSearchBox
    }
  }
`;
