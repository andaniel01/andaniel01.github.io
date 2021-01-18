import './App.css';

import {Navbar, Nav, Container, Row, Col, Card, Button, ProgressBar} from 'react-bootstrap'
import profilePic from './daniel.JPG'
import waterlooLogo from './waterlooLogo.jpg'
import experience1logo from './experience1Logo.png'
import {Reveal} from 'react-reveal'
import {FaInstagram, FaLinkedin, FaFileAlt} from "react-icons/fa";
import TextLoop from "react-text-loop";



const notStartedProgress = 0;

function App() {
  return (
    <div id='home'>
      
      <div className='picture-background'>
      <Navbar className='nav-bg-color' variant="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home">
          <div className='nav-text'>Daniel An</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home"><div className='nav-text '>Home</div></Nav.Link>
            <Nav.Link href="#aboutMe"><div className='nav-text'>About Me</div></Nav.Link>
            <Nav.Link href="#experience"><div className='nav-text'>Experience</div></Nav.Link>
            <Nav.Link href="#project"><div className='nav-text'>Projects</div></Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1ADwBzjc8JMy8DJXzwrX99NIa1lxyx3Z5/view?usp=sharing" target='_blank'><div className='nav-text'>Resume</div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        <Reveal>
          <div className='main-text'>
            Hi, I'm Daniel
          </div>
        </Reveal>
        <div className='text-loop'>
          <TextLoop springConfig={{ stiffness: 140, damping: 10 }}>
            <div style={{color: 'white'}}>2A Computer Engineering student</div>
            <div style={{color: 'white'}}>Seeking 2021 Summer Internship</div>
            <div style={{color: 'white'}}>Interested in sustainable tech for social good</div>
          </TextLoop>
        </div>
        
      {/* <div className='contact-info'>
          <Row>
            <Col><a href='https://www.linkedin.com/in/an-daniel/'>LinkedIn</a></Col>
            <Col><a href='https://www.instagram.com/daniel_an_/'>Instagram</a></Col>
            <Col><a href='https://drive.google.com/file/d/1ADwBzjc8JMy8DJXzwrX99NIa1lxyx3Z5/view?usp=sharing'>Resume</a></Col>
          </Row>
        </div> */}
      </div>
      
      <div className='main-background'>
        {/* <Card style={{width:' 80% ', margin:'auto', height:'100%', paddingLeft: '10%', paddingRight: '10%', background: '#BEE9E8'}}> */}
          <Container style={{paddingLeft: '10%', paddingRight: '10%'}}>
            <Reveal>
              <div id='aboutMe' className='header'>
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
            </Reveal>
            <Reveal><hr></hr></Reveal>
            <Reveal>
              <div className='intro'>
                <Row style={{paddingTop: '2%'}}>
                  <Col><img className='profile-pic' src={profilePic}/></Col>
                  <Col>
                    <div className='about-me-text'>
                      Hi, I'm Daniel An.<br></br>
                      I am a 2nd year student @UWaterloo, studying Computer Engineering. 
                      I am currently working at the Ministry of Children, Community, and Social Services as a Junior Software Engineer.
                    </div>
                  </Col>
                </Row>
              </div>
          </Reveal>
          </Container>
        {/* </Card> */}
      </div>
      <div id='experience' className='experience-background'>
        <Container style={{paddingLeft: '10%', paddingRight: '10%'}}>
          <Reveal>
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
          </Reveal>
          <Reveal>
            <div className='experience-type'>Education</div>
            <br></br>
          </Reveal>
          <Reveal>
            <Row style={{paddingBottom: '7.5%'}}>
              <Col><img className='experience-image' src={waterlooLogo}/></Col>
              <Col>
                <div>
                  <Row>
                    <Col xs={8}><strong>University of Waterloo</strong></Col>
                    <Col>Sept 2019 - Present</Col>
                  </Row>
                </div>
                <div>Candidate for BASc Computer Engineering</div>
                <br></br>
                <p>I am currently in my 2nd year studying computer engineering. So far, I love the experiences I've gained and the memories 
                  I've made here so far. Although it may be hard sometimes, it feels great at the end when I see that I passed.</p>
              </Col>
            </Row>
            <hr></hr>
          </Reveal>
          
          <Reveal>
          <div className='experience-type'>Career</div>
          <br></br>
          </Reveal>
          <Reveal>
            <Row>
              <Col><img className='experience-image' src={experience1logo}/></Col>
              <Col>
                <div>
                  <Row>
                    <Col xs={8}><strong>Ministry of Children, Community, and Social Services</strong></Col>
                    <Col>Sept 2020 - Dec 2020</Col>
                  </Row>
                </div>
                <div>Software Engineer</div>
                <br></br>
                <ul>
                  <li>Used Spring and MySQL to design and develop a web application built with RESTful web services to operate CRUD functionalities. Data extraction from CSV files using SuperCSV 
                  along with JPA/JDBC for data persistence and JSP with HTML, CSS, JSTL for data visualization support.</li>
                  <li>Implemented APIs for data extraction from log files to support application traceability using Hibernate and Oracle SQL Developer</li>
                  <li>Involved in an Agile development team and provided quality assurance and testing for the EDM (Electric Document Management) department of the Social Assistance Management Service.</li>
                </ul>
              </Col>
            </Row>
            <br></br>
          </Reveal>

          <Reveal>
            <Row>
              <Col><img className='experience-image' src={experience1logo}/></Col>
              <Col>
                <div>
                  <Row>
                    <Col xs={8}><strong>Ministry of Children, Community, and Social Services</strong></Col>
                    <Col>Jan 2020 - May 2020</Col>
                  </Row>
                </div>
                <div>Software Engineer</div>
                <br></br>
                <ul>
                  <li>Used Spring and MySQL to design and develop a web application built with RESTful web services to operate CRUD functionalities. Data extraction from CSV files using SuperCSV 
                  along with JPA/JDBC for data persistence and JSP with HTML, CSS, JSTL for data visualization support.</li>
                  <li>Implemented APIs for data extraction from log files to support application traceability using Hibernate and Oracle SQL Developer</li>
                  <li>Involved in an Agile development team and provided quality assurance and testing for the EDM (Electric Document Management) department of the Social Assistance Management Service.</li>
                </ul>
              </Col>
            </Row>
          </Reveal>
        </Container>
      </div>

      <div id='project' className='project-background'>
        <Container style={{paddingLeft: '10%', paddingRight: '10%'}}>
        <Reveal>
          <div className='header'>
            <Row>
              <Col>
                <div className='name'>
                    Projects
                </div>
              </Col>
            </Row>
          </div>
          <hr></hr>
        </Reveal> 
        <Reveal>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Coming Soon</Card.Title>
                  <Card.Text>
                    Currently thinking of a project to work on...
                  </Card.Text>
                  <ProgressBar animated now={notStartedProgress} label={`${notStartedProgress}%`}/>
                  <br></br>
                  <Button>Github</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Reveal>
        </Container>
      </div>

      <div className='footer'>
        <Container style={{paddingLeft:'20%', paddingRight:'20%'}}>
          <Reveal>
            Daniel An
            <hr></hr>
          </Reveal>
          <Reveal>
            <Row>
              <Col><a href='https://www.linkedin.com/in/an-daniel/'><FaLinkedin/> LinkedIn</a></Col>
              <Col><a href='https://www.instagram.com/daniel_an_/'><FaInstagram /> Instagram</a></Col>
              <Col><a href='https://drive.google.com/file/d/1ADwBzjc8JMy8DJXzwrX99NIa1lxyx3Z5/view?usp=sharing'><FaFileAlt/> Resume</a></Col>
            </Row>
          </Reveal>
        </Container>
      </div>
    </div>
  );
}

export default App;
