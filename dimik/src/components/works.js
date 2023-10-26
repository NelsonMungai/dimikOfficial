import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image  from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';
const worksData=[
    {
        id:1,
        link:"https://www.google.com",
        images:require("../assets/T-shirts/Branded T-shirts1.jpg"),
        title:"T-shirt Design",
        subtitle:"We Design You"

    },
    {
        id:2,
        link:"https://www.google.com",
        images:require("../assets/Shirts/Tailored Office Shirts.png"),
        title:"Corporate Shirts",
        subtitle:"Represent you"

    },
    {
        id:3,
        link:"https://www.google.com",
        images:require("../assets/HeadWear/Branded cap1.jpg"),
        title:"Cap Design",
        subtitle:"Branded Cap designs"

    },
    {
        id:4,
        link:"https://www.google.com",
        images:require("../assets/SportsWear/track suit2.jpg"),
        title:"Sports Design",
        subtitle:"Lorem Ipsum"

    },
    {
        id:5,
        link:"https://www.google.com",
        images:require("../assets/Uniforms/Security Image2.webp"),
        title:"Uniforms",
        subtitle:"Uniforms from different sectors"

    },
    {
        id:6,
        link:"https://www.google.com",
        images:require("../assets/Pollo/dimikpollo1.jpeg"),
        title:"Pollo Shirts",
        subtitle:"Lorem Ipsum"

    },
    {
        id:7,
        link:"https://www.google.com",
        images:require("../assets/Reflectors/Reflectors.jpg"),
        title:"Reflectors Design",
        subtitle:"Lorem Ipsum"

    },
    {
        id:8,
        link:"https://www.google.com",
        images:require("../assets/DustCoats/Dust Coats.jpg"),
        title:"Protectives",
        subtitle:"Aprons & Overalls & DustCoats"

    },
    {
        id:9,
        link:"https://www.google.com",
        images:require("../assets/Hoddies/Hoddy Design1.jpg"),
        title:"Hoody Design",
        subtitle:"Lorem Ipsum"

    }

]
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

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
                <Pagination>{items}</Pagination>
             </Container>
        </section>
    )
}