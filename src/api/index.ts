import { gql } from '@apollo/client';

export const GET_ALL_COUNTRIES = gql`
  query GetCountries {
    countries {
      capital,
      name,
      code
    }
  }
`;

export const GET_COUNTRIES_BY_INPUT = gql`
  query GetCountries($code: String!) {
    countries(filter: { code: { eq: $code }}){
      capital,
      name,
      code
    }
  }
`;
