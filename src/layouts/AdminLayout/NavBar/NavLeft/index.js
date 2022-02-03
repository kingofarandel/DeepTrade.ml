import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import useWindowSize from '../../../../hooks/useWindowSize';
import NavSearch from './NavSearch';

const NavLeft = () => {
    const { pathname } = useLocation();
    let leftState = 'Falcon Hedge Fund';

    if (pathname.includes('/models')) leftState = 'Models';
    else if (pathname.includes('/accounts')) leftState = 'Accounts';
    else if (pathname.includes('/instances')) {
        leftState = 'Instances';
        if (pathname.includes('/instances/create')) leftState = 'Create an Instance';
    } else if (pathname.includes('/api_keys')) leftState = 'API Keys';
    else if (pathname.includes('/datastore')) leftState = 'Datastore';
    else if (pathname.includes('/notebooks')) leftState = 'Notebooks';
    else if (pathname.includes('/trades')) leftState = 'Trades';

    const windowSize = useWindowSize();

    // let dropdownRightAlign = false;

    let navItemClass = ['nav-item'];
    if (windowSize.width <= 575) {
        navItemClass = [...navItemClass, 'd-none'];
    }

    return (
        <React.Fragment>
            <ListGroup as="ul" bsPrefix=" " className="navbar-nav mr-auto">
                <ListGroup.Item as="li" bsPrefix=" " className={navItemClass.join(' ')}>


                    <p className='Dashboardheading'> {leftState} </p>
                    {/* <Dropdown alignRight={dropdownRightAlign}>
                        <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                            Dropdown
                        </Dropdown.Toggle>
                        <ul>
                            <Dropdown.Menu>
                                <li>
                                    <Link to="#" className="dropdown-item">
                                        Action
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="dropdown-item">
                                        Another action
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="dropdown-item">
                                        Something else here
                                    </Link>
                                </li>
                            </Dropdown.Menu>
                        </ul>
                    </Dropdown> */}
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix=" " className="nav-item">
                    <NavSearch windowWidth={windowSize.width} />
                </ListGroup.Item>
            </ListGroup>
        </React.Fragment>
    );
};

export default NavLeft;
