import Carousel from 'react-bootstrap/Carousel';
let heroData=[
    {
        id:1,
        image:require('../assets/IMG/Hero/dimikBG.jpg'),
        title:"The perfect Design For You",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam animi explicabo dolorem fuga dignissimos rerum voluptates. Ducimus, nihil qui.',
        link:'https://www.google.com'
        },
        {id:2,
        image:require('../assets/IMG/Hero/dimik4.jpg'),
        title:"The perfect Design For You",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam animi explicabo dolorem fuga dignissimos rerum voluptates. Ducimus, nihil qui.',
        link:'https://www.facebook.com'
        },
        {id:3,
        image:require('../assets/IMG/Hero/vecteezy_sewing-machine-and-threads-parts-as-follows-presser-foot_10234227_343.jpg'),
        title:"The perfect Design For You",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam animi explicabo dolorem fuga dignissimos rerum voluptates. Ducimus, nihil qui.',
        link:'https://www.twitter.com'
        },
]
export default function AppHero(){
    return(
    <section className='hero-block' id="home">
        <Carousel>
            {
            heroData.map(hero=>{
                return(
                    <Carousel.Item key={hero.id}>
                        <img
                        className="d-block w-100"
                        src={hero.image} alt={"Slide"+hero.id}/>
                        <Carousel.Caption>
                        <h3>{hero.title}</h3>
                        <p>{hero.description}</p>
                        <a className="btn btn-primary"href={hero.link}>LearnMore<i className="fas fa-chevron-right"></i></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
            }
      
    </Carousel>
    </section>

    )
}
