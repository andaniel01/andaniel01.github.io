import './App.css';

import {Navbar, Nav, Container, Row, Col, Card} from 'react-bootstrap'
import profilePic from './daniel.JPG'

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
      <div className='Main-background'>
        {/* <Card style={{width:' 80% ', margin:'auto', height:'100%', paddingLeft: '10%', paddingRight: '10%', background: '#BEE9E8'}}> */}
          <Container>
            <div className='header'>
              <Row>
                <Col>
                  <div className='name'>
                    Hi, I'm Daniel
                  </div>
                  <div className='name-detail'>
                    Software Engineer Intern + Computer Engineering Student 
                  </div>
                  <hr></hr>
                </Col>
              </Row>
            </div>
          <div className='intro'>
            <Row>
              <Col><img className='profile-pic' src={profilePic}/></Col>
            </Row>
            <Row style={{paddingTop: '2%'}}>
              <Col>Hi, I'm Daniel An. I am a 2nd year student @ UWaterloo, studying Computer Engineering. I am currently working at the Ministry of Children, Community, and Social Services as a Junior Software Engineer. </Col>
            </Row>
            <hr></hr>
          </div>
          </Container>
        {/* </Card> */}
      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
