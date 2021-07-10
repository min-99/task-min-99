import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './style/global-styles';

import Payment from './page/Payment';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Payment/>
  </React.StrictMode>,
  document.getElementById('root')
);
