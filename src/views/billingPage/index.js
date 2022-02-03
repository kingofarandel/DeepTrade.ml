/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// import { Tabs, Tab, Nav } from 'react-bootstrap';


// import {

//     Button,
//     OverlayTrigger,
//     Tooltip,
//     ButtonToolbar,
//     ToggleButtonGroup,
//     ToggleButton,
//     Dropdown,
//     DropdownButton,
//     SplitButton,
//     ButtonGroup
// } from 'react-bootstrap';
const DashDefault = () => {
    return (
        <>
            <Row>
                <Col md={6} xl={4}>
                    <h4 className="addborder">  Subscription</h4>
                </Col>
            </Row>

            <Row>
                <Col md={2} xl={2}>
                    <div style={{ marginTop: 30 + 'px' }}>
                        <div>
                            <h4>Compute Time</h4>
                        </div>
                        <div className="flexclassName">
                            <span className="headingtext">3</span>
                            <span className="spanflex"><b>Time</b>available</span>
                        </div>
                    </div>
                </Col>
                <Col md={2} xl={2}>
                    <div style={{ marginTop: 30 + 'px' }}>
                        <div>
                            <h4>Storage</h4>
                        </div>
                        <div className="flexclassName">
                            <span className="headingtext">20</span>
                            <span className="spanflex"><b>GB</b>available</span>
                        </div>
                    </div>
                </Col>
            </Row>


            <Row style={{ marginTop: 20 }}>
                <Col md={4} xl={4}>
                    <div style={{ marginTop: 30 + 'px' }}>
                        <div>
                            <h4>No of conourrent experiments</h4>
                        </div>
                        <div className="flexclassName">
                            <span className="headingtext">1</span>
                            <span className="spanflex">experiments</span>
                        </div>
                    </div>
                </Col>
                <Col md={3} xl={3}>
                    <div style={{ marginTop: 30 + 'px' }}>
                        <div>
                            <h4>No of Active Deployments</h4>
                        </div>
                        <div className="flexclassName">
                            <span className="headingtext">1</span>
                            <span className="spanflex">Deployments</span>
                        </div>
                    </div>
                </Col>
                {/* add new tab */}
                <Col md={3} xl={3}>
                    <div style={{ marginTop: 30 + 'px' }}>
                        <div>
                            <h4>No of Members</h4>
                        </div>
                        <div className="flexclassName">
                            <span className="headingtext">1</span>
                            <span className="spanflex">Members</span>
                        </div>
                    </div>
                </Col>
            </Row>


            <Row style={{ marginTop: 50 }}>
                <Col md={5} xl={5}>
                    <div className="plantext">
                        <h4>Your Plan </h4>
                        <p>Your compute time and storage quotas
                            will be renewed each calendar month
                            according to your plan .Next
                            occure on 2021-08-01.

                        </p>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={2} xl={2}></Col>
                <Col md={4} xl={4}>

                    {/* Here price prediction  */}
                    {/* <div className="Pricecard">
                        <div className="pricecardupside">
                            <h6>Free</h6>
                            <h3>$o/mo</h3>
                            <p>For your hobby projects or
                                validating the plateform
                            </p>
                        </div>

                        <div className="pricecarddown">
                            <div>
                            <i>Aroo</i>
                            <p>For non commercial user </p>
                             </div>   
                        </div> 

                    </div> */}



                    <section className="pricing">
                        <div className="section-title-group">
                            {/* <!-- <h2 className="section-title">Explore current top deals</h2>
                    <p className="section-sub-title">
                        checkout our best deals across our product range, and get what your
                        website needs
                    </p> --> */}
                        </div>
                        <div className="deals-pricecard-group">
                            <div className="pricecard emphasised">
                                <h3 className="pricecard-title">Commercial AI Product</h3>
                                <p className="price-tag">
                                    $4.88/yr
                                    <span></span>
                                </p>
                                <div className="pricecard-footer">
                                    <a href="#" className="link-button">Get started</a>
                                </div>
                            </div>
                            <div className="pricecard highlight">
                                <h3 className="pricecard-title">.Plus</h3>
                                <p className="price-tag">
                                    $4.88/yr
                                    <span>instead of $32.89/yr</span>
                                </p>
                                <div className="pricecard-footer">
                                    <a href="#" className="link-button">Select</a>
                                </div>
                            </div>
                            <div className="pricecard">
                                <h3 className="pricecard-title">.Pro</h3>
                                <p className="price-tag">
                                    $4.88/yr
                                    <span>instead of $32.89/yr</span>
                                </p>
                                <div className="pricecard-footer">
                                    <a href="#" className="link-button">Select</a>
                                </div>
                            </div>
                            <div className="pricecard">
                                <h3 className="pricecard-title">.EnterPrice</h3>
                                <p className="price-tag">
                                    $4.88/yr
                                    <span>instead of $32.89/yr</span>
                                </p>
                                <div className="pricecard-footer">
                                    <a href="#" className="link-button">Select</a>
                                </div>
                            </div>
                        </div>

                    </section>

                </Col>





            </Row>


        </>
    );
};

export default DashDefault;
