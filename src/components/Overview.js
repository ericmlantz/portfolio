import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Overview = () => {
  return (
    <div className='tab-container'>
      <Col>
        <img className='myimg' src='https://i.imgur.com/uQS5RJW.png' alt="Eric's Profile"/>
      </Col>
      <Col className='overview-text'>
        <Row>
        <p className='biggertext'><b>Name:</b> Eric Lantz</p>
        </Row>
        <Row>
        <p><b>Role:</b> Full Stack Software Developer</p>
        </Row>
        <Row>
        <p><b>Location:</b> Atlanta, GA</p>
        </Row>
        <Row>
        <p><b>Age:</b> 27 years old</p>
        </Row>
        <Row>
        <p><b>Hobbies:</b> I play tennis, design and create with my 3D printer, read, cook, and do woodworking!</p>
        </Row>
      </Col>
    </div>
  )
}

export default Overview