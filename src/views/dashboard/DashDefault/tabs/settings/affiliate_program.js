/* eslint-disable jsx-a11y/anchor-is-valid */
import Chart from 'react-apexcharts'
import { Button, Card, ProgressBar, Table, Row, Col } from 'react-bootstrap'

export const AffiliateProgram = ({ settingKey }) => {
    let categories = []
    let chatData = []
    for (let i = 0; i < 31; i++) {
        if ((i + 19) < 32) categories.push((i + 19))
        else categories.push(i - 13)
        chatData.push(0)
    }
    const data = {
        options: {
            chart: {
                id: 'apexchart-example'
            },
            xaxis: {
                categories,
            }
        },
        series: [{
            name: 'series-1',
            data: chatData,
        }]
    }
    return (
        <div style={{ margin: '40px auto auto 10px' }}>
            <Row>
                <Col md={6} lg={6} sm={12}>
                    <Row>
                        <Col md={7} sm={12} lg={7}>
                            <Card style={{ margin: 0, padding: 0 }}>
                                <Card.Header style={{ border: 'none', color: 'black', padding: 0, margin: 0 }}> Reward </Card.Header>
                                <Card.Body style={{ margin: 0, padding: 0 }}>
                                    <Button size='sm' style={{ width: '100%', marginTop: 10 }} variant='success'> $0.00 </Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ margin: '15px auto auto auto', padding: 0 }}>
                                <Card.Header style={{ border: 'none', color: 'black', padding: 0, margin: 0 }}>
                                    Your affiliate link
                                </Card.Header>
                                <Card.Body style={{ margin: 0, padding: 0, marginTop: 4 }}>
                                    <a size='sm' style={{ fontSize: 13 }} href='https://deeptrade.ml/?pc=integromats'> https://deeptrade.ml/?pc=integromats </a>
                                </Card.Body>
                            </Card>
                            <Card style={{ margin: '15px auto auto auto', padding: 0 }}>
                                <Card.Header style={{ border: 'none', color: 'black', padding: 0, margin: 0 }}> Other links </Card.Header>
                                <Card.Body style={{ margin: 0, padding: 0, marginTop: 4 }}>
                                    <a size='sm' style={{ fontSize: 13 }} herf="#"> Terms and conditions </a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={5} sm={12} lg={5}>
                            <Card>
                                <Card.Header style={{ border: 'none', margin: 0, padding: 0 }}>
                                    <span className='float-left' style={{ color: 'black', fontSize: 12 }}> Minimum payout </span>
                                    <span className='float-right' style={{ fontSize: 11 }}> $0.00 / $100.00 </span>
                                </Card.Header>
                                <Card.Body style={{ margin: '10px 0px 0px 0px', padding: 0 }}>
                                    <ProgressBar now={100} variant='secondary' />
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header style={{ border: 'none', margin: 0, padding: 0 }}>
                                    <span className='float-left' style={{ color: 'black', fontSize: 12 }}> Minimum clients </span>
                                    <span className='float-right' style={{ fontSize: 11 }}> 0 / 3 </span>
                                </Card.Header>
                                <Card.Body style={{ margin: '10px 0px 0px 0px', padding: 0 }}>
                                    <ProgressBar now={100} variant='secondary' />
                                </Card.Body>
                            </Card>
                            <Card>
                                <Button size='sm' variant='outline-success'> Request payout </Button>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} lg={6} sm={12}>
                    {settingKey === 'affiliate_program' && <Chart options={data.options} series={data.series} type="bar" width='100%' height={300} />}
                </Col>
            </Row>
            <Row>
                <Col md={12} lg={12} sm={12}>
                    <Table responsive size='sm'>
                        <thead>
                            <tr style={{ background: "#E5E5E5" }}>
                                <th> CREATED </th>
                                <th> CLIENT ID </th>
                                <th> TYPE </th>
                                <th> REWARD </th>
                                <th> STATUS </th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}