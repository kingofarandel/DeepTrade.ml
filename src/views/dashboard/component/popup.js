import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalTitle, Form, Card } from 'react-bootstrap'

const InviteNewModal = props => (
    <Modal
        {...props}
        centered
    >
        <Modal.Header style={{ backgroundColor: '#495FCB' }}>
            <ModalTitle style={{ color: '#FFFFFF' }}> Invite New Member </ModalTitle>
        </Modal.Header>
        <ModalBody>
            <Form>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label> Enter Email Address </Form.Label>
                    <Form.Control type='email' placeholder='Enter email' name='email' />
                </Form.Group>
                <Card style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <Button style={{ padding: '3px 10px', marginRight: 20 }} size='sm' variant='secondary'> Admin </Button>
                    <Button style={{ padding: '3px 10px', marginRight: 0 }} size='sm' variant='secondary'> Editor </Button>
                </Card>
                <Card style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginBottom: 0 }}>
                    <Button style={{ marginRight: 0, padding: '4px 40px' }} size='sm' type='submit' variant='success'>
                        Send Invite
                    </Button>
                </Card>
            </Form>
        </ModalBody>
    </Modal>
)

const InviteMemberItemButton = ({ createButtonItem }) => {
    const [inviteModalShow, setInviteModalShow] = useState(false)
    const showInviteModal = () => createButtonItem === 'members' && setInviteModalShow(!inviteModalShow)
    return (
        <>
            <Button onClick={showInviteModal} className='float-right' variant='success' size='sm'>
                + { createButtonItem === 'members' ? 'Invite New Member' : 'Create Model' }
            </Button>
            <InviteNewModal
                show={inviteModalShow}
                onHide={() => showInviteModal()}
            />
        </>
    )
}

export default InviteMemberItemButton;