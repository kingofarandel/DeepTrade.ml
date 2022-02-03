import React, { useState } from 'react';
import { Card, Table, Form, Accordion } from 'react-bootstrap';
import { MoveItemButton } from './move_popup';

export const InactiveModels = () => {
    const [collapseKey, setCollapseKey] = useState({
        tab1: '0',
        tab2: '0',
        tab3: '0',
    })
    const handleCollpase = e => {
        switch (e) {
            case 'tab1':
                setCollapseKey({
                    tab1: collapseKey.tab1 === '0' ? '1' : '0',
                    tab2: '0',
                    tab3: '0',
                })
                break;
            case 'tab2':
                setCollapseKey({
                    tab1: '0',
                    tab2: collapseKey.tab2 === '0' ? '1' : '0',
                    tab3: '0',
                })
                break;
            case 'tab3':
                setCollapseKey({
                    tab1: '0',
                    tab2: '0',
                    tab3: collapseKey.tab3 === '0' ? '1' : '0',
                })
                break;
            default:
                break;
        }
    }
    return (
        <Card style={{ marginTop: 20, overflow: 'auto' }}>
            <div style={{ width: 'auto' }}>
                <Table responsive size='sm' hover>
                    <thead>
                        <tr style={{ background: "#E5E5E5" }}>
                            <th> <img height={30} width={30} src='/images/models/icons/apple.png' alt="apple" /> </th>
                            <th> Name </th>
                            <th> Training Performance </th>
                            <th> Live Performance </th>
                            <th> Max DD </th>
                            <th> status </th>
                            <th> Epochs </th>
                            <th> Predictions </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <th scope="row" style={{ width: 20 }}>
                                <img height={30} width={30} src='/images/models/icons/apple.png' alt="apple" />
                            </th>
                            <td> Optimized PPO </td>
                            <td> 76% accucy </td>
                            <td> $3000 </td>
                            <td> 10% </td>
                            <td>
                                <Form.Control style={{ height: 35, padding: 5, width: 150 }} as='select' size='sm'>
                                    <option value='draft'> Draft </option>
                                    <option value='start_training'> Start Training </option>
                                    <option value='live'> Live </option>
                                    <option value='paper'> Paper </option>
                                </Form.Control>
                            </td>
                            <td> 1000/1000000 </td>
                            <td> - </td>
                            <td>
                                <img height={30} style={{ marginRight: 5, cursor: 'pointer' }} src='/images/models/icons/edit_square.png' alt="edit_square" />
                                <img height={30} style={{ marginRight: 5, cursor: 'pointer' }} src='/images/models/icons/copy_square.png' alt="copy_square" />
                                <img height={30} style={{ marginRight: 5, cursor: 'pointer' }} src='/images/models/icons/delete_square.png' alt="delete_square" />
                                <img onClick={() => handleCollpase('tab1')} height={30} style={{ marginRight: 5, cursor: 'pointer' }} src='/images/models/icons/collapse.png' alt="collapse" />
                                <MoveItemButton />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={9}>
                                <Accordion activeKey={collapseKey.tab1} >
                                    <Accordion.Collapse eventKey='1'>
                                        <div>
                                            <img className='float-right' width={400} src='/images/models/images/radar_plot.png' alt="radar_plot" />
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ width: 20 }}>
                                <img height={30} width={30} src='/images/models/icons/apple.png' alt="apple" />
                                <img height={30} width={30} src='/images/models/icons/apple.png' alt="apple" />
                                <img height={30} width={30} src='/images/models/icons/apple.png' alt="apple" />
                                <img height={30} width={30} src='/images/models/icons/apple.png' alt="apple" />
                            </th>
                            <td> AAPL agent PPO </td>
                            <td> 76% accucy </td>
                            <td> $3000 </td>
                            <td> 10% </td>
                            <td>
                                <Form.Control style={{ height: 35, padding: 5, width: 150 }} as='select' size='sm'>
                                    <option value='draft'> Draft </option>
                                    <option value='start_training'> Start Training </option>
                                    <option value='live'> Live </option>
                                    <option value='paper'> Paper </option>
                                </Form.Control>
                            </td>
                            <td> 1000/1000000 </td>
                            <td> - </td>
                            <td>
                                <img height={30} style={{ marginRight: 5, cursor: 'pointer' }} src='/images/models/icons/edit_square.png' alt="edit_square" />
                                <img height={30} style={{ marginRight: 5, cursor: 'pointer' }} src='/images/models/icons/copy_square.png' alt="copy_square" />
                                <img height={30} style={{ marginRight: 5, cursor: 'pointer' }} src='/images/models/icons/delete_square.png' alt="delete_square" />
                                <img onClick={() => handleCollpase('tab2')} height={30} style={{ marginRight: 5, cursor: 'pointer' }} src='/images/models/icons/collapse.png' alt="collapse" />
                                <MoveItemButton />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={9}>
                                <Accordion activeKey={collapseKey.tab2} >
                                    <Accordion.Collapse eventKey='1'>
                                        <div>
                                            <img className='float-right' width={400} src='/images/models/images/radar_plot.png' alt="radar_plot" />
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ width: 20 }}>
                                <img height={30} width={30} src='/images/models/icons/apple.png' alt="apple" />
                                <img height={30} width={30} src='/images/models/icons/apple.png' alt="apple" />
                                <img height={30} width={30} src='/images/models/icons/apple.png' alt="apple" />
                            </th>
                            <td> AAPL agent PPO </td>
                            <td> 76% accucy </td>
                            <td> $3000 </td>
                            <td> 10% </td>
                            <td>
                                <Form.Control style={{ height: 35, padding: 5, width: 150 }} as='select' size='sm'>
                                    <option value='draft'> Draft </option>
                                    <option value='start_training'> Start Training </option>
                                    <option value='live'> Live </option>
                                    <option value='paper'> Paper </option>
                                </Form.Control>
                            </td>
                            <td> 1000/1000000 </td>
                            <td> - </td>
                            <td>
                                <img height={30} style={{ marginRight: 5, cursor: 'pointer' }} src='/images/models/icons/edit_square.png' alt="edit_square" />
                                <img height={30} style={{ marginRight: 5, cursor: 'pointer' }} src='/images/models/icons/copy_square.png' alt="copy_square" />
                                <img height={30} style={{ marginRight: 5, cursor: 'pointer' }} src='/images/models/icons/delete_square.png' alt="delete_square" />
                                <img onClick={() => handleCollpase('tab3')} height={30} style={{ marginRight: 5, cursor: 'pointer' }} src='/images/models/icons/collapse.png' alt="collapse" />
                                <MoveItemButton />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={9}>
                                <Accordion activeKey={collapseKey.tab3} >
                                    <Accordion.Collapse eventKey='1'>
                                        <div>
                                            <img className='float-right' width={400} src='/images/models/images/radar_plot.png' alt="radar_plot" />
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Card>
    );
};
