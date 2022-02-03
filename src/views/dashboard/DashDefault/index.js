/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
    Row, Col, Card, Table, Tabs, Tab,
    Button,
} from 'react-bootstrap';

import LineChart from '../../charts/nvd3-chart/chart/LineChart';
import { Members } from './tabs/members';
import { Billing } from './tabs/billing';
import { Settings } from './tabs/settings';
import InviteMemberItemButton from '../component/popup'

const DashDefault = () => {
    const [createButtonItem, setCreateButtonItem] = useState('home')
    const tabHandle = (e) => setCreateButtonItem(e)

    return (
        <React.Fragment>
            <Row>
                <Col md={12} xl={12} sm={12}  >
                    <InviteMemberItemButton createButtonItem={createButtonItem} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Tabs defaultActiveKey="home" onSelect={tabHandle} activeKey={createButtonItem}>
                        <Tab eventKey="home" title="Dashboard">
                            <br />
                            <Row >
                                <Col md={6} xl={6}>
                                    <Card className='shadow-card'>
                                        <Card.Body>

                                            <div className="row d-flex align-items-center">
                                                <div className="col-3">
                                                    <b >Compute Time</b>
                                                    <p><span >3</span> Hour Available</p>
                                                </div>
                                                <div className="col-3">
                                                    <b >Storage</b>
                                                    <p > <span >20</span> Gb Available</p>
                                                </div>
                                                <div className="col-3">
                                                    <b >Member (1/1)</b>
                                                    <p >12</p>
                                                </div>
                                                <div className="col-3">
                                                    <b >Plan</b>
                                                    <p >Free Upgrade</p>
                                                </div>
                                            </div>

                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <div className="row d-flex align-items-center">
                                                {/* <div className="col-4">
                                                    Manage Subscription
                                                </div> */}
                                                <div className="col-8">
                                                    <Button onClick={() => tabHandle('billing')} className="btn-sm btn-success" >Manage Subscription</Button>
                                                </div>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} xl={6}>
                                    <Card className='shadow-card'>
                                        <Card.Body >
                                            <div className="row">
                                                <div className="col-2 align-items-center" style={{ padding: 10 }}>
                                                    <div className="row">
                                                        <span><b style={{ color: 'black' }}> Profit </b></span>
                                                        <span style={{ margin: 'auto', fontSize: 9 }}> This Month </span>
                                                    </div>

                                                    <div className="row d-flex ">
                                                        <span><b style={{
                                                            color: "#39C480",
                                                            fontweight: "bold"
                                                        }}>
                                                            $2443.54
                                                        </b></span>
                                                        {/* <span>+54</span> */}
                                                        <span>
                                                            <a>View Details</a>
                                                        </span>

                                                    </div>

                                                    <br />
                                                    <br />
                                                    <div className="row">
                                                        <span><b style={{ color: 'black' }}> Profit </b></span>
                                                        <span style={{ margin: 'auto', fontSize: 9 }}> Last Month </span>
                                                        <span><b style={{
                                                            color: "#39C480",
                                                            fontweight: "bold"
                                                        }}>
                                                            $2443.54
                                                        </b></span>
                                                    </div>

                                                    <div className="row d-flex ">
                                                    </div>

                                                </div>
                                                <div className="col-10">
                                                    <LineChart />
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} xl={12} >
                                    <hr />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} xl={12} >
                                    <Tabs style={{
                                        "background": "#e5e5e5b0",
                                        "width": 334 + "px",
                                        "border-radius": 5 + "px",
                                    }} variant="pills" defaultActiveKey="Running experiments" className="mb-3">
                                        <Tab className='taeb' eventKey="Running experiments" title="Running experiments">
                                            <Card className='shadow-card'>
                                                <Table responsive>
                                                    <thead>
                                                        <tr style={{ background: "#E5E5E5" }}>
                                                            <th>Model Name</th>
                                                            <th>Progress (epochs)</th>
                                                            <th>Runtime</th>
                                                            <th>Creator</th>
                                                            <th>Machine</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">AAPL Reggr,</th>
                                                            <td>10/3000</td>
                                                            <td>02:03:44 </td>
                                                            <td>Adam</td>
                                                            <td style={{ display: "flex", justifyContent: "space-between" }}>
                                                                <span>AWS c4.2xlarge</span>

                                                                <Button className='btn btn-sm btn-success' style={{ padding: 3 }} >
                                                                    <i className='feather icon-edit' style={{ margin: 0 }}></i>
                                                                </Button>
                                                            </td>
                                                            <td>

                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </Table>

                                            </Card>
                                        </Tab>
                                        <Tab className='taeb' eventKey="Active Deployments" title="Active Deployments">

                                        </Tab>
                                    </Tabs>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12} xl={12} sm={12}  >

                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span className='textstyle' >Tutorials</span>
                                        <span className='textstyle'>Take The Full Course</span>
                                    </div>

                                </Col>
                            </Row>

                            <Row>
                                <Col md={4} xl={4} sm={12}  >
                                    <div className='card shadow-card' style={{ padding: 4 + "px" }}>
                                        <img src="/images/dashboard/images/cover1.png"
                                            alt="Avatar" style={{ width: 100 + '%', marginTop: 10 + "px" }} />
                                        <div className="containercard">
                                            <h4 className='p-1'><b>Deploy a Deep Learning Model on Bitcoin</b></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor ante et mi posuere,
                                                pretium convallis ligula lobortis. Nunc porta</p>
                                            <div style={{ display: "flex", justifyContent: "space-between" }} >
                                                {/* <InputGroup>
                                                    <InputGroup.Append> */}
                                                <div style={{ width: '100%', borderTop: '1px solid lightgray' }}>
                                                    <Button className='float-right' size='sm' style={{ background: "#556EE6", margin: 0 }}>
                                                        Follow Tutorial
                                                    </Button>
                                                </div>
                                                {/* </InputGroup.Append>
                                                </InputGroup> */}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} xl={4} sm={12}  >
                                    <div className='card shadow-card' style={{ padding: 4 + "px" }}>
                                        <img src="/images/dashboard/images/cover2.png"
                                            alt="Avatar" style={{ width: 100 + '%', marginTop: 10 + "px" }} />
                                        <div className="containercard">
                                            <h4 className='p-1'><b>Finding Alpha with Machine Learning Model on AAPL</b></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor ante et mi posuere,
                                                pretium convallis ligula lobortis. Nunc porta</p>
                                            <div style={{ display: "flex", justifyContent: "space-between" }} >
                                                {/* <InputGroup>
                                                    <InputGroup.Append> */}
                                                <div style={{ width: '100%', borderTop: '1px solid lightgray' }}>
                                                    <Button className='float-right' size='sm' style={{ background: "#556EE6", margin: 0 }}>
                                                        Follow Tutorial
                                                    </Button>
                                                </div>
                                                {/* </InputGroup.Append>
                                                </InputGroup> */}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} xl={4} sm={12}  >
                                    <div className='card shadow-card' style={{ padding: 4 + "px" }}>
                                        <img src="/images/dashboard/images/cover3.png"
                                            alt="Avatar" style={{ width: 100 + '%', marginTop: 10 + "px" }} />
                                        <div className="containercard">
                                            <h4 className='p-1'><b>Trading With Machine
                                                Learning Deep Leanring</b></h4>
                                            <p style={{ opacity: 0 }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor ante et mi posuere,
                                                pretium convallis ligula lobortis. Nunc porta </p>
                                            <div style={{ display: "flex", justifyContent: "space-between" }} >
                                                {/* <InputGroup>
                                                    <InputGroup.Append> */}
                                                <div style={{ width: '100%', borderTop: '1px solid lightgray' }}>
                                                    <span style={{ color: '#556EE6', fontSize: 20, margin: 5 }}> $800 </span>
                                                    <Button className='float-right' size='sm' style={{ background: "#556EE6", margin: 0 }}>
                                                        Enroll Tutorial
                                                    </Button>
                                                </div>
                                                {/* </InputGroup.Append>
                                                </InputGroup> */}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="members" title="Members">
                            <Members />
                        </Tab>
                        <Tab eventKey="billing" title="Billing">
                            <Billing />
                        </Tab>
                        <Tab eventKey="settings" title="Settings">
                            <Settings />
                        </Tab>
                    </Tabs>
                    <br />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default DashDefault;
