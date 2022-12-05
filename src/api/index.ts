import { gql } from '@apollo/client';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries{
      capital,
    name,
    code
  }
  }
`;

export default GET_COUNTRIES;