import { gql } from '@apollo/client'

export const SEARCH_COMPANIES = gql`
  query ($limit: Int, $where: JSON) {
    companies(limit: $limit, where: $where) {
      id
      name
      website
    }
  }
`
