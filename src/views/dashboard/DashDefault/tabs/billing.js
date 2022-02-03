import React, { useState } from 'react'
import {
    CardGroup, Card, Form, Button, Row, Col,
    Dropdown, DropdownButton
} from 'react-bootstrap'
import './style.css'
import { PaymentHistory } from './payment_history'
import { Usage } from './usage'

export const Billing = () => {
    const [billingKey, setBillingKey] = useState('main')

    const billingSet = (key) => setBillingKey(key)
    const dropdownItemStyle = {
        padding: '10px 20px',
    }
    return (
        <>
            {billingKey === 'main' && <Row md={2} sm={1} lg={2} xs={1} style={{ marginTop: 25 }}>
                <Col>
                    <Card className='shadow-card'>
                        <Card.Body style={{ border: 'none', color: 'black' }}>
                            <CardGroup style={{ border: 'none' }}>
                                <Card style={{ border: 'none' }}>
                                    <Card.Text style={{ fontWeight: 'bold', marginBottom: 3 }}>
                                        Compute Time
                                    </Card.Text>
                                    <Card.Body style={{ border: 'none', padding: 0, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <div style={{ fontWeight: 'bold', float: 'left', fontSize: 30 }}> 3 </div>
                                        <div style={{ float: 'left', margin: 5, fontSize: 12 }}>
                                            <div style={{ fontWeight: 'bold' }}> Hours </div>
                                            <div style={{ color: 'grey' }}> Available </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card style={{ border: 'none' }}>
                                    <Card.Text style={{ fontWeight: 'bold', marginBottom: 3 }}>
                                        Predictions Limit
                                    </Card.Text>
                                    <Card.Body style={{ border: 'none', padding: 0, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <div style={{ fontWeight: 'bold', float: 'left', fontSize: 30 }}> 0 </div>
                                        <div style={{ float: 'left', marginLeft: 5, fontSize: 12 }}>
                                            <div style={{ fontWeight: 'bold' }}> /500 </div>
                                            <div style={{ color: 'grey' }}> used </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card style={{ border: 'none' }}>
                                    <Card.Text style={{ fontWeight: 'bold', marginBottom: 3 }}>
                                        Storage
                                    </Card.Text>
                                    <Card.Body style={{ border: 'none', padding: 0, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <div style={{ fontWeight: 'bold', float: 'left', fontSize: 30 }}> 20 </div>
                                        <div style={{ float: 'left', marginLeft: 5, fontSize: 12 }}>
                                            <div style={{ fontWeight: 'bold' }}> GB </div>
                                            <div style={{ color: 'grey' }}> Available </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                            <br />
                            <br />
                            <CardGroup style={{ border: 'none' }}>
                                <Card style={{ border: 'none' }}>
                                    <Card.Text style={{ fontWeight: 'bold', marginBottom: 3, fontSize: 13 }}>
                                        Nr. of Members
                                    </Card.Text>
                                    <Card.Body style={{ border: 'none', padding: 0, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <div style={{ fontWeight: 'bold', float: 'left', fontSize: 30 }}> 1 </div>
                                        <div style={{ float: 'left', margin: 5, fontSize: 12 }}>
                                            {/* <div style={{ fontWeight: 'bold' }}> Hours </div> */}
                                            <div style={{ color: 'grey' }}> members </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card style={{ border: 'none' }}>
                                    <Card.Text style={{ fontWeight: 'bold', marginBottom: 3, fontSize: 13 }}>
                                        Active Deployments
                                    </Card.Text>
                                    <Card.Body style={{ border: 'none', padding: 0, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <div style={{ fontWeight: 'bold', float: 'left', fontSize: 30 }}> 1 </div>
                                        <div style={{ float: 'left', marginLeft: 5, fontSize: 12 }}>
                                            {/* <div style={{ fontWeight: 'bold' }}> /500 </div> */}
                                            <div style={{ color: 'grey' }}> deployments </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card style={{ border: 'none' }}>
                                    <Card.Text style={{ fontWeight: 'bold', marginBottom: 3, fontSize: 13 }}>
                                        Concurrent experiements
                                    </Card.Text>
                                    <Card.Body style={{ border: 'none', padding: 0, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <div style={{ fontWeight: 'bold', float: 'left', fontSize: 30 }}> 1 </div>
                                        <div style={{ float: 'left', marginLeft: 5, fontSize: 12 }}>
                                            {/* <div style={{ fontWeight: 'bold' }}> GB </div> */}
                                            <div style={{ color: 'grey' }}> members </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Card.Body>
                        <Card.Footer style={{ border: 'none' }}>
                            <Card.Text>
                                Your compute time and storage quotas will be renewed each calendar month according to your plan. Next renewal occurs on 2021-11-01.
                            </Card.Text>
                        </Card.Footer>
                    </Card>
                    <div style={{ textAlign: 'center' }}>
                        <Form.Check type='switch' id="plan_check" label='Annual(SAVE 10%)' />
                    </div>
                    <CardGroup>
                        <Card style={{ margin: 30 }} className='shadow-card'>
                            <Card.Title style={{ backgroundColor: '#000000', color: 'white', padding: 20, fontSize: 15 }}>
                                Current Plan
                            </Card.Title>
                            <Card.Body>
                                <Card.Text style={{ color: 'black', fontSize: 17, marginBottom: 0 }}> Free </Card.Text>
                                <Card.Text style={{ fontWeight: 'bold', color: 'black', fontSize: 25, marginBottom: 0 }}> €0/mo </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{ border: 'none', paddingBottom: 50, paddingTop: 0 }}>
                                For your hobby projects or validating the platform
                            </Card.Footer>
                        </Card>
                        <Card style={{ margin: 30 }} className='shadow-card'>
                            <Card.Title style={{ backgroundColor: '#39C480', color: 'white', padding: 20, fontSize: 15 }}>
                                Alpha Stage
                            </Card.Title>
                            <Card.Body>
                                <Card.Text style={{ color: 'black', fontSize: 17, marginBottom: 0 }}> Starter </Card.Text>
                                <Card.Text style={{ fontWeight: 'bold', color: 'black', fontSize: 25, marginBottom: 0 }}> €9.99/mo </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{ border: 'none', paddingBottom: 20, paddingTop: 0 }}>
                                for your Trading projects or validating the platform
                            </Card.Footer>
                            <Card.Footer style={{ border: 'none', paddingTop: 0 }}>
                                <Button variant='success'> Select This Plan </Button>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                    <CardGroup>
                        <Card className='text-card' style={{ margin: 30, color: 'black' }}>
                            <Card.Text> <i className='feather icon-arrow-right' /> For Demo trading use </Card.Text>
                            <Card.Text> <i className='feather icon-arrow-right' /> 1 user </Card.Text>
                            <Card.Text> <i className='feather icon-arrow-right' /> 3 training hours/month </Card.Text>
                            <Card.Text> <i className='feather icon-arrow-right' /> 500 predictions/month </Card.Text>
                            <Card.Text> <i className='feather icon-arrow-right' /> Train 1 experiment/model at the same time </Card.Text>
                            <Card.Text> <i className='feather icon-arrow-right' /> 1 live deployment </Card.Text>
                            <Card.Text style={{ fontSize: 20 }}> Features </Card.Text>
                            <Card.Text> <i className='feather icon-arrow-right' /> 3 Assets : Google , BITCOIN, AAPL </Card.Text>
                            <Card.Text> <i className='feather icon-arrow-right' /> Min Bar Interval :  1H </Card.Text>
                            <Card.Text> <i className='feather icon-arrow-right' /> 1 Feature </Card.Text>
                        </Card>
                        <Card className='text-card' style={{ margin: 30, color: 'black' }}>
                            <Card.Text> <i className='feather icon-arrow-right' /> Up to $10000 Live Account </Card.Text>
                            <Card.Text> <i className='feather icon-arrow-right' /> 1 user </Card.Text>
                            <Card.Text> <i className='feather icon-arrow-right' /> Pay as you train </Card.Text>
                            <Card.Text> <i className='feather icon-arrow-right' /> 10000 predictions/month </Card.Text>
                            <Card.Text> <i className='feather icon-arrow-right' /> Train unlimted as pay as you go experiment/model at the same time </Card.Text>
                            <Card.Text> <i className='feather icon-arrow-right' /> 1 live deployment </Card.Text>
                            <Card.Text style={{ fontSize: 20 }}> Features </Card.Text>
                            <Card.Text> <i className='feather icon-arrow-right' /> Min Bar Interval :  1H </Card.Text>
                            <Card.Text> <i className='feather icon-arrow-right' /> 3 Featrues </Card.Text>
                        </Card>
                    </CardGroup>
                </Col>
                <Col>
                    <DropdownButton drop='down' id="dropdown-basic-button" size='sm' className='float-right' title="View">
                        <Dropdown.Item style={dropdownItemStyle} onClick={() => billingSet('payment')}> Payment History </Dropdown.Item>
                        <Dropdown.Item style={dropdownItemStyle} onClick={() => billingSet('payment')}> Usage </Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>}
            {billingKey === 'payment' && <PaymentHistory billingSet={billingSet} />}
            {billingKey === 'usage' && <Usage billingSet={billingSet} />}
        </>
    )
}