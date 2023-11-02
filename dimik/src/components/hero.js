import Carousel from 'react-bootstrap/Carousel';
let heroData=[
    {
        id:1,
        image:require('../assets/IMG/Hero/dimikBG.jpg'),
        title:"Individuality in Every Design",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam animi explicabo dolorem fuga dignissimos rerum voluptates. Ducimus, nihil qui.',
        link:'#about'
        },
        {id:2,
        image:require('../assets/Shirts/BatchShirt5.jpg'),
        title:"Create You own style",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam animi explicabo dolorem fuga dignissimos rerum voluptates. Ducimus, nihil qui.',
        link:'#about'
        },
        {id:3,
        image:require('../assets/Bags/Designer Bags.jpg'),
        title:"Create You own style",
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam animi explicabo dolorem fuga dignissimos rerum voluptates. Ducimus, nihil qui.',
        link:'#about'
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
                        <a className="btn btn-primary"href={hero.link}>Learn More<i className="fas fa-chevron-right"></i></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
            }
      
    </Carousel>
    </section>

    )
}
