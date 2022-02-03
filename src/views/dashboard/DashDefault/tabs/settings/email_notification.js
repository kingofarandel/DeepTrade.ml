import { Button, Card, Form } from 'react-bootstrap'

export const EmailNotification = () => {
    const cardHeaderStyle = {
        border: 'none',
        padding: 0,
        margin: 0,
    }
    const cardBodyStyle = {
        border: 'none',
        padding: 0,
        margin: 0,
    }
    const cardStyle = {
        margin: '30px auto auto auto',
        padding: 0,
    }
    const cardTitleStyle = {
        marginBottom: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    }
    const cardTextStyle = {
        color: 'black'
    }
    return (
        <div style={{ margin: '40px auto auto 10px' }}>
            <span style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}> Global Notifications </span>
            <Card style={cardStyle}>
                <Card.Header style={cardHeaderStyle}><Card.Title style={cardTitleStyle}> App Updates </Card.Title></Card.Header>
                <Card.Body style={cardBodyStyle}>
                    <span style={cardTextStyle}>
                        Get notified about new apps and services as they become available, as well as changes in the existing apps
                    </span>
                    <Form.Check style={{ float: 'right' }} size='lg' id='turnoff-check1' type='switch' />
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Header style={cardHeaderStyle}><Card.Title style={cardTitleStyle}> Trade Updates - email </Card.Title></Card.Header>
                <Card.Body style={cardBodyStyle}>
                    <span style={cardTextStyle}>
                        Get notified about new trades  and transactions
                    </span>
                    <Form.Check style={{ float: 'right' }} size='lg' id='turnoff-check2' type='switch' />
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Header style={cardHeaderStyle}><Card.Title style={cardTitleStyle}> Trade Ideas </Card.Title></Card.Header>
                <Card.Body style={cardBodyStyle}>
                    <span style={cardTextStyle}>
                        Get new deeptrade trade ideas delivered to your inbox.

                    </span>
                    <Form.Check style={{ float: 'right' }} size='lg' id='turnoff-check3' type='switch' />
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Header style={cardHeaderStyle}><Card.Title style={cardTitleStyle}> Product Updates </Card.Title></Card.Header>
                <Card.Body style={cardBodyStyle}>
                    <span style={cardTextStyle}>
                        Product and feature updates including new releases and important changes.
                    </span>
                    <Form.Check style={{ float: 'right' }} size='lg' id='turnoff-check4' type='switch' />
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Header style={cardHeaderStyle}><Card.Title style={cardTitleStyle}> Events and Webinars </Card.Title></Card.Header>
                <Card.Body style={cardBodyStyle}>
                    <span style={cardTextStyle}>
                        Get notified about deeptrade.ml events and webinars including demos, discussions and community events.
                    </span>
                    <Form.Check style={{ float: 'right' }} size='lg' id='turnoff-check5' type='switch' />
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Header style={cardHeaderStyle}><Card.Title style={cardTitleStyle}> Offers and Promotions </Card.Title></Card.Header>
                <Card.Body style={cardBodyStyle}>
                    <span style={cardTextStyle}>
                        Latest promotions and discounts delivered to your inbox.
                    </span>
                    <Form.Check style={{ float: 'right' }} size='lg' id='turnoff-check6' type='switch' />
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Header style={cardHeaderStyle}><Card.Title style={cardTitleStyle}> Partnerships </Card.Title></Card.Header>
                <Card.Body style={cardBodyStyle}>
                    <span style={cardTextStyle}>
                        Emails with exclusive information for deeptrade.ml partners such as partner updates and resources.
                    </span>
                    <Form.Check style={{ float: 'right' }} size='lg' id='turnoff-check7' type='switch' />
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Header style={cardHeaderStyle}><Card.Title style={cardTitleStyle}> Academy </Card.Title></Card.Header>
                <Card.Body style={cardBodyStyle}>
                    <span style={cardTextStyle}>
                        Receive the latest content from deeptrade Academy including videos, tutorials and educational events.
                    </span>
                    <Form.Check style={{ float: 'right' }} size='lg' id='turnoff-check8' type='switch' />
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Header style={cardHeaderStyle}><Card.Title style={cardTitleStyle}> Blog and Newsletter </Card.Title></Card.Header>
                <Card.Body style={cardBodyStyle}>
                    <span style={cardTextStyle}>
                        Get the latest advice, resources and updates on all things Integromat and no-code automation.
                    </span>
                    <Form.Check style={{ float: 'right' }} size='lg' id='turnoff-check9' type='switch' />
                </Card.Body>
            </Card>
            <div style={{textAlign: 'center', marginTop: 50}}>
                <Button variant='success'> Save Changes </Button>
            </div>
        </div>
    )
}