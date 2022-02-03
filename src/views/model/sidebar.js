import { useState } from 'react';
import {
    ListGroup, FormControl, Button, Badge,
    Popover, OverlayTrigger,
} from 'react-bootstrap';

export const ModelsSider = () => {
    const [showAddPopup] = useState(true);
    const modelSiderStyle = {
        width: 200,
        height: '100%',
        position: 'absolute'
    }
    const listStyle = {
        border: 'none'
    }
    const listGroupStyle = {
        marginTop: 20,
        backgroundColor: 'white'
    }
    const plusButtonStyle = {
        background: 'none',
        padding: 0,
        margin: 0,
        border: 'none',
        float: 'right',
    }
    const badgeStyle = {
        float: 'right',
        marginTop: 3,
    }
    const popoverStyle = {
        backgroundColor: '#141E4E',
        color: 'white'
    }
    const popover = (
        <Popover show={showAddPopup}>
            <Popover.Title as="h3" style={popoverStyle}> DeepTrade.mL </Popover.Title>
            <Popover.Content>
                <FormControl placeholder='Add New Folder' style={{ backgroundColor: 'white', height: 37, width: 250 }} />
                <div style={{ float: 'right', margin: '35px auto 20px auto' }}>
                    <Button size='sm' style={{ margin: 'auto 10px auto auto' }}> Discard </Button>
                    <Button size='sm' style={{ margin: 0 }}> Add Folder </Button>
                </div>
            </Popover.Content>
        </Popover>
    );

    const PlusButton = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button style={plusButtonStyle}> <img src='/images/models/icons/plus.png' alt="plus" /> </Button>
        </OverlayTrigger>
    );
    return (
        <div style={modelSiderStyle}>
            <FormControl style={{ padding: 10, height: 35, backgroundColor: 'white' }} placeholder='Search' />
            <ListGroup style={listGroupStyle}>
                <ListGroup.Item style={listStyle}>
                    FOLDER <PlusButton />
                </ListGroup.Item>
                <ListGroup.Item style={{ borderRight: 'none', borderLeft: 'none', paddingBottom: 30 }}>
                    <img src='/images/models/icons/folder.png' alt="folder" /> All Models <Badge style={badgeStyle} variant="secondary">3</Badge>
                </ListGroup.Item>
                <ListGroup.Item style={{ ...listStyle, marginTop: 15 }}>
                    <img src='/images/models/icons/folder.png' alt="folder" /> Stocks Models <Badge style={badgeStyle} variant="secondary">1</Badge>
                </ListGroup.Item>
                <ListGroup.Item style={listStyle}>
                    <img src='/images/models/icons/folder.png' alt="folder" /> Crypto Models <Badge style={badgeStyle} variant="secondary">1</Badge>
                </ListGroup.Item>
                <ListGroup.Item style={listStyle}>
                    <img src='/images/models/icons/folder.png' alt="folder" /> Currency Models <Badge style={badgeStyle} variant="secondary">1</Badge>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}