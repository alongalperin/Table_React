import { gql } from '@apollo/client';

export const GET_CELLS_QUERY = gql`
  {
    headers {
      header_id
      header_name
    }
    rows {
      row_id
    }
    values {
      header_id
      row_id
      value
    }
  }
`;