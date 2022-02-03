import React from "react"
import { Row, Col, Button, Card } from "react-bootstrap"

const NotebooksDefault = () => {
    const itemButtonStyle = {
        backgroundColor: '#f4f7fa', borderColor: 'rgb(112, 123, 144)', color: 'black', opacity: 0.8,
        borderRadius: 12, marginBottom: 0,
    }
    const itemCardStyle = {
        marginRight: 20,
        width: window.innerWidth / 5 * 3,
        float: 'left',
        height: 250,
    }
    const itemHeaderSpanStyle = {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    }
    const addModelButtonStyle = {
        backgroundColor: '#3556F4',
        borderRadius: 6,
        margin: 0,
        width: 200,
        textAlign: 'start'
    }
    const cardBodyStyle = {
        width: '50%',
        padding: '0px',
    }
    const cardFooterStyle = {
        border: 'none',
        padding: 0,
    }
    return (
        <React.Fragment>
            <Row>
                <Col md={12} xl={12} sm={12}>
                    <span style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}> Open Source Trading Notebooks </span>
                    <Button className="btn btn-sm btn-success float-right">
                        + Add New Notebook
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
                        <Card.Img className="float-right" style={{ width: 25, marginRight: 8 }} src="/images/notebooks/icons/discord-logo.png" />
                        <Card.Img className="float-right" style={{ width: 25, marginRight: 8 }} src="/images/notebooks/icons/github-logo.png" />
                    </Card.Header>
                    <Card.Body style={cardBodyStyle}>
                        <div style={{ float: 'left', width: '30%', textAlign: 'center', paddingRight: 10 }}>
                            <Card.Img src="/images/datastore/images/logo-2.png" style={{ width: 80, marginTop: 10 }} />
                        </div>
                        <div style={{ float: 'left', width: '70%' }}>
                            <span style={itemHeaderSpanStyle}> TensorTrade </span>
                            {/* <Card.Img className="float-right" style={{ width: 25 }} src="/images/notebooks/icons/github-logo.png" /> */}
                            <Card.Text>
                                An open source reinforcement learning framework for training, evaluating, and deploying robust trading agents.
                            </Card.Text>
                        </div>
                    </Card.Body>
                    <Card.Footer style={cardFooterStyle}>
                        <Button style={addModelButtonStyle} className='float-right'> Train on AWS </Button>
                    </Card.Footer>
                </Card>
                <Card style={itemCardStyle} className='shadow-card'>
                    <Card.Header style={{ padding: 10, border: 'none' }}>
                        <Card.Img className="float-right" style={{ width: 25 }} src="/images/datastore/icons/python-logo.png" />
                        <Card.Img className="float-right" style={{ width: 25, marginRight: 8 }} src="/images/notebooks/icons/github-logo.png" />
                    </Card.Header>
                    <Card.Body style={cardBodyStyle}>
                        <div style={{ float: 'left', width: '35%', textAlign: 'center', paddingRight: 10 }}>
                            <Card.Img src="/images/notebooks/images/double-dot.png" style={{ width: 80, marginTop: 10 }} />
                        </div>
                        <div style={{ float: 'left', width: '65%' }}>
                            {/* <Card.Img className="float-right" style={{ width: 25 }} src="/images/notebooks/icons/github-logo.png" /> */}
                            <span style={itemHeaderSpanStyle}> Intro_to_RL_for_Trading </span>
                            <Card.Text>
                                Materials for blogs and conferences
                            </Card.Text>
                        </div>
                    </Card.Body>
                    <Card.Footer style={cardFooterStyle}>
                        <Button style={addModelButtonStyle} className='float-right'> Train on AWS </Button>
                    </Card.Footer>
                </Card>
                <Card style={itemCardStyle} className='shadow-card'>
                    <Card.Header style={{ padding: 10, border: 'none' }}>
                        <Card.Img className="float-right" style={{ width: 25 }} src="/images/datastore/icons/python-logo.png" />
                    </Card.Header>
                    <Card.Body style={cardBodyStyle}>
                        <div style={{ float: 'left', width: '35%', textAlign: 'center', paddingRight: 10 }}>
                            <Card.Img src="/images/notebooks/images/illustrate.png" style={{ width: 80, marginTop: 10 }} />
                        </div>
                        <div style={{ float: 'left', width: '65%' }}>
                            <span style={itemHeaderSpanStyle}> RL Bitcoin trading bot v4 </span>
                            <Card.Text>
                                Bitcoin trading bot model and reward strategy to increase profitability A2C
                            </Card.Text>
                            <Card.Text>
                                Rokas Balsys
                            </Card.Text>
                        </div>
                    </Card.Body>
                    <Card.Footer style={cardFooterStyle}>
                        <Button variant="light" size="sm" className='float-left' style={{ margin: 20, color: '#556EE6' }}>
                            Explore
                            <img alt="github-logo" style={{ width: 23, marginLeft: 10 }} src="/images/notebooks/icons/github-logo.png" />
                        </Button>
                    </Card.Footer>
                </Card>
                <Card style={itemCardStyle} className='shadow-card'>
                    <Card.Header style={{ padding: 10, border: 'none' }}>
                        <Card.Img className="float-right" style={{ width: 25 }} src="/images/datastore/icons/python-logo.png" />
                    </Card.Header>
                    <Card.Body style={cardBodyStyle}>
                        <div style={{ float: 'left', width: '35%', textAlign: 'center', paddingRight: 10 }}>
                            <Card.Img src="/images/datastore/images/logo-3.png" style={{ width: 80, marginTop: 10 }} />
                        </div>
                        <div style={{ float: 'left', width: '65%' }}>
                            <span style={itemHeaderSpanStyle}> HTFE-tensortrade </span>
                            <Card.Text>
                                Tensortrade project for reinforcement learning in futures market
                            </Card.Text>
                        </div>
                    </Card.Body>
                    <Card.Footer style={cardFooterStyle}>
                        <Button style={addModelButtonStyle} className='float-right'> Train on AWS </Button>
                    </Card.Footer>
                </Card>
                <Card style={itemCardStyle} className='shadow-card'>
                    <Card.Header style={{ padding: 10, border: 'none' }}>
                        <Card.Img className="float-right" style={{ width: 25 }} src="/images/datastore/icons/python-logo.png" />
                    </Card.Header>
                    <Card.Body style={cardBodyStyle}>
                        <div style={{ float: 'left', width: '35%', textAlign: 'center', paddingRight: 10 }}>
                            <Card.Img src="/images/datastore/images/logo-1.png" style={{ width: 80 }} />
                            <Card.Text style={{ marginBottom: 3 }}> Creator: </Card.Text>
                            <Card.Text style={{ fontSize: 15, color: 'black' }}> AI4Finance </Card.Text>
                        </div>
                        <div style={{ float: 'left', width: '65%' }}>
                            <span style={itemHeaderSpanStyle}> FinRL Meta </span>
                            <Card.Text>
                                FinRL Meta Is an open
                                source Deep learning framework based on pytorch implementaion
                            </Card.Text>
                        </div>
                    </Card.Body>
                    <Card.Footer style={cardFooterStyle}>
                        <Button style={addModelButtonStyle} className='float-right'> Train on AWS </Button>
                    </Card.Footer>
                </Card>
                <Card style={itemCardStyle} className='shadow-card'>
                    <Card.Header style={{ padding: 10, border: 'none' }}>
                        <Card.Img className="float-right" style={{ width: 25 }} src="/images/datastore/icons/python-logo.png" />
                    </Card.Header>
                    <Card.Body style={cardBodyStyle}>
                        <div style={{ float: 'left', width: '35%', textAlign: 'center', paddingRight: 10 }}>
                            <Card.Img src="/images/notebooks/images/illustrate-arrow.png" style={{ width: 80 }} />
                            <Card.Text style={{ marginBottom: 3 }}> Creator: </Card.Text>
                            <Card.Text style={{ fontSize: 15, color: 'black' }}> AI4Finance </Card.Text>
                        </div>
                        <div style={{ float: 'left', width: '65%' }}>
                            <span style={itemHeaderSpanStyle}> LSTM BTC Price Predictor </span>
                            <Card.Text>
                                Basic LSTM model that uses indicators from an OHLC dataset to predict price movements above a specified tolerance....
                                prices is provided.
                            </Card.Text>
                        </div>
                    </Card.Body>
                    <Card.Footer style={cardFooterStyle}>
                        <Button style={addModelButtonStyle} className='float-right'> Train on AWS </Button>
                    </Card.Footer>
                </Card>
            </div>
        </React.Fragment>
    )
}

export default NotebooksDefault