import React from 'react';
import './App.css';

import { useQuery } from '@apollo/client';
import { GET_CELLS_QUERY } from './queries/queries';
import { TableRawData } from './types/TableTypes';
import Table from './Components/Table';
import Spinner from './Components/ui/Spinner';

function App() {
  const { loading, error, data } = useQuery<TableRawData>(GET_CELLS_QUERY);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>We have an error</p>;
  }

  return (
    <div className="App">
      <div className="App__Inner">
        {data && data.headers && <Table data={data} />}
      </div>
    </div>
  );
}

export default App;
