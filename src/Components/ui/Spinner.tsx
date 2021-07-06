import React, { FunctionComponent } from 'react';

import './spinner.scss';

const Spinner: FunctionComponent<{}> = () => {
  return (
    <div className="Spinner__Wrapper">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
