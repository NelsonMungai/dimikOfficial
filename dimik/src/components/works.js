import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image  from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css'
const worksData=[
    {
        id:1,
        link:"/portfolio",
        images:require("../assets/T-shirts/Branded T-shirts1.jpg"),
        title:"T-shirt Design",
        subtitle:"We Design You"

    },
    {
        id:2,
        link:"/portfolio",
        images:require("../assets/Shirts/BatchShirt1.jpg"),
        title:"Corporate Shirts",
        subtitle:"Represent you"

    },
    {
        id:3,
        link:"/portfolio",
        images:require("../assets/HeadWear/Branded cap1.jpg"),
        title:"Cap Design",
        subtitle:"Branded Cap designs"

    },
    {
        id:4,
        link:"/portfolio",
        images:require("../assets/SportsWear/track suit2.jpg"),
        title:"Sports Design",
        subtitle:"Lorem Ipsum"

    },
    {
        id:5,
        link:"/portfolio",
        images:require("../assets/Uniforms/Security Image2.webp"),
        title:"Uniforms",
        subtitle:"Uniforms from different sectors"

    },
    {
        id:6,
        link:"/portfolio",
        images:require("../assets/Pollo/dimikpollo1.jpeg"),
        title:"Pollo Shirts",
        subtitle:"Lorem Ipsum"

    },
    {
        id:7,
        link:"/portfolio",
        images:require("../assets/Reflectors/Reflectors.jpg"),
        title:"Reflectors Design",
        subtitle:"Lorem Ipsum"

    },
    {
        id:8,
        link:"/portfolio",
        images:require("../assets/DustCoats/Dust Coats.jpg"),
        title:"Protectives",
        subtitle:"Aprons & Overalls & DustCoats"

    },
    {
        id:9,
        link:"/portfolio",
        images:require("../assets/Hoddies/Hoddy Design1.jpg"),
        title:"Hoody Design",
        subtitle:"Lorem Ipsum"

    }

]

export default function AppWorks(){
    return(
        <section id="works" className="block works-block">
             <Container fluid>
                <div className="title-holder">
                <h2>Our Works</h2>
                <div className="subtitle">Our previous works</div>
                </div>
                
                <Row className="portfoliolist">
                    {
                        worksData.map(work=>{
                            return(
                                <Col sm={4} key={work.id}>
                                    <div className='portfolio-wrapper'>
                                        <a href={work.link}>
                                        <Image src={work.images}/>
                                        <div className='label text-center'>
                                            <h3>{work.title}</h3>
                                            <p>{work.subtitle}</p>
                                        </div>
                                        </a>
                                    </div>
                                </Col>

                                )
                        })
                    }
                    
                </Row>
             </Container>
             <div className='text-center mx-4'>
                <a href="/portfolio" className="btn btn-primary">Gallery</a>
            </div>
        </section>
    )
}