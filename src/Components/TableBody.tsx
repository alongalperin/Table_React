import React, { FunctionComponent } from 'react';
import _ from 'lodash';

import { Cell } from '../types/TableTypes';

import { getMaxCellsId } from '../utils/utils';

type BodyProps = {
  cells: Cell[];
  rows: { row_id: number }[];
};

const TableBody: FunctionComponent<BodyProps> = ({
  cells,
  rows,
}: BodyProps) => {
  const numberOfRows =
    _.maxBy(rows, function (e) {
      return e.row_id;
    })?.row_id || 0;

  const renderTableBody = () => {
    const rows = []; // TODO: add type
    for (let rowIndex = 0; rowIndex <= numberOfRows; rowIndex++) {
      const row = [];
      for (let colIndex = 0; colIndex <= 17; colIndex++) {
        row.push(<div className="Table__Cell">555</div>);
      }
      rows.push(row);
    }
    console.log(rows);
    return rows;
  };

  return (
    <>
      {/* {cells.map((headerCell: Cell) => (
        <div className="Table__Cell" key={headerCell.header_id}>
          {headerCell.value}
        </div>
      ))} */}
      {renderTableBody()}
    </>
  );
};

export default TableBody;
