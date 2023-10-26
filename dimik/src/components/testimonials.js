import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
const testimonialsData=[
    {
        id:1,
        name:"John Willis",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse necessitatibus debitis accusamus velit, voluptates porro ipsam harum mollitia deserunt nisi!",
        designation:"Manager"
    },

    {
        id:2,
        name:"Jasmine Perry",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse necessitatibus debitis accusamus velit, voluptates porro ipsam harum mollitia deserunt nisi!",
        designation:"Accountant"
    },
    {
        id:3,
        name:"Rocky Johnson",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse necessitatibus debitis accusamus velit, voluptates porro ipsam harum mollitia deserunt nisi!",
        designation:"Project Manager"
    }
]
export default function AppTestimonials(){
    return (
        <section id="testimonials" className="block testimonials-block">
            <Container fluid>
                <div className='title-holder'>
                    <h2>Client Testimonials</h2>
                    <div className='subtitle'>What clients Say About Us</div>
                </div>
                <Carousel controls={false}>
                    {
                        testimonialsData.map(testimonial=>{
                            return(
                                <Carousel.Item key={testimonial.id }>
                                    <blockquote>
                                        <p>{testimonial.description}</p>
                                        <cite>
                                            <span className='name'>{testimonial.name}</span>
                                            <span className='designation'>{testimonial.designation}</span>
                                        </cite>
                                    </blockquote>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </Container>
        </section>
    )
}