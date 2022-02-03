import {
    CardGroup, Card, Table,
    Button
} from 'react-bootstrap';

export const Members = () => {
    return (
        <>
            <Card style={{ marginTop: 25 }}>
                <Table responsive size='sm' hover>
                    <thead>
                        <tr style={{ background: "#E5E5E5" }}>
                            <th> Name </th>
                            <th> Email </th>
                            <th> Role </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"> Smith John </th>
                            <td> johns@deeptrade.com </td>
                            <td>
                                <Button variant='secondary' size='sm' style={{ padding: '2px 10px' }}> admin </Button>
                            </td>
                            <td>
                                <Button size='sm' className='btn btn-sm btn-success' style={{ padding: 3 }} >
                                    <i className='feather icon-edit' style={{ margin: 0 }}></i>
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
            <br />
            <Card>
                <Table responsive size='sm' hover>
                    <thead>
                        <tr style={{ background: "#E5E5E5" }}>
                            <th> Email </th>
                            <th> Role </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </Table>
            </Card>
            <CardGroup>
                <Card style={{ margin: 10 }} className='shadow-card'>
                    <Card.Header>
                        <Button variant='secondary' size='sm'> Admin </Button>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            An admin has full control over the settings and assets on the platform (organization members, projects, experiments and deployment).
                            Only admin can invite and remove members from the organization or change their roles.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ margin: 10 }} className='shadow-card'>
                    <Card.Header>
                        <Button variant='secondary' size='sm'> Editor </Button>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            An Editor has develop access to most assets - projects, experiments and deployments.
                            Editor can initiate new projects, upload datasets, experiment with models and deploy them.
                            Editor can delete projects, datasets and experiments to remove obsolete content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </>
    )
}