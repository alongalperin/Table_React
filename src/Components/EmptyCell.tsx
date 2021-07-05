import React, { FunctionComponent } from 'react';

import './table.scss';

const EmptyCell: FunctionComponent<{}> = ({}) => {
  return <div className="Table__Cell Table__Cell__Empty "></div>;
};

export default EmptyCell;
