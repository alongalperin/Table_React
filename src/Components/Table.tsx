import React, { FunctionComponent } from 'react';

import { TableRawData } from '../types/TableTypes';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { getMaxCellsId } from '../utils/utils';

import './table.scss';

type TableProps = {
  data: TableRawData;
};

const Table: FunctionComponent<TableProps> = ({ data }: TableProps) => {
  const amountOfColumns = getMaxCellsId(data.headers);

  const tableStyle = {
    gridTemplateColumns: `repeat(${amountOfColumns + 1}, 1fr)`,
  };

  return (
    <div style={tableStyle} className="Table__Container">
      <TableHeader amountOfColumns={amountOfColumns} cells={data.headers} />
      <TableBody cells={data.values} rows={data.rows} />
    </div>
  );
};

export default Table;
