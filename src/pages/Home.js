import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Tab, Tabs, Row, Col, Nav } from 'react-bootstrap';
import Overview from '../components/Overview';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div className='whole-tab-page'>
    <div className='tab-wrapper'>
        <div className='download-content-home'>
          <div className='window-buttons-home'>
            <div className='circle red'></div>
            <div className='circle yellow'></div>
            <div className='circle green'></div>
          </div>
        </div>
        <div className='tab-whole'>
<Tab.Container id="left-tabs-example" defaultActiveKey="overview">
      <Nav variant="pills" className="flex-row">
        <Nav.Item>
          <Nav.Link eventKey="overview">Overview</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="skills">Skills</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="overview">
          <Overview />
        </Tab.Pane>
        <Tab.Pane eventKey="skills">
          <Skills />
        </Tab.Pane>
    </Tab.Content>
</Tab.Container>
</div>
</div>
</div>
  )
}

export default Home

