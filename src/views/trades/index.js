import React from 'react';
import { useLocation } from 'react-router-dom'
import TradeDefault from './components/main';
// import CreateTradeItemButton from './components/create_instance_popup';

const TradePage = () => {
    const { pathname } = useLocation()
    let DirectRender

    // if (pathname === '/Trades/create' || pathname === '/Trades/create/') DirectRender = CreateTradeItemButton
    // else DirectRender = TradeDefault
    DirectRender = TradeDefault
    
    return (
        <React.Fragment> <DirectRender /> </React.Fragment>
    );
}

export default TradePage;