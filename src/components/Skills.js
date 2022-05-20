import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Skills = () => {
  return (
    <div className='skills-container'>
      <Row>
      <Col className='align-right'>
      <p><b>Programming Languages:</b></p>
      </Col>
      <Col className='align-left'>
      <p>JavaScript, HTML, Python, CSS</p>
      </Col>
      </Row>
      <hr/>
      <Row>
      <Col className='align-right'>
      <p><b>Frameworks:</b></p>
      </Col>
      <Col className='align-left'>
      <p>React, Mongoose, Redux, Vue, Express, Django</p>
      </Col>
      </Row>
      <hr/>
      <Row>
      <Col className='align-right'>
      <p><b>Database Management:</b></p>
      </Col>
      <Col className='align-left'>
      <p>MongoDB, PostgreSQL, SQL, Sequelize</p>
      </Col>
      </Row>
      <hr/>
      <Row className='rigth-row'>
      <Col className='align-right'>
      <p><b>Tools:</b></p>
      </Col>
      <Col className='align-left'>
      <p>Github, Adobe Photoshop, Adobe Illustrator, Visual Studio Code, ChromeDevTools, Insomnia, Wordpress, iWork, Google Workspace</p>
      </Col>
      </Row>
    </div>
  )
}

export default Skills

 
