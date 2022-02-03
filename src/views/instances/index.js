import React from 'react';
import { useLocation } from 'react-router-dom'
import InstanceDefault from './components/main';
import CreateInstanceItemButton from './components/create_instance_popup';

const InstancePage = () => {
    const { pathname } = useLocation()
    let DirectRender

    if (pathname === '/instances/create' || pathname === '/instances/create/') DirectRender = CreateInstanceItemButton
    else DirectRender = InstanceDefault

    return (
        <React.Fragment> <DirectRender /> </React.Fragment>
    );
}

export default InstancePage;