import './App.css';

import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap'
import profilePic from './daniel.JPG'
import waterlooLogo from './waterlooLogo.jpg'

function App() {
  return (
    <div>
      <Navbar className='nav-bg-color' variant="light">
        <Container>
        <Navbar.Brand href="#home">
          &lt; Daniel An /&gt;
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#home"><div className='nav-text'>Home</div></Nav.Link>
          <Nav.Link href="#Project"><div className='nav-text'>Project</div></Nav.Link>
          <Nav.Link href="#About Me"><div className='nav-text'>About Me</div></Nav.Link>
          <Nav.Link href="#Experience"><div className='nav-text'>Experience</div></Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className='picture-background'>
        
      </div>
      <div className='main-background'>
        {/* <Card style={{width:' 80% ', margin:'auto', height:'100%', paddingLeft: '10%', paddingRight: '10%', background: '#BEE9E8'}}> */}
          <Container style={{paddingLeft: '10%', paddingRight: '10%'}}>
            <div className='header'>
              <Row>
                <Col>
                  <div className='name'>
                    About Me
                  </div>
                  <div className='name-detail'>
                    I'm a Computer Engineering Student 
                  </div>
                </Col>
              </Row>
            </div>
            <hr></hr>
          <div className='intro'>
            <Row style={{paddingTop: '2%'}}>
              <Col><img className='profile-pic' src={profilePic}/></Col>
              <Col>
              About Me
              <br></br>
              <br></br>
              Hi, I'm Daniel An.<br></br>
              I am a 2nd year student @ UWaterloo, studying Computer Engineering. 
              I am currently working at the Ministry of Children, Community, and Social Services as a Junior Software Engineer.
              </Col>
            </Row>
          </div>
          </Container>
        {/* </Card> */}
      </div>
      <div className='experience-background'>
        <Container style={{paddingLeft: '10%', paddingRight: '10%'}}>
          <div className='header'>
            <Row>
              <Col>
                <div className='name'>
                   Experience
                </div>
              </Col>
            </Row>
          </div>
          <hr></hr>
          <div className='experience-type'>Education</div>
          <Row>
            <Col><img className='experience-image' src={waterlooLogo}/></Col>
            <Col><strong>Univeristy of Waterloo</strong></Col>
          </Row>
        </Container>
      </div>


      <div className='footer'>
      </div>
    </div>
  );
}

export default App;
