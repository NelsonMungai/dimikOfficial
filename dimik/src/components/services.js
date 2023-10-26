import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const servicesData=[
    {
        id:1,
        icon:'fas fa-clone',
        title:'Responsive Design',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur soluta architecto praesentium tempore dicta laudantium consequuntur, obcaecati totam! Cumque, nostrum."
    },
    {
        id:2,
        icon:'fas fa-snowflake',
        title:'Creative Design',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur soluta architecto praesentium tempore dicta laudantium consequuntur, obcaecati totam! Cumque, nostrum."
    },
    {
        id:3,
        icon:'fas fa-plug',
        title:'SEO Optimized',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur soluta architecto praesentium tempore dicta laudantium consequuntur, obcaecati totam! Cumque, nostrum."
    }

]

export default function AppServices(){
    return (
     <section id="services" className="block services-block">
        <Container fluid>
            <div className='title-holder'>
                <h2>Our services</h2>
                <div className="subtitle">Services we provide</div>
            </div>
            <Row>{
                servicesData.map(services=>{
                    return(
                        <Col sm={4} key={services.id}className='holder'>
                        <div className='icon'>
                            <i className={services.icon}></i>
                        </div>
                        <h3>{services.title}</h3>
                        <p>{services.description}</p>
                </Col>
                    )
                })}
            </Row>
        </Container>
     </section>
    )
}