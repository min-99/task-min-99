import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './style/global-styles';

import Payment from './page/Payment';

import { PaymentProvider } from "./PaymentContext/PaymentContext";;

ReactDOM.render(
  <React.StrictMode>
    <PaymentProvider>
      <GlobalStyle/>
      <Payment/>
    </PaymentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
