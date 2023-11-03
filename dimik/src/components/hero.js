import Carousel from 'react-bootstrap/Carousel';
let heroData=[
    {
        id: 1,
        image: require('../assets/IMG/Hero/dimikBG.jpg'),
        title: 'Experience Timeless Elegance and Craftsmanship',
        description: 'Welcome to our world of exquisite tailoring and design. We are dedicated to bringing you the finest in tailored shirts and custom clothing, ensuring you always look your best with a touch of sophistication and timeless style.',
        link: '#about'
        },
        {id:2,
        image:require('../assets/Shirts/BatchShirt5.jpg'),
        title:"Elevate Your Style with Custom Tailoring",
        description:'Discover the perfect fit and design for your corporate shirts and attire. We specialize in crafting tailored shirts, ensuring you look your best for any occasion.',
        link:'#about'
        },
        {id:3,
        image:require('../assets/Bags/Designer Bags.jpg'),
        title:"Accessorize with Our Custom Bags",
        description:'Complete your look with our custom bags and accessories. Our designer bags are the perfect addition to your outfit, adding a touch of uniqueness.',
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
