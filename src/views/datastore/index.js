import React from "react"
import { Row, Col, Button, Card } from "react-bootstrap"

const DatastoreDefault = () => {
    const itemButtonStyle = {
        backgroundColor: '#f4f7fa', borderColor: 'rgb(112, 123, 144)', color: 'black', opacity: 0.8,
        borderRadius: 12, marginBottom: 0,
    }
    const itemCardStyle = {
        marginRight: 20,
        width: 350,
        float: 'left',
        height: 300,
    }
    const itemHeaderSpanStyle = {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    }
    const addModelButtonStyle = {
        backgroundColor: '#3556F4',
        borderRadius: 12,
    }
    return (
        <React.Fragment>
            <Row>
                <Col md={12} xl={12} sm={12}>
                    <span style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}> Preimum ML Data Store </span>
                    <Button className="btn btn-sm btn-success float-right">
                        + Add New Datastore
                    </Button>
                </Col>
            </Row>
            <div style={{ borderTop: '1px solid #E5E5E5', marginTop: 30 }}>
                <div style={{ marginTop: -18 }}>
                    <Button style={itemButtonStyle} size='sm'> Crypto Currency </Button>
                    <Button style={itemButtonStyle} size='sm'> Stocks </Button>
                    <Button style={itemButtonStyle} size='sm'> Stocks Portfolio </Button>
                    <Button style={itemButtonStyle} size='sm'> Forex </Button>
                    <Button style={itemButtonStyle} size='sm'> Futures </Button>
                </div>
            </div>
            <div style={{ marginTop: 20 }}>
                <Card style={itemCardStyle} className='shadow-card'>
                    <Card.Header style={{ padding: 10, border: 'none' }}>
                        <Card.Img className="float-right" style={{ width: 25 }} src="/images/datastore/icons/python-logo.png" />
                    </Card.Header>
                    <Card.Body style={{ paddingTop: 0 }}>
                        <div style={{ float: 'left', width: '35%', textAlign: 'center', paddingRight: 10 }}>
                            <Card.Img src="/images/datastore/images/logo-1.png" style={{ width: 80 }} />
                            <Card.Text style={{ marginBottom: 3 }}> Creator: </Card.Text>
                            <Card.Text style={{ fontSize: 15, color: 'black' }}> AI4Finance </Card.Text>
                        </div>
                        <div style={{ float: 'left', width: '65%' }}>
                            <span style={itemHeaderSpanStyle}> Sentiment Data </span>
                            <Card.Text>
                                FinRL Meta Is an open
                                source Deep learning framework based on pytorch implementaion
                            </Card.Text>
                        </div>
                    </Card.Body>
                    <Card.Footer style={{ border: 'none', textAlign: 'center' }}>
                        <Button style={addModelButtonStyle}> Add To Model </Button>
                    </Card.Footer>
                </Card>
                <Card style={itemCardStyle} className='shadow-card'>
                    <Card.Body>
                        <div style={{ float: 'left', width: '35%', textAlign: 'center', paddingRight: 10 }}>
                            <Card.Img src="/images/datastore/images/logo-2.png" style={{ width: 80, marginTop: 10 }} />
                        </div>
                        <div style={{ float: 'left', width: '65%' }}>
                            <span style={itemHeaderSpanStyle}> Sentiment Data </span>
                            <Card.Text>
                                FinRL Meta Is an open
                                source Deep learning framework based on pytorch implementaion
                            </Card.Text>
                        </div>
                    </Card.Body>
                    <Card.Footer style={{ border: 'none', textAlign: 'center' }}>
                        <Button style={addModelButtonStyle}> Add To Model </Button>
                    </Card.Footer>
                </Card>
                <Card style={itemCardStyle} className='shadow-card'>
                    <Card.Body>
                        <div style={{ float: 'left', width: '35%', textAlign: 'center', paddingRight: 10 }}>
                            <Card.Img src="/images/datastore/images/logo-3.png" style={{ width: 80, marginTop: 10 }} />
                        </div>
                        <div style={{ float: 'left', width: '65%' }}>
                            <span style={itemHeaderSpanStyle}> Sentiment Data </span>
                            <Card.Text>
                                FinRL Meta Is an open
                                source Deep learning framework based on pytorch implementaion
                            </Card.Text>
                        </div>
                    </Card.Body>
                    <Card.Footer style={{ border: 'none', textAlign: 'center' }}>
                        <Button style={addModelButtonStyle}> Add To Model </Button>
                    </Card.Footer>
                </Card>
            </div>
        </React.Fragment>
    )
}

export default DatastoreDefault;