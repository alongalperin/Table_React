import React, { FunctionComponent } from 'react';
import _ from 'lodash';

import { TableRawData } from '../types/TableTypes';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

import './table.scss';

type TableProps = {
  data: TableRawData;
};

const Table: FunctionComponent<TableProps> = ({ data }: TableProps) => {
  const sortedHeaders = _.orderBy(data.headers, ['header_id'], ['asc']);

  return (
    <div className="Table__Container">
      <TableHeader cells={sortedHeaders} />
      <TableBody cells={data.values} rows={data.rows} />
    </div>
  );
};

export default Table;
