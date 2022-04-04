
import {Navbar, Nav, Container, Row, Col, Card, Button, ProgressBar} from 'react-bootstrap'
import waterlooLogo from '../waterlooLogo.jpg'
import experience1logo from '../experience1Logo.png'
import {Reveal} from 'react-reveal'




function Experience () {
    return (
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
    )
}

export default Experience