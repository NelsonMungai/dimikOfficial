import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
export default function AppContact(){
    const [userData,setUserData]=useState({
        Name:"",Email:"",Tel:"",Message:""
    })
    let name,value
    const data=(e)=>{
        name=e.target.name
        value=e.target.value
        setUserData({...userData,[name]:value})
    }

    const send= async(e)=>{
        const {Name,Email,Tel,Message}=userData;
        e.preventDefault();
        const option={
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Name,Email,Tel,Message
            })
        }
        const res=await fetch("https://contactform2-2039c-default-rtdb.firebaseio.com/Messages.json",option)
        console.log(res)
        if(res){
            alert("Message sent successfully")
        }
    }

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
                        <Form.Control name="Name" value={userData.Name}type="text" placeholder="Enter Your Full Name" required autoComplete='off' onChange={data}/>
                        </Col>
                        <Col sm={4}>
                        <Form.Control name="Email" value={userData.Email} type="email" placeholder="Enter Your email address" required autoComplete='off' onChange={data}/>
                        </Col>
                        <Col sm={4}>
                        <Form.Control name="Tel" value={userData.Tel} type="tel" placeholder="Enter Your tel Number(optional)" autoComplete='off' onChange={data}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control name="Message"value={userData.Message} as="textarea" placeholder="Type Your message" required autoComplete='off' onChange={data}/>
                        </Col>
                    </Row>
                    <div className="btn-holder">
                        <Button type="submit" onClick={send}>Send</Button>
                    </div>
                </Form>
              </Container>
              <div className='google-map'>
              {/* <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d255293.01903720223!2d36.756927659474044!3d-1.1930299155876547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x182f11288bff1e35%3A0x46abdf75907143c7!2smecca%20house%20nairobi!3m2!1d-1.2863605!2d36.8279831!5e0!3m2!1sen!2ske!4v1698943917711!5m2!1sen!2ske" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d1994.406617403838!2d36.826847!3d-1.286091!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x182f11288bff1e35%3A0x46abdf75907143c7!2sMecca%20House%2C%20PR7H%2BF55%2C%20Mfangano%20Street%2C%20Nairobi!3m2!1d-1.2863605!2d36.8279831!5e0!3m2!1sen!2ske!4v1698944546959!5m2!1sen!2ske" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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