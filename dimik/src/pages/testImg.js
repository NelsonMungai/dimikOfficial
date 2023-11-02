import React, { useState } from 'react';
import Appheader from '../components/header';
import AppFooter from '../components/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemsData=[
    {
        id:1,
        category:"shirts",
        img:require("../assets/Shirts/BatchShirt1.jpg")},
    {
        id:2,
        category:"shirts",
        img:require("../assets/Shirts/BatchShirt2.jpg")},
    {
        id:3,
        category:"shirts",
        img:require("../assets/Shirts/BatchShirt3.jpg")
    },
    {
        id:4,
        category:"shirts",
        img:require("../assets/Shirts/BatchShirt4.jpg")
    },
    {
        id:5,
        category:"shirts",
        img:require("../assets/Shirts/BatchShirt5.jpg")
    },
    {
        id:6,
        category:"shirts",
        img:require("../assets/Shirts/BatchShirt6.jpg")
    },
    {
        id:7,
        category:"shirts",
        img:require("../assets/Shirts/BatchShirt7.jpg")
    },
    {
        id:8,
        category:"shirts",
        img:require("../assets/Shirts/BatchShirt8.jpg")
    },
    {
        id:9,
        category:"shirts",
        img:require("../assets/Shirts/BatchShirt9.jpg")
    },
    {
        id:10,
        category:"shirts",
        img:require("../assets/Shirts/Corpoarte Shirts.jpg")},
    {
        id:11,
        category:"shirts",
        img:require("../assets/Shirts/Corporate Shirts 2.jpg")},
    {
        id:12,
        category:"shirts",
        img:require("../assets/Shirts/Corporate Shirts.jpg")
    },
    {
        id:13,
        category:"shirts",
        img:require("../assets/Shirts/Corporate Shirts3.jpg")
    },
    {
        id:14,
        category:"shirts",
        img:require("../assets/Shirts/Dress-Shirt-PNG.png")
    },
    {
        id:15,
        category:"shirts",
        img:require("../assets/Shirts/IMG-20231005-WA0043.jpg")
    },
    {
        id:16,
        category:"shirts",
        img:require("../assets/Shirts/Shirt.jpg")
    },
    {
        id:17,
        category:"shirts",
        img:require("../assets/Shirts/Shirt2.jpg")
    },
    {
        id:18,
        category:"shirts",
        img:require("../assets/Shirts/Shirt3.jpg")
    },
    {
        id:19,
        category:"shirts",
        img:require("../assets/Shirts/Shirt4.jpg")
    },
    {
        id:20,
        category:"shirts",
        img:require("../assets/Shirts/Shirt5.jpg")
    },
    {
        id:21,
        category:"shirts",
        img:require("../assets/Shirts/Shirt6.jpg")
    },
    {
        id:22,
        category:"shirts",
        img:require("../assets/Shirts/Shirt7.jpg")
    },
    {
        id:23,
        category:"shirts",
        img:require("../assets/Shirts/Shirt8.jpg")
    },
    {
        id:24,
        category:"shirts",
        img:require("../assets/Shirts/Shirt9.jpg")
    },
    {
        id:25,
        category:"shirts",
        img:require("../assets/Shirts/Tailored Office Shirts.png")
    },
    // Aprons
    {
        id:26,
        category:"Apron",
        img:require("../assets/Apron&Overalls/Apron.jpg")
    },
    {
        id:27,
        category:"Apron",
        img:require("../assets/Apron&Overalls/Overalls.2jpg.jpg")
    },
    {
        id:28,
        category:"Apron",
        img:require("../assets/Apron&Overalls/ApronBatch.jpg")
    },
    // Bags
    {
        id:29,
        category:"bag",
        img:require("../assets/Bags/Bag2.jpg")
    },
    {
        id:30,
        category:"bag",
        img:require("../assets/Bags/Bag4.jpg")
    },
    {
        id:31,
        category:"bag",
        img:require("../assets/Bags/Bag5.jpg")
    },
    {
        id:32,
        category:"bag",
        img:require("../assets/Bags/Designer Bags.jpg")
    },
    // DustCoats
    {
        id:33,
        category:"DustCoat",
        img:require("../assets/DustCoats/Dust Coats.jpg")
    },
    // HeadWear
    {
        id:34,
        category:"hats",
        img:require("../assets/HeadWear/Branded cap1.jpg")
    },
    {
        id:35,
        category:"hats",
        img:require("../assets/HeadWear/Branded Caps1.webp")
    },
    {
        id:36,
        category:"hats",
        img:require("../assets/HeadWear/Branded Caps2.webp")
    },
    {
        id:37,
        category:"hats",
        img:require("../assets/HeadWear/Branded Caps3..webp")
    },
    {
        id:38,
        category:"hats",
        img:require("../assets/HeadWear/Branded Security Hat.jpg")
    },
    {
        id:39,
        category:"hats",
        img:require("../assets/HeadWear/Chef Hat.jpg")
    },
    {
        id:40,
        category:"hats",
        img:require("../assets/HeadWear/Chef Hat2.jpg")
    },
    {
        id:41,
        category:"hats",
        img:require("../assets/HeadWear/chefhat1.jpg")
    },
    {
        id:42,
        category:"hats",
        img:require("../assets/HeadWear/Branded Caps8.webp")
    },
    // Hoodies
    {
        id:43,
        category:"hoody",
        img:require("../assets/Hoddies/Black and white sleeeved Hoddy.webp")
    },
    {
        id:44,
        category:"hoody",
        img:require("../assets/Hoddies/Branded Black Hoddy.webp")
    },
    {
        id:45,
        category:"hoody",
        img:require("../assets/Hoddies/Hoddy Design1.jpg")
    },
    {
        id:46,
        category:"hoody",
        img:require("../assets/Hoddies/Hoddy7.webp")
    },
    {
        id:47,
        category:"hoody",
        img:require("../assets/Hoddies/Hoddyy2.webp")
    },
    {
        id:48,
        category:"hoody",
        img:require("../assets/Hoddies/Hoddyy3.webp")
    },
    {
        id:49,
        category:"hoody",
        img:require("../assets/Hoddies/Hoddyy4.webp")
    },
    {
        id:51,
        category:"hoody",
        img:require("../assets/Hoddies/Regular Black Hoddy.webp")
    },
    {
        id:52,
        category:"hoody",
        img:require("../assets/Hoddies/Regular Grey Hoddy.webp")
    },
    // Pollo
    {
        id:53,
        category:"pollo",
        img:require("../assets/Pollo/Apollo Shirts1.jpg")
    },
    {
        id:54,
        category:"pollo",
        img:require("../assets/Pollo/dimikpollo1.jpeg")
    },
    {
        id:55,
        category:"pollo",
        img:require("../assets/Pollo/PolloShirt1.jpeg")
    },
    {
        id:56,
        category:"pollo",
        img:require("../assets/Pollo/PolloShirt2.jpeg")
    },
    {
        id:57,
        category:"pollo",
        img:require("../assets/Pollo/PolloShirt3.jpeg")
    },
    {
        id:58,
        category:"pollo",
        img:require("../assets/Pollo/PolloShirt4.jpeg")
    },
    {
        id:59,
        category:"pollo",
        img:require("../assets/Pollo/PolloShirt45jpeg.jpg")
    },
    // Reflector
    {
        id:60,
        category:"reflector",
        img:require("../assets/Reflectors/Reflectors.jpg")
    },
    // Sports
    {
        id:61,
        category:"sportsWear",
        img:require("../assets/SportsWear/track suit2.jpg")
    },
    {
        id:62,
        category:"sportsWear",
        img:require("../assets/SportsWear/track suit3.jpg")
    },
    {
        id:63,
        category:"sportsWear",
        img:require("../assets/SportsWear/track suit4.jpg")
    },
    {
        id:64,
        category:"sportsWear",
        img:require("../assets/SportsWear/Track Suits.jpg")
    },
    {
        id:65,
        category:"sportsWear",
        img:require("../assets/SportsWear/track suits1.webp")
    },
    {
        id:66,
        category:"sportsWear",
        img:require("../assets/SportsWear/track suits5.webp")
    },
    // T-shirts
    {
        id:67,
        category:"t-shirts",
        img:require("../assets/T-shirts/Branded T-shirts1.jpg")
    },
    {
        id:68,
        category:"t-shirts",
        img:require("../assets/T-shirts/dimikT1.webp")
    },
    {
        id:69,
        category:"t-shirts",
        img:require("../assets/T-shirts/dimikT2.webp")
    },
    {
        id:70,
        category:"t-shirts",
        img:require("../assets/T-shirts/dimikT3.webp")
    },
    {
        id:71,
        category:"t-shirts",
        img:require("../assets/T-shirts/dimikT4.webp")
    },
    {
        id:72,
        category:"t-shirts",
        img:require("../assets/T-shirts/dimikT5.webp")
    },
    {
        id:73,
        category:"t-shirts",
        img:require("../assets/T-shirts/dimikT6.webp")
    },
    {
        id:74,
        category:"t-shirts",
        img:require("../assets/T-shirts/dimikT8.jpg")
    },
    // uniforms
    {
        id:75,
        category:"uniform",
        img:require("../assets/Uniforms/Chef uniform 1.jpg")
    },
    {
        id:86,
        category:"uniform",
        img:require("../assets/Uniforms/Chef1.jpg")
    },
    {
        id:77,
        category:"uniform",
        img:require("../assets/Uniforms/Chefs Uniform 2.jpg")
    },
    {
        id:78,
        category:"uniform",
        img:require("../assets/Uniforms/CHef5.jpg")
    },
    {
        id:79,
        category:"uniform",
        img:require("../assets/Uniforms/Choir gown1.webp")
    },
    {
        id:80,
        category:"uniform",
        img:require("../assets/Uniforms/Security Image1.webp")
    },
    {
        id:81,
        category:"uniform",
        img:require("../assets/Uniforms/Security Image2.webp")
    },
    {
        id:82,
        category:"uniform",
        img:require("../assets/Uniforms/Security Image3.webp")
    },
    {
        id:83,
        category:"uniform",
        img:require("../assets/Uniforms/waiters.6.jpg")
    },
    {
        id:84,
        category:"uniform",
        img:require("../assets/Uniforms/Waiters.jpg")
    },
    {
        id:85,
        category:"uniformm ",
        img:require("../assets/Sleeveless.jpg")
    },
]
export default function Portfolio() {
  const [data, setData] = useState(ItemsData);
  const [originalData, setOriginalData] = useState(ItemsData); // Store the original data
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);

  const filterResult = (catItem) => {
    if (catItem === 'All') {
      setData(originalData); // Reset data to the original data
    } else {
      const result = originalData.filter((item) => item.category === catItem);
      setData(result);
    }
    setCurrentPage(1); // Reset to the first page when applying filters
  };

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <div className="App">
      <header id="header">
        <Appheader />
      </header>
      <section id="works" className="block works-block">
        <div className="banner">
          <h1>Products</h1>
        </div>
        <Container fluid>
          <div className='container-fluid mx-2'>
            <div className="row mt-5">
              <div className='col-md-12 mb-2'>
                <button className='btn btn-warning mx-2 mb-2' onClick={()=>filterResult("shirts")}>Shirts</button>
                <button className='btn btn-warning mx-2 mb-2' onClick={()=>filterResult("t-shirts")}>T-Shirts</button>
                <button className='btn btn-warning mx-2 mb-2' onClick={()=>filterResult("pollo")}>Pollo</button>
                <button className='btn btn-warning mx-2 mb-2' onClick={()=>filterResult("Apron")}>Protective</button>
                <button className='btn btn-warning mx-2 mb-2' onClick={()=>filterResult("bag")}>Bags</button>
                <button className='btn btn-warning mx-2 mb-2' onClick={()=>filterResult("uniform")}>Uniforms</button>
                <button className='btn btn-warning mx-2 mb-2' onClick={()=>filterResult("hoody")}>Hoody</button>
                <button className='btn btn-warning mx-2 mb-2' onClick={()=>filterResult("reflector")}>Reflectors</button>
                <button className='btn btn-warning mx-2 mb-2' onClick={()=>filterResult("hats")}>Branded Caps</button>
                <button className='btn btn-warning mx-2 mb-2' onClick={()=>filterResult("sportsWear")}>sportsWear</button>
                <button className='btn btn-warning mx-2 mb-2' onClick={()=>filterResult("DustCoat")}>DustCoat</button>
                <button className='btn btn-warning mx-2 mb-2' onClick={()=>setData(ItemsData)}>All</button>
              </div>
            </div>
          </div>
          <Row className="portfoliolist justify-content-center">
            {Array.isArray(records) ? (
              records.map((values) => {
                return (
                  <Col sm={3} className='mx-2' key={values.id}>
                    <div className="portfolio-wrapper">
                      <a href={values.link}>
                        <Image src={values.img} alt="Item" />
                      </a>
                    </div>
                  </Col>
                );
              })
            ) : (
              <p>Loading data...</p>
            )}
          </Row>
          <nav>
            <ul className='pagination'>
              <li className='page-item'>
                <a href="#" className="page-link" onClick={prePage}>Prev</a>
              </li>
              {numbers.map((n) => (
                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={n.id}>
                  <a className="page-link" href="#" onClick={() => changeCPage(n)}>{n}</a>
                </li>
              ))}
              <li className='page-item'>
                <a href="#" className="page-link" onClick={nextPage}>Next</a>
              </li>
            </ul>
          </nav>
        </Container>
      </section>
      <AppFooter />
    </div>
  );
}
