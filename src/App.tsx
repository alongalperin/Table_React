import React from 'react';
import './App.css';

import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';

import { Cell, TableRawData } from './types/TableTypes';
import Table from './Components/Table';

const GET_CELLS_QUERY = gql`
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

function App() {
  const { loading, error, data } = useQuery<TableRawData>(GET_CELLS_QUERY);

  if (loading) {
    return <p>Loading</p>; // TODO: change to spinner
  }

  if (error) {
    return <p>We have an error</p>;
  }

  console.log(data);

  return (
    <div className="App">{data && data.headers && <Table data={data} />}</div>
  );
}

export default App;
