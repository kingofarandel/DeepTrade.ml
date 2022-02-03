import React from 'react'
import { Link } from 'react-router-dom';
import {
    Row, Col, Card, Table,
    Button, Form, InputGroup,
    FormControl,
} from 'react-bootstrap';

const AccountDetail = () => {
    const formControlStyle = {
        background: '#FFFFFF',
    }
    const bottomButtonProviderStyle = {
        textAlign: 'center',
        marginBottom: 10
    }
    const bottomButtonStyle = {
        width: 200,
        margin: 0
    }
    return (
        <React.Fragment>
            <Row>
                <Col md={12} xl={12} sm={12}>
                    <span>
                        Here you can change your account name and check account money statistics <br />
                        Learn more about accounts at docs.deeptrade.com/api
                    </span>
                    <Link to='/accounts'>
                        <Button variant='success' size='sm' className='float-right'>
                            <i className='feather icon-arrow-left' style={{ margin: 0 }} /> Back
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col md={6} xl={6} sm={12} lg={6}>
                    <Card style={{ height: 530 }}>
                        <Card.Header style={{ border: 'none' }}>
                            <Card.Title style={{ color: 'black' }}> Account Info:
                                <Button size='sm' className='float-right' style={{ marginRight: 0 }} variant='outline-success'>
                                    Change credentials
                                </Button>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body style={{ border: 'none', paddingTop: 0 }}>
                            <Form>
                                <FormControl style={formControlStyle} defaultValue='Metatrader 5' />
                                <div style={{ marginTop: 25, display: 'flex' }}>
                                    <Form.Switch style={{ width: '50%' }} label='Paper account: ' />
                                    <Form.Switch style={{ width: '50%' }} label='Active: ' checked />
                                </div>
                                <div style={{ marginTop: 25, marginBottom: 20, display: 'flex' }}>
                                    <Form.Group style={{ width: '50%' }} controlId='formBasicBroker'>
                                        <Form.Label> Broker: </Form.Label>
                                        <Form.Control placeholder='Enter Broker' defaultValue='Metatrader 5' name='broker' />
                                    </Form.Group>
                                    <Form.Group style={{ width: '50%', marginLeft: 15 }} controlId='formBasicBroker'>
                                        <Form.Label> Broker account: </Form.Label>
                                        <Form.Control placeholder='Enter Broker Account' defaultValue='PA3OPGAX1STP' name='broker_account' />
                                    </Form.Group>
                                </div>
                                <div style={bottomButtonProviderStyle}>
                                    <Button style={bottomButtonStyle} size='sm' variant='success'> Save </Button>
                                </div>
                                <div style={bottomButtonProviderStyle}>
                                    <Button style={bottomButtonStyle} size='sm' variant='light'> Cancel </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={6} sm={12} lg={6}>
                    <Card style={{ height: 530 }}>
                        <Card.Header style={{ border: 'none', paddingBottom: 10 }}>
                            <Card.Title style={{ color: 'black' }}> Account Stats: </Card.Title>
                        </Card.Header>
                        <Card.Body style={{ border: 'none', paddingTop: 0 }}>
                            <Form>
                                <div style={{ display: 'flex' }}>
                                    <Form.Group style={{ width: '50%' }} controlId='formBasicBroker'>
                                        <Form.Label> Cash </Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text> USD </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control placeholder='Enter Cash' defaultValue='100000' name='cash' />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group style={{ width: '50%', marginLeft: 15 }} controlId='formBasicBroker'>
                                        <Form.Label> Buying power </Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text> USD </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control placeholder='Enter Buying power' defaultValue='100000' name='buying_power' />
                                        </InputGroup>
                                    </Form.Group>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <Form.Group style={{ width: '50%' }} controlId='formBasicBroker'>
                                        <Form.Label> Cash </Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text> USD </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control placeholder='Enter Cash' defaultValue='100000' name='cash' />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group style={{ width: '50%', marginLeft: 15 }} controlId='formBasicBroker'>
                                        <Form.Label> Buying power </Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text> USD </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control placeholder='Enter Buying power' defaultValue='100000' name='buying_power' />
                                        </InputGroup>
                                    </Form.Group>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <Form.Group style={{ width: '50%' }} controlId='formBasicBroker'>
                                        <Form.Label> Cash </Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text> USD </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control placeholder='Enter Cash' defaultValue='100000' name='cash' />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group style={{ width: '50%', marginLeft: 15 }} controlId='formBasicBroker'>
                                        <Form.Label> Buying power </Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text> USD </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control placeholder='Enter Buying power' defaultValue='100000' name='buying_power' />
                                        </InputGroup>
                                    </Form.Group>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <Form.Group style={{ width: '50%' }} controlId='formBasicBroker'>
                                        <Form.Label> Cash </Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text> USD </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control placeholder='Enter Cash' defaultValue='100000' name='cash' />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group style={{ width: '50%', marginLeft: 15 }} controlId='formBasicBroker'>
                                        <Form.Label> Buying power </Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text> USD </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control placeholder='Enter Buying power' defaultValue='100000' name='buying_power' />
                                        </InputGroup>
                                    </Form.Group>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <Form.Group style={{ width: '50%' }} controlId='formBasicBroker'>
                                        <Form.Label> Cash </Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text> USD </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control placeholder='Enter Cash' defaultValue='100000' name='cash' />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group style={{ width: '50%', marginLeft: 15 }} controlId='formBasicBroker'>
                                        <Form.Label> Buying power </Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text> USD </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control placeholder='Enter Buying power' defaultValue='100000' name='buying_power' />
                                        </InputGroup>
                                    </Form.Group>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12} xl={12} sm={12}>
                    <Card style={{ height: 200 }}>
                        <Table responsive size='sm'>
                            <thead>
                                <tr style={{ background: "#E5E5E5" }}>
                                    <th> Asset </th>
                                    <th> Start Date </th>
                                    <th> End Date </th>
                                    <th> Last Price </th>
                                    <th> Average Fill Price </th>
                                    <th> Quantity </th>
                                    <th> Side </th>
                                    <th> P&L </th>
                                    <th> P&L % </th>
                                    <th> Status </th>
                                    <th> Account </th>
                                    <th> Strategy ID </th>
                                </tr>
                            </thead>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AccountDetail