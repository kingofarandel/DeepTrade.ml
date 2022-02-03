import { useState } from 'react'
import {
    Card,
    Tabs, Tab,
} from 'react-bootstrap'
import { Profile } from './profile'
import { EmailNotification } from './email_notification'
import { AffiliateProgram } from './affiliate_program'

export const Settings = () => {
    const [settingKey, setSettingKey] = useState('')
    const settingAction = e => setSettingKey(e)
    return (
        <Card style={{ marginTop: 5 }}>
            <Card.Body>
                <Tabs defaultActiveKey='profile' onSelect={settingAction}>
                    <Tab title='Profile' eventKey='profile'> <Profile /> </Tab>
                    <Tab title='Email & Notifications' eventKey='email_notifications'>
                        <EmailNotification />
                    </Tab>
                    <Tab title='Timezone settings' eventKey='timezone_settings'></Tab>
                    <Tab title='Affiliate Program' eventKey='affiliate_program'>
                        <AffiliateProgram settingKey={settingKey} />
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    )
}