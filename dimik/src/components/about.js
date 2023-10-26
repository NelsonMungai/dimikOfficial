import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from '../assets/About/AboutBatch2.jpg'
export default function AppAbout(){
    const html=60
    const repsonsive=95
    const bootstrap=80
    return (
        <section id="about" className="block about-block">
            <Container>
                <div className="title-holder">
                    <h2>About Us</h2>
                    <div className='subtitle'>
                        Dimik Enterprises
                    </div>
                </div>
                <Row>
                    <Col sm={6}>
                        <Image src={img1}/>
                    </Col>
                    <Col sm={6}><p>Welcome to DIMIK Enterprises, where creativity meets craftsmanship. With a passion for fashion and an eye for detail, we're not just tailors; we're your partners in style. At DIMIK ENnterprises, we're dedicated to helping you create a wardrobe that reflects your individuality. Whether it's custom-made suits, dresses, or casual wear, we bring your unique vision to life with precision and flair. But we don't stop at personal attire. We also specialize in branding and customizing marketing items, corporate shirts, t-shirts, caps, and uniforms for a diverse range of groups and businesses. Our commitment to quality, creativity, and on-time delivery ensures that your brand shines in every stitch.</p>
                    <div className='progress-block'>
                        <h4>HTML/CSS/Javascript</h4>
                        <ProgressBar now={html} label={`${html}%`} />
                    </div>
                    <div className='progress-block'>
                        <h4>Repsonsive</h4>
                        <ProgressBar now={repsonsive} label={`${repsonsive}%`} />
                    </div>
                    <div className='progress-block'>
                        <h4>PHOTOSHOP</h4>
                        <ProgressBar now={bootstrap} label={`${bootstrap}%`} />
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};