import React, { FunctionComponent } from 'react';

import Cell from "./Cell";

import './table.scss';

type Props = {
  className?: string;
};

const EmptyCell: FunctionComponent<Props> = ({ className }: Props) => {
  return <Cell data={""}/>
};

export default EmptyCell;
