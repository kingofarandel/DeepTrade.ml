import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import DrawingCanvas from '../canvas/drawingCanvas';

function Diagram() {

  return (
    <Fragment>
        <Row>
            <Col>
                <DrawingCanvas />
            </Col>
        </Row>  
    </Fragment>
  );
}

export default Diagram;
