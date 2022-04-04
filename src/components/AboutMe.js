import {Navbar, Nav, Container, Row, Col, Card, Button, ProgressBar} from 'react-bootstrap'
import {Reveal} from 'react-reveal'
import profilePic from '../daniel.JPG'
import TextLoop from "react-text-loop";

function AboutMe () {
    return(

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

    )
}

export default AboutMe