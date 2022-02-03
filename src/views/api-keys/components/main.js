/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
// import { Link } from 'react-router-dom'
import {
    Row, Col, Tabs, Tab,
    Button,
} from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import CreateKeyItemButton from './create_key_popup'

const APIKeyDefault = () => {
    const columns = [
        {
            name: '',
            selector: 'key',
            // sortable: true,
        },
        {
            name: '',
            selector: 'action',
            sortable: false,
            right: true,
            // width: '250px',
        }
    ]
    const api_keys = [
        {
            key: (<>
                <Button style={{ background: 'none', borderColor: '#E5E5E5', float: 'left' }} size='sm'> <img alt='key-icon' src='/images/api_keys/icons/key.png' /> </Button>
                <div style={{ float: 'left', marginLeft: 6 }}>
                    <div style={{ fontWeight: 'bold', opacity: '0.8' }}> TwittFintech sentiment Api key </div>
                    <div style={{ fontWeight: 'bold', opacity: '0.4' }}>
                        <img src='pipe-icon' src='/images/api_keys/icons/file-line.png' /> 7
                        <img src='pipe-icon' src='/images/api_keys/icons/pipe-line.png' /> 1.1 KB / 1.0 MB
                    </div>
                </div>
            </>),
            action: (<>
                {/* <Button size='sm' style={{ backgroundColor: '#556EE6' }}> <img src='/images/api_keys/icons/eye-line.png' alt='browse-icon' /> Browse </Button> */}
                <Button size='sm' variant='outline-light' style={{ color: 'grey', borderColor: '#E5E5E5' }}> <img src='/images/api_keys/icons/edit-box-line.png' alt='edit-icon' /> Edit </Button>
                <Button size='sm' variant='outline-light' style={{ color: 'grey', borderColor: '#E5E5E5' }}> <img src='/images/api_keys/icons/delete-box-line.png' alt='delete-icon' /> Delete </Button>
            </>),
        },
        {
            key: (<>
                <Button style={{ background: 'none', borderColor: '#E5E5E5', float: 'left' }} size='sm'> <img alt='key-icon' src='/images/api_keys/icons/key.png' /> </Button>
                <div style={{ float: 'left', marginLeft: 6 }}>
                    <div style={{ fontWeight: 'bold', opacity: '0.8' }}> Settings data store </div>
                    <div style={{ fontWeight: 'bold', opacity: '0.4' }}>
                        <img src='pipe-icon' src='/images/api_keys/icons/file-line.png' /> 7
                        <img src='pipe-icon' src='/images/api_keys/icons/pipe-line.png' /> 1.1 KB / 1.0 MB
                    </div>
                </div>
            </>),
            action: (<>
                {/* <Button size='sm' style={{ backgroundColor: '#556EE6' }}> <img src='/images/api_keys/icons/eye-line.png' alt='browse-icon' /> Browse </Button> */}
                <Button size='sm' variant='outline-light' style={{ color: 'grey', borderColor: '#E5E5E5' }}> <img src='/images/api_keys/icons/edit-box-line.png' alt='edit-icon' /> Edit </Button>
                <Button size='sm' variant='outline-light' style={{ color: 'grey', borderColor: '#E5E5E5' }}> <img src='/images/api_keys/icons/delete-box-line.png' alt='delete-icon' /> Delete </Button>
            </>),
        }
    ]
    return (
        <React.Fragment>
            <Row>
                <Col md={12} xl={12} sm={12}> <CreateKeyItemButton /> </Col>
                <Col md={12} xl={12} sm={12} lg={12}>
                    <Tabs defaultActiveKey='all'>
                        <Tab eventKey='all' title='ALL'>
                            <div style={{ paddingTop: 15, backgroundColor: '#FFFFFF' }}>
                                <DataTable
                                    columns={columns}
                                    data={api_keys}
                                    noTableHead
                                />
                            </div>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default APIKeyDefault;