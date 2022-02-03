import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Button, Modal, ModalBody, ModalTitle, Form, FormControl, FormLabel, FormGroup } from 'react-bootstrap'
// import DataTable from 'react-data-table-component'

const CreateKeyModal = props => (
    <Modal
        {...props}
        centered
    >
        <Modal.Header style={{ backgroundColor: '#495FCB' }}>
            <ModalTitle style={{ color: '#FFFFFF' }}> Add New Key </ModalTitle>
        </Modal.Header>
        <ModalBody>
            <Form>
                <FormGroup>
                    <FormLabel> Name </FormLabel>
                    <FormControl />
                </FormGroup>
                <FormGroup>
                    <FormLabel> Api Key </FormLabel>
                    <FormControl />
                </FormGroup>
                <FormGroup>
                    <FormLabel> Secret Key </FormLabel>
                    <FormControl />
                </FormGroup>
                <Button type='submit' className='float-right' style={{ margin: 0, backgroundColor: '#495FCB' }}> Save </Button>
            </Form>
        </ModalBody>
    </Modal>
)

const CreateKeyItemButton = () => {
    const [createKeyModalShow, setCreateKeyModalShow] = useState(false)
    const showCreateKeyModal = () => setCreateKeyModalShow(!createKeyModalShow)
    return (
        <>
            <Button onClick={showCreateKeyModal} className='float-right' variant='success' size='sm'> + Create New Key  </Button>
            <CreateKeyModal
                show={createKeyModalShow}
                onHide={() => showCreateKeyModal()}
            />
        </>
    )
}

export default CreateKeyItemButton;