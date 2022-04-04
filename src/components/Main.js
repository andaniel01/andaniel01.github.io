import {Navbar, Nav, Container, Row, Col, Card, Button, ProgressBar} from 'react-bootstrap'
import {Reveal} from 'react-reveal'
import TextLoop from "react-text-loop";

function Main() {
    return (
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
    )
}

export default Main