import { useState } from 'react'
import { Popover, FormControl, OverlayTrigger, Button } from 'react-bootstrap'

export const MoveItemButton = () => {
    const [showMovePopup, setShowMovePopup] = useState(false)
    const triggerMovePopup = () => {
        setShowMovePopup(!showMovePopup)
    }
    const popoverStyle = {
        backgroundColor: '#141E4E',
        color: 'white'
    }
    const moveButtonStyle = {
        background: 'none',
        padding: 0,
        margin: 0,
        border: 'none',
    }
    const MovePopOver = (
        <Popover>
            <Popover.Title as="h3" style={popoverStyle}> Select Folder... </Popover.Title>
            <Popover.Content>
                <FormControl as='select' style={{ backgroundColor: 'white', width: 250 }} size='sm'>
                    <option value='stocks_models'> Stocks Models </option>
                    <option value='crypto_models'> Crypto Models </option>
                    <option value='currency_models'> Currency Models </option>
                </FormControl>
                <div style={{ float: 'right', margin: '35px auto 20px auto' }}>
                    <Button onClick={triggerMovePopup} size='sm' style={{ margin: 'auto 10px auto auto' }}> Discard </Button>
                    <Button size='sm' style={{ margin: 0 }}> Select </Button>
                </div>
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger show={showMovePopup} placement='left' trigger="click" overlay={MovePopOver}>
            <Button style={moveButtonStyle} onClick={triggerMovePopup}>
                <img height={30} style={{ cursor: 'pointer' }} src='/images/models/icons/plus.png' alt="plus" />
            </Button>
        </OverlayTrigger>
    )
}