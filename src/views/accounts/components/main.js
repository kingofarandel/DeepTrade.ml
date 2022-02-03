import React from 'react';
import { Link } from 'react-router-dom';
import {
    Row, Col, Table,
    Button, Form, FormGroup,
} from 'react-bootstrap';
import { CreateAccountItemButton } from "./create_account_popup";
const AccountMain = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={12} xl={12} sm={12}>
                    <span>
                        An account object holds your destination broker's credentials.<br />
                        This allows you to route orders to the desired broker.
                    </span>
                    <CreateAccountItemButton />
                </Col>
                <Col md={12} xl={12} sm={12} lg={12} style={{ marginTop: 30 }}>
                    <Form>
                        <FormGroup controlId='deletedCheckForm'>
                            <Form.Check label="Show deleted accounts" name='deleted_check' />
                        </FormGroup>
                    </Form>
                    <Table responsive size='sm'>
                        <thead>
                            <tr style={{ background: "#E5E5E5" }}>
                                <th> # </th>
                                <th> Name </th>
                                <th> Broker </th>
                                <th> Cash </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"> 01 </th>
                                <th scope="row"> My Alpaca 433 </th>
                                <td> Alpaca </td>
                                <td> $10,000 </td>
                                <td>
                                    <Link to='/accounts/1'>
                                        <Button size='sm' className='btn btn-sm btn-success' style={{ padding: 3 }} >
                                            <i className='feather icon-edit' style={{ margin: 0 }}></i>
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AccountMain;
