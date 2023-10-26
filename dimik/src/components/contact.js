import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
export default function AppContact(){
    return (
        <section id="contact" className="block contact-block">
            <Container fluid>
                <div className='title-holder'>
                    <h2>Contact Us</h2>
                    <div className='subtitle'>Reach Out to Us</div>
                </div>
                <Form className="contact-form">
                    <Row>
                        <Col sm={4}>
                        <Form.Control type="text" placeholder="Enter Your Full Name" required/>
                        </Col>
                        <Col sm={4}>
                        <Form.Control type="email" placeholder="Enter Your email address" required/>
                        </Col>
                        <Col sm={4}>
                        <Form.Control type="tel" placeholder="Enter Your tel Number(optional)" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control as="textarea" placeholder="Type Your message" required/>
                        </Col>
                    </Row>
                    <div className="btn-holder">
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
              </Container>
              <div className='google-map'>
              <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d255292.9912056759!2d36.75468350947616!3d-1.193329814347981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x182f11288bff1e35%3A0x46abdf75907143c7!2smecca%20house%20nairobi!3m2!1d-1.2863605!2d36.8279831!5e0!3m2!1sen!2ske!4v1698231448231!5m2!1sen!2ske" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="contact-info">
                <ul>
                    <li>
                        <i className="fas fa-envelope"></i>
                        dimikenterprises@gmail.com
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <p>+(254) 723 169886</p>
                        <p>+(254) 773 477012</p>
                    </li>
                    <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Mecca House, Mfangano St,</p>
                        <p>Shop 6 C,Second Floor,</p>
                        <p>Nairobi, Kenya </p>
                    </li>                            
                </ul>
              </div>
        </section>
    )
}