import React, { FunctionComponent } from 'react';

import './table.scss';

type CellProps = {
  data: string;
};

const Cell: FunctionComponent<CellProps> = ({ data }: CellProps) => {
  return <div className="Table__Cell Table__Header__Cell">{data}</div>;
};

export default Cell;
