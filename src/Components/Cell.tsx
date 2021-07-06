import React, { FunctionComponent, useEffect, useState } from 'react';

import './table.scss';

type CellProps = {
  data: string;
  className?: string;
};

const Cell: FunctionComponent<CellProps> = ({ data, className }: CellProps) => {
  const [value, setValue] = useState<string>('');
  useEffect(() => {
    setValue(data);
  }, [data]);

  return (
    <div className={`Table__Cell ${className ? className : ""}`}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default Cell;
