import {Container, Row, Col} from 'react-bootstrap'
import {Reveal} from 'react-reveal'
import {FaInstagram, FaLinkedin, FaFileAlt} from "react-icons/fa";



function Footer () {
    return (
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
    )
}

export default Footer