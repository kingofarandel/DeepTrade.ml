import { useState } from 'react'
import { Popover, FormControl, OverlayTrigger, Button } from 'react-bootstrap'

export const CreateAccountItemButton = () => {
    const [showMovePopup, setShowMovePopup] = useState(false)
    const triggerMovePopup = () => {
        setShowMovePopup(!showMovePopup)
    }
    const popoverStyle = {
        backgroundColor: '#FFFFFF',
        // color: 'white'
    }
    
    const formElementStyle = {
        backgroundColor: 'white',
        width: 250,
        marginBottom: 10
    }
    const MovePopOver = (
        <Popover>
            <Popover.Title as="h3" style={popoverStyle}> Create Account... </Popover.Title>
            <Popover.Content>
                <FormControl placeholder='Account Name' style={formElementStyle} />
                <FormControl as='select' style={formElementStyle}>
                    <option value='tickmill-demo'> Tickmill-demo </option>
                </FormControl>
                <FormControl placeholder='Key' style={formElementStyle} />
                <FormControl placeholder='Secret' style={formElementStyle} />
                <div style={{ textAlign: 'center', margin: '20px auto 20px auto' }}>
                    <Button size='sm' variant='success' style={{ margin: 0 }}> Create account </Button>
                </div>
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger show={showMovePopup} placement='bottom-end' trigger="click" overlay={MovePopOver}>
            <Button className='float-right' variant='success' size='sm' onClick={triggerMovePopup}> + Create New Account  </Button>
        </OverlayTrigger>
    )
}