import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Row, Col, Button, Badge, FormCheck, FormControl,
    InputGroup, ProgressBar, Toast
} from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import './style.css'

const InstanceDefault = () => {
    const [show, setShow] = useState(false);
    const [instanceItem, setInstanceItem] = useState('');
    const handleToastr = (item) => {
        setShow(true);
        setInstanceItem(item);
    }
    const columns = [
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
            width: '120px',
            style: {
                fontSize: 10,
                padding: 0,
            }
        },
        {
            name: 'State',
            selector: 'state',
            sortable: true,
            width: '70px',
            style: {
                fontSize: 10,
                padding: 0,
            }
        },
        {
            name: 'Progress',
            selector: 'progress',
            sortable: true,
            width: '160px',
            center: true,
            style: {
                fontSize: 10,
                padding: 0
            }
        },
        {
            name: 'Stack',
            selector: 'stack',
            sortable: true,
            width: '70px',
            style: {
                fontSize: 10,
                padding: 0
            }
        },
        {
            name: 'Image',
            selector: 'image',
            sortable: true,
            width: '80px',
            style: {
                fontSize: 10,
                padding: 0
            }
        },
        {
            name: 'Created',
            selector: 'created',
            sortable: true,
            width: '120px',
            style: {
                fontSize: 10,
                padding: 0
            }
        },
        {
            name: 'Published Ports',
            selector: 'published_ports',
            sortable: true,
            width: '110px',
            style: {
                fontSize: 10,
                padding: 0
            }
        },
        {
            name: 'Ownership',
            selector: 'ownership',
            sortable: false,
            width: '100px',
            style: {
                fontSize: 10,
                padding: 0
            }
        },
        {
            name: '',
            selector: 'action',
            sortable: false,
            style: {
                fontSize: 10,
                padding: 0
            }
        }
    ]
    const itemButtonStyle = {
        background: 'none',
        border: 'none',
        margin: '0px 5px 0px 0px',
        padding: 0
    }
    const instances = [
        {
            name: 'demo-mysql.1.0mv4e.',
            state: (<h5><Badge variant='success'> running </Badge></h5>),
            progress: (<ProgressBar now={55} style={{ width: 120, height: 9 }} />),
            stack: 'pytorch-ppo',
            image: 'c5.large.aws',
            created: '2020-08-20 09,22.12',
            published_ports: '_',
            ownership: 'administrators',
            action: (<>
                <Button style={itemButtonStyle} onClick={() => handleToastr('play')}>
                    <img width={30} src='/images/global/icons/play.png' alt='instances_play' />
                </Button>
                <Button style={itemButtonStyle} onClick={() => handleToastr('stop')}>
                    <img width={30} src='/images/global/icons/stop.png' alt='instances_stop' />
                </Button>
                <Button style={itemButtonStyle} onClick={() => handleToastr('delete')}>
                    <img width={30} src='/images/global/icons/delete.png' alt='instances_delete' />
                </Button>
                <Button style={itemButtonStyle} onClick={() => handleToastr('duplicate')}>
                    <img width={30} src='/images/global/icons/return.png' alt='instances_return' />
                </Button>
                <Button style={itemButtonStyle} onClick={() => handleToastr('pause')}>
                    <img width={30} src='/images/global/icons/pause.png' alt='instances_pause' />
                </Button>
                <Button style={itemButtonStyle} onClick={() => handleToastr('turn off')}>
                    <img width={30} src='/images/global/icons/turnoff.png' alt='instances_turnoff' />
                </Button>
            </>)
        }
    ]
    return (
        <React.Fragment>
            <Row className='instances_table'>
                <Col md={12} xl={12} sm={12}>
                    <Link to='/instances/create'>
                        <Button className='float-right' variant='success' size='sm'> + Create Instance  </Button>
                    </Link>
                </Col>
                <Col md={12} xl={12} sm={12} lg={12} style={{ marginTop: 30 }}>
                    <Toast style={{position: 'fixed', top: 10, right: 10, zIndex: 9999999}} onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded mr-2"
                                alt=""
                            />
                            <strong className="mr-auto">
                                Are you sure you want to {instanceItem} this instance?
                            </strong>
                        </Toast.Header>
                        <Toast.Body>
                            <Button className='float-right' style={{margin: '0 0 10px 10px'}} size='sm' variant='outline-success'> YES </Button>
                            <Button className='float-right' style={{margin: '0 0 10px 0px'}} size='sm' variant='outline-danger'> NO </Button>
                        </Toast.Body>
                    </Toast>
                    <DataTable
                        columns={columns}
                        data={instances}
                        selectableRows
                        selectableRowsComponent={FormCheck}
                        title={
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <i className='feather icon-search' style={{ margin: '10px 20px 10px 20px' }} />
                                </InputGroup.Prepend>
                                <FormControl style={{ backgroundColor: '#FFFFFF', border: 'none' }} placeholder='Search' />
                            </InputGroup>
                        }
                        customStyles={{
                            header: {
                                padding: 0,
                            }
                        }}
                    />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default InstanceDefault;