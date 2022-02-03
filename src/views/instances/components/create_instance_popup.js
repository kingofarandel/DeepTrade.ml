import React from 'react'
import { Link } from 'react-router-dom'
import {
    Row, Col,
    Button, FormControl,
    InputGroup,
} from 'react-bootstrap'
import DataTable from 'react-data-table-component'

const CreateInstanceItemButton = () => {
    const columns = [
        {
            name: 'INSTANCE',
            selector: 'instance',
            sortable: false,
            width: '90px',
            center: true,
            style: {
                fontSize: 12,
                padding: 0,
            }
        },
        {
            name: 'GPU',
            selector: 'gpu',
            sortable: true,
            width: '90px',
            center: true,
            style: {
                fontSize: 12,
                padding: 0,
            }
        },
        {
            name: 'REGION',
            selector: 'region',
            sortable: true,
            center: true,
            style: {
                fontSize: 12,
                padding: 0,
            }
        },
        {
            name: 'UNIT RAM',
            selector: 'unit_ram',
            sortable: true,
            center: true,
            width: '120px',
            style: {
                fontSize: 12,
                padding: 0,
            }
        },
        {
            name: 'CPU',
            selector: 'cpu',
            sortable: true,
            center: true,
            style: {
                fontSize: 12,
                padding: 0,
            }
        },
        {
            name: 'CPU CORES',
            selector: 'cpu_cores',
            sortable: true,
            center: true,
            width: '120px',
            style: {
                fontSize: 12,
                padding: 0,
            }
        },
        {
            name: 'PRICING',
            selector: 'pricing',
            sortable: true,
            center: true,
            width: '110px',
            style: {
                fontSize: 12,
                padding: 0,
            }
        },
        {
            name: 'CAPACITY',
            selector: 'capacity',
            sortable: true,
            center: true,
            style: {
                fontSize: 12,
                padding: 0,
            }
        },
        {
            name: 'AVAILABILITY',
            selector: 'availability',
            sortable: true,
            center: true,
            width: '130px',
            style: {
                fontSize: 12,
                padding: 0,
            }
        },
        {
            name: '',
            selector: 'action',
            sortable: false,
            center: true,
            style: {
                fontSize: 12,
                padding: 0,
            }
        }
    ]
    const instances = [
        {
            instance: '',
            gpu: '',
            region: 'US East(N, Virgina)',
            unit_ram: '15',
            cpu: 'Xeon E5',
            cpu_cores: '8',
            pricing: '$0.14/h',
            capacity: '64',
            availability: '50%',
            action: (
                <Button size='sm' style={{ backgroundColor: 'rgb(53, 86, 244)' }}> Get Code </Button>
            ),
        },
        {
            instance: '',
            gpu: '',
            region: 'US East(N, Virgina)',
            unit_ram: '30',
            cpu: 'Xeon E5',
            cpu_cores: '16',
            pricing: '$0.25/h',
            capacity: '64',
            availability: '69%',
            action: (
                <Button size='sm' style={{ backgroundColor: 'rgb(53, 86, 244)' }}> Get Code </Button>
            ),
        },
        {
            instance: '',
            gpu: '',
            region: 'US East(N, Virgina)',
            unit_ram: '60',
            cpu: 'Xeon E5',
            cpu_cores: '36',
            pricing: '$0.56/h',
            capacity: '64',
            availability: '93%',
            action: (
                <Button size='sm' style={{ backgroundColor: 'rgb(53, 86, 244)' }}> Get Code </Button>
            ),
        }
    ]
    return (
        <React.Fragment>
            <Row>
                <Col md={12} xl={12} sm={12}>
                    <Link to='/instances'>
                        <Button variant='success' size='sm' className='float-right'>
                            <i className='feather icon-arrow-left' style={{ margin: 0 }} /> Back
                        </Button>
                    </Link>
                </Col>
                <Col md={12} xl={12} sm={12} lg={12} style={{ marginTop: 30 }}>
                    <DataTable
                        columns={columns}
                        data={instances}
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

export default CreateInstanceItemButton;