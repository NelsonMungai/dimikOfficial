import { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
export default function AppFooter(){
    const[ShowTopBtn,SetShowTopBtn]=useState(false)

    useEffect(()=>{
       window.addEventListener('scroll',()=>{
        if(window.scrollY>400){
            SetShowTopBtn(true);
        }else{
            SetShowTopBtn(false);
        }
       }) 
    },[])
    function goTop(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return (
        <section className="block footer-block" id="footer">
            <Container fluid>
            <div className='copyright'>&copy; 2023 dimikEnterprises. All Rights Reserved</div>
            <div className="socials">
                <ul>
                    <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.twitter.com"><i class="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="https://www.linkedIn.com"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            {
                ShowTopBtn&&(<div className="go-top" onClick={goTop}></div>)
            }
        </Container>
        </section>
        
        
    )
}