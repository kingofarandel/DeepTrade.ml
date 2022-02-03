import React from 'react';
import {
    Row, Col, Tabs, Tab,
    Button, Badge
} from 'react-bootstrap';
import { AllTab } from './tabs/all';
import { ActiveModels } from './tabs/active_models';
import { InactiveModels } from './tabs/inactive_models';
import { TemplatesModel } from './tabs/template';
import { ModelsSider } from './sidebar';

const ModelDefault = () => {
    return (
        <React.Fragment>
            <ModelsSider />
            <div style={{ marginLeft: 230 }}>
                <Row>
                    <Col md={12} xl={12} sm={12}  >
                        <Button className="btn btn-sm btn-success float-right">
                            + Create New Model
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tabs defaultActiveKey="all">
                            <Tab eventKey="all" title='All'>
                                <AllTab />
                            </Tab>
                            <Tab eventKey="active_models" title={<> ACTIVE MODELS <Badge variant="secondary">10</Badge> </>}>
                                <ActiveModels />
                            </Tab>
                            <Tab eventKey="inactive_models" title={<> INACTIVE MODELS <Badge variant="secondary">10</Badge> </>}>
                                <InactiveModels />
                            </Tab>
                            <Tab eventKey="templates" title={<> TEMPLATES <Badge variant="secondary">10</Badge> </>}>
                                <TemplatesModel />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};

export default ModelDefault;
