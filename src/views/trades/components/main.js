import React, { Fragment } from 'react';
import { Col, Row, Tabs, Tab, Button, Fade } from 'react-bootstrap';
import { connect } from 'react-redux';
import Diagram from './diagram';
import TrainingResult from './trainingResult';
import BackTest from './backtest';
import Trading from './trading';
import Template from './template'
import { Code } from 'react-bootstrap-icons';
import './style.css';

export const main = (props) => {
    return (
        <Fragment>
            <Row>
                <Col md={12} xl={12} sm={12} >
                    <Button type="button" variant="dark" className="float-right mt-2 mb-0" size="sm">
                        <Code />{' '}
                        Termial
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Tabs defaultActiveKey="diagram" transition={Fade} className="mb-1 trade">
                        <Tab eventKey="diagram" title="Daigram">
                            <Diagram />
                        </Tab>
                        <Tab eventKey="training_result" title="Training Results">
                            <TrainingResult />
                        </Tab>
                        <Tab eventKey="backtest" title="Backtest">
                            <BackTest />
                        </Tab>
                        <Tab eventKey="trading" title="Trading">
                            <Trading />
                        </Tab>
                        <Tab eventKey="template" title="Templates">
                            <Template />
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(main);
