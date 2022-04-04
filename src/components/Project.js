import {Navbar, Nav, Container, Row, Col, Card, Button, ProgressBar} from 'react-bootstrap'
import {Reveal} from 'react-reveal'

const notStartedProgress = 0;

function Projects () {
    return (
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
    )
}

export default Projects