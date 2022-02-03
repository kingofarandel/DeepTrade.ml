import React from 'react'
import { useLocation } from 'react-router-dom'
import AccountDetail from './components/detail'
import AccountMain from './components/main'

const AccountsDefault = () => {
    const { pathname } = useLocation()
    let DirectRender

    if (pathname === '/accounts' || pathname === '/accounts/') DirectRender = AccountMain
    else DirectRender = AccountDetail

    return (
        <React.Fragment> <DirectRender /> </React.Fragment>
    );
};

export default AccountsDefault;
