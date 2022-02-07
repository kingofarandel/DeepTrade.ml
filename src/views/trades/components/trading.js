import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import Experiments from './experiments';

function Trading() {
  return (
    <>
      <div style = {{height:"500px"}}>
        <TradingViewWidget
          symbol="NASDAQ:AAPL"
          autosize='false'
          theme={Themes.DARK}
          locale="fr"
          autosize
        />
      </div>
      <div style={{marginTop:'5em'}}>
        <Experiments/>
      </div>
      </>
  );
}

export default Trading;

