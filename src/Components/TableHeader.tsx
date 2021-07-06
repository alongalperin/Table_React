import React, { FunctionComponent } from 'react';
import _ from 'lodash';

import { HeaderCellType } from '../types/TableTypes';
import Cell from './Cell';
import EmptyCell from './EmptyCell';

import { getMaxCellsId } from '../utils/utils';

type HeaderProps = {
  cells: HeaderCellType[];
  amountOfColumns: number;
};

const headerCellsListToDict = (cells: HeaderCellType[]) => {
  const dict: { [key: number]: string } = {};
  for (const cell of cells) {
    dict[cell.header_id] = cell.header_name;
  }
  return dict;
};

const TableHeader: FunctionComponent<HeaderProps> = ({
  cells,
  amountOfColumns,
}: HeaderProps) => {
  const sortedHeaders = _.orderBy(cells, ['header_id'], ['asc']);

  const renderHeader = () => {
    const dict = headerCellsListToDict(cells);

    const headerCells: React.ReactNode[] = [];
    for (let i = 0; i <= amountOfColumns; i++) {
      let cell: React.ReactNode;
      if (dict[i]) {
        const cellHeader = dict[i];
        cell = <Cell data={cellHeader} className={'Table__Header__Cell'} />;
      } else {
        cell = <EmptyCell className={'Table__Cell__Empty-Header'} />;
      }
      headerCells.push(cell);
    }

    return headerCells;
  };

  return <>{renderHeader()}</>;
};

export default TableHeader;
