import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NumberCurveDemo from './NumberCurveDemo/NumberCurveDemo';
import StringCurveDemo from './StringCurveDemo/StringCurveDemo';
import BooleanCurveDemo from './BooleanCurveDemo/BooleanCurveDemo';
import ListCurveDemo from './ListCurveDemo/ListCurveDemo';
import RGBCurveDemo from './RGBCurveDemo/RGBCurveDemo';
import HSVCurveDemo from './HSVCurveDemo/HSVCurveDemo';
import Vector3CurveDemo from './Vector3CurveDemo/Vector3CurveDemo';
import ObjectCurveDemo from './ObjectCurveDemo/ObjectCurveDemo';
import BezierCurveDemo from './BezierCurveDemo/BezierCurveDemo';

function Demos(): React.ReactElement {
  return (
    <>
      <Row>
        <Col className="text-center">
          <h1>Curve Type Demos</h1>
          <p>There are 9 implemented typed keyframes. Below are examples of curves using each of these implemented keyframes.</p>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <NumberCurveDemo />
        </Col>
        <Col lg={6}>
          <StringCurveDemo />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <BooleanCurveDemo />
        </Col>
        <Col lg={6}>
          <ListCurveDemo />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <RGBCurveDemo />
        </Col>
        <Col lg={6}>
          <HSVCurveDemo />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Vector3CurveDemo />
        </Col>
        <Col lg={6}>
          <ObjectCurveDemo />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <BezierCurveDemo />
        </Col>
      </Row>
    </>
  );
}

export default Demos;
