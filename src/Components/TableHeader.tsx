import React, { FunctionComponent } from 'react';
import _ from 'lodash';

import { HeaderCellType } from '../types/TableTypes';
import Cell from './Cell';
import EmptyCell from './EmptyCell';

import { getMaxCellsId } from '../utils/utils';

type HeaderProps = {
  cells: HeaderCellType[];
};

const headerCellsListToDict = (cells: HeaderCellType[]) => {
  const dict: { [key: number]: string } = {}; //TODO: add type
  for (const cell of cells) {
    dict[cell.header_id] = cell.header_name;
  }
  return dict;
};

const TableHeader: FunctionComponent<HeaderProps> = ({
  cells,
}: HeaderProps) => {
  const generateHeader = () => {
    const dict = headerCellsListToDict(cells);
    const numberOfColumns = getMaxCellsId(cells);

    const headerCells: React.ReactNode[] = [];
    for (let i = 0; i <= numberOfColumns; i++) {
      let cell: React.ReactNode;
      if (dict[i]) {
        const cellHeader = dict[i];
        cell = <Cell data={cellHeader} />;
      } else {
        cell = <EmptyCell />;
      }
      headerCells.push(cell);
    }

    return headerCells;
  };

  return <>{generateHeader()}</>;
};

export default TableHeader;
