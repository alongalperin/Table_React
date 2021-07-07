import React, { FunctionComponent } from 'react';
import _ from 'lodash';

import { CellType } from '../types/TableTypes';
import Cell from './Cell';
import EmptyCell from './EmptyCell';

type BodyProps = {
  cells: CellType[];
  rows: { row_id: number }[];
};

const TableBody: FunctionComponent<BodyProps> = ({
  cells,
  rows,
}: BodyProps) => {
  const cellsDict: { [key: string]: string } = {};
  const numberOfRows =
    _.maxBy(rows, function (e) {
      return e.row_id;
    })?.row_id || 0;

  let i = 0;
  for (const cell of cells) {
    i += 1;
    cellsDict[`${cell.row_id}, ${cell.header_id}`] = cell.value;
  }

  const renderTableRow = (rowIndex: number) => {
    const rowCells: React.ReactNode[] = [];
    let cellHelper;

    for (let headerIndex = 0; headerIndex <= 17; headerIndex++) {
      cellHelper = cellsDict[`${rowIndex}, ${headerIndex}`];
      if (cellHelper) {
        rowCells.push(<Cell data={cellHelper} />);
      } else {
        rowCells.push(<EmptyCell />);
      }
    }

    return rowCells;
  };

  const renderTableBody = () => {
    const rows: React.ReactNode[] = [];
    for (let rowIndex = 0; rowIndex <= numberOfRows; rowIndex++) {
      const row: React.ReactNode[] = renderTableRow(rowIndex);
      rows.push(row);
    }
    return rows;
  };

  return <>{renderTableBody()}</>;
};

export default TableBody;
