const navmenu=document.querySelectorAll('#nav-bar .nav-bar .nav-list ul li')
navmenu.forEach(element=>{
    element.addEventListener('click',()=>{
        element.classList.add('active2')
    })
})

const hamburger_icon=document.querySelector('#nav-bar .nav-bar .nav-list .hamburger')
const nav_list=document.querySelector('#nav-bar .nav-bar .nav-list')

hamburger_icon.addEventListener('click',()=>{
    hamburger_icon.classList.toggle('active')
    nav_list.classList.toggle('open')
})

const goTop=document.getElementById('go-top-btn')
window.addEventListener('scroll',checkHeight)

function checkHeight(){
    if(window.scrollY>200){
        goTop.style.display='flex'
    }else{
        goTop.style.display='none'
    }
}
goTop.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})
let products={
    data:[
        // Cultural
        {
            productName:'USEIMG/Shirts/Tailored Office Shirts.png',
            category:"OuterWear",
            price:'30',
            image:'/USEIMG/OuterWear/Hoddy Design1.jpg'
        },
        {
            productName:'culture',
            category:"Cultural",
            price:'30',
            image:'/USEIMG/Cultural Wear/african1.jpg'
        },
        {
            productName:'Colorful',
            category:"Cultural",
            price:'30',
            image:'/USEIMG/Cultural Wear/African2 .webp'
        },
        {
            productName:'Regular Red Hoddy.webp',
            category:"Cultural",
            price:'30',
            image:'USEIMG/Cultural Wear/African2.jpg'
        },
        {
            productName:'USEIMG/Shirts/Tailored Office Shirts.png',
            category:"OuterWear",
            price:'30',
            image:'/USEIMG/OuterWear/Designer Bags.jpg'
        },

        {
            productName:'Regular Grey Hoddy',
            category:"Cultural",
            price:'30',
            image:'USEIMG/Cultural Wear/African3.jpg'
        },
        {
            productName:'Black sleeved Hoddy.webp',
            category:"Cultural",
            price:'30',
            image:'USEIMG/Cultural Wear/African4.jpeg'
        },
        {
            productName:'Regular Red Hoddy.webp',
            category:"Cultural",
            price:'30',
            image:'USEIMG/Cultural Wear/African5.webp'
        },
        // Formal
        {
            productName:'Regular Grey Hoddy',
            category:"Formal",
            price:'30',
            image:'/USEIMG/Formal Wear/suit4.jpg'
        },
        {
            productName:'Black sleeved Hoddy.webp',
            category:"Formal",
            price:'30',
            image:'/USEIMG/Formal Wear/suit2.jpg'
        },
        {
            productName:'Regular Red Hoddy.webp',
            category:"Formal",
            price:'30',
            image:'/USEIMG/Formal Wear/officewear1.webp'
        },
        {
            productName:'Regular Grey Hoddy',
            category:"Formal",
            price:'30',
            image:'/USEIMG/Formal Wear/office wear3.jpg'
        },
        {
            productName:'Black sleeved Hoddy.webp',
            category:"Formal",
            price:'30',
            image:'/USEIMG/Formal Wear/suit5.jpg'
        },
        {
            productName:'Regular Red Hoddy.webp',
            category:"Formal",
            price:'30',
            image:'/USEIMG/Formal Wear/suit7.jpg'
        },
        // caps
        {
            productName:'USEIMG/Caps/Branded Caps1.webp',
            category:"HeadWear",
            price:'30',
            image:'/USEIMG/HeadWear/Branded cap1.jpg'
        },
        {
            productName:'USEIMG/Caps/Branded Caps1.webp',
            category:"HeadWear",
            price:'30',
            image:'/USEIMG/HeadWear/Branded Caps1.webp'
        },
        {
            productName:'USEIMG/Caps/Branded Caps8.webp',
            category:"HeadWear",
            price:'30',
            image:'/USEIMG/HeadWear/Branded Caps2.webp'
        },
        {
            productName:'USEIMG/Caps/Branded Caps8.webp',
            category:"HeadWear",
            price:'30',
            image:'/USEIMG/HeadWear/Branded Caps3..webp'
        },
        {
            productName:'USEIMG/Caps/Branded Caps8.webp',
            category:"HeadWear",
            price:'30',
            image:'/USEIMG/HeadWear/Branded Caps4.webp.webp'
        },
        {
            productName:'USEIMG/Caps/Branded Caps8.webp',
            category:"HeadWear",
            price:'30',
            image:'/USEIMG/HeadWear/Branded Security Hat.jpg'
        },
        {
            productName:'USEIMG/Caps/Branded Caps7.webp',
            category:"HeadWear",
            price:'30',
            image:'/USEIMG/HeadWear/Chef Hat.jpg'
        },
        {
            productName:'USEIMG/Caps/Branded Caps8.webp',
            category:"HeadWear",
            price:'30',
            image:'/USEIMG/HeadWear/chefhat1.jpg'
        },
        // shirts
        {
            productName:'USEIMG/Caps/Branded Caps7.webp',
            category:"Shirts",
            price:'30',
            image:'/USEIMG/Shirts/Corpoarte Shirts.jpg'
        },
        {
            productName:'USEIMG/Apollo/Women Apollo1.webp',
            category:"Shirts",
            price:'30',
            image:'/USEIMG/Shirts/Dress-Shirt-PNG.png'
        },
        {
            productName:'USEIMG/Apollo/ApolloBrandeT.webp',
            category:"Shirts",
            price:'30',
            image:'/USEIMG/Shirts/Tailored Office Shirts.png'
        },
        {
            productName:'USEIMG/Apollo/Women Apollo5.webp',
            category:"Shirts",
            price:'30',
            image:'/USEIMG/Shirts/Corporate Shirts3.jpg'
        },
        {
            productName:'USEIMG/Apollo/Women Apollo1.webp',
            category:"Shirts",
            price:'30',
            image:'/USEIMG/Shirts/Corporate Shirts.jpg'
        },
        // Apollo
        {
            productName:'USEIMG/Apollo/ApolloBrandeT.webp',
            category:"Shirts",
            price:'30',
            image:'/USEIMG/Shirts/Women Apollo5.webp'
        },
        {
            productName:'USEIMG/Apollo/Women Apollo5.webp',
            category:"Shirts",
            price:'30',
            image:'/USEIMG/Shirts/dimikpollo1.jpeg'
        },

        {
            productName:'USEIMG/Apollo/Women Apollo5.webp',
            category:"Shirts",
            price:'30',
            image:'/USEIMG/Shirts/Wo.webp'
        },
        {
            productName:'USEIMG/Apollo/Women Apollo1.webp',
            category:"Shirts",
            price:'30',
            image:'/USEIMG/Shirts/PolloShirt45jpeg.jpg'
        },
        {
            productName:'USEIMG/Apollo/ApolloBrandeT.webp',
            category:"Shirts",
            price:'30',
            image:'/USEIMG/Shirts/PolloShirt4.jpeg'
        },
        {
            productName:'USEIMG/Apollo/Women Apollo5.webp',
            category:"Shirts",
            price:'30',
            image:'/USEIMG/Shirts/PolloShirt3.jpeg'
        },
        {
            productName:'USEIMG/T-shirts/Branded T1.webp',
            category:"Shirts",
            price:'30',
            image:'/USEIMG/Shirts/PolloShirt2.jpeg'
        },
        {
            productName:'USEIMG/T-shirts/Branded T2.webp',
            category:"Shirts",
            price:'30',
            image:'/USEIMG/Shirts/PolloShirt1.jpeg'
        },
        // T-shirts
        {
            productName:'USEIMG/T-shirts/sixpacks.webp',
            category:"T-shirts",
            price:'30',
            image:'/USEIMG/T-shirts/Branded T-shirts1.jpg'
        },

        {
            productName:'USEIMG/T-shirts/Branded T1.webp',
            category:"T-shirts",
            price:'30',
            image:'/USEIMG/T-shirts/dimikT1.webp'
        },
        {
            productName:'USEIMG/T-shirts/Branded T2.webp',
            category:"T-shirts",
            price:'30',
            image:'/USEIMG/T-shirts/dimikT2.webp'
        },
        {
            productName:'USEIMG/T-shirts/sixpacks.webp',
            category:"T-shirts",
            price:'30',
            image:'/USEIMG/T-shirts/dimikT3.webp'
        },

        {
            productName:'USEIMG/T-shirts/Branded T1.webp',
            category:"T-shirts",
            price:'30',
            image:'/USEIMG/T-shirts/dimikT4.webp'
        },
        {
            productName:'USEIMG/T-shirts/Branded T2.webp',
            category:"T-shirts",
            price:'30',
            image:'/USEIMG/T-shirts/dimikT5.webp'
        },
        {
            productName:'USEIMG/T-shirts/sixpacks.webp',
            category:"T-shirts",
            price:'30',
            image:'/USEIMG/T-shirts/dimikT6.webp'
        },
        {
            productName:'USEIMG/T-shirts/sixpacks.webp',
            category:"T-shirts",
            price:'30',
            image:'/USEIMG/T-shirts/dimikT8.jpg'
        },
        // SportsWear
        {
            productName:'USEIMG/Shirts/Dress-Shirt-PNG.png',
            category:"SportsWear",
            price:'30',
            image:'/USEIMG/SportsWear/track suit2.jpg'
        },
        {
            productName:'USEIMG/Shirts/Tailored Office Shirts.png',
            category:"SportsWear",
            price:'30',
            image:'/USEIMG/SportsWear/track suit3.jpg'
        },
        {
            productName:'USEIMG/Shirts/Dress-Shirt-PNG.png',
            category:"SportsWear",
            price:'30',
            image:'/USEIMG/SportsWear/track suit4.jpg'
        },
        {
            productName:'USEIMG/Shirts/Tailored Office Shirts.png',
            category:"SportsWear",
            price:'30',
            image:'/USEIMG/SportsWear/Track Suits.jpg'
        },
        {
            productName:'USEIMG/Shirts/Dress-Shirt-PNG.png',
            category:"SportsWear",
            price:'30',
            image:'/USEIMG/SportsWear/track suits1.webp'
        },
        {
            productName:'USEIMG/Shirts/Tailored Office Shirts.png',
            category:"SportsWear",
            price:'30',
            image:'/USEIMG/SportsWear/track suits5.webp'
        },
        // OuterWear
        {
            productName:'USEIMG/Shirts/Dress-Shirt-PNG.png',
            category:"OuterWear",
            price:'30',
            image:'/USEIMG/OuterWear/Aprons.jpg'
        },
        {
            productName:'USEIMG/Shirts/Tailored Office Shirts.png',
            category:"OuterWear",
            price:'30',
            image:'/USEIMG/OuterWear/Sleeveless.jpg'
        },
        {
            productName:'USEIMG/Shirts/Dress-Shirt-PNG.png',
            category:"OuterWear",
            price:'30',
            image:'/USEIMG/OuterWear/Branded Black Hoddy.webp'
        },
        {
            productName:'USEIMG/Shirts/Tailored Office Shirts.png',
            category:"OuterWear",
            price:'30',
            image:'/USEIMG/OuterWear/Dust Coats.jpg'
        },
        {
            productName:'USEIMG/Shirts/Dress-Shirt-PNG.png',
            category:"OuterWear",
            price:'30',
            image:'/USEIMG/OuterWear/Reflectors.jpg'
        },
        {
            productName:'USEIMG/Shirts/Tailored Office Shirts.png',
            category:"OuterWear",
            price:'30',
            image:'/USEIMG/OuterWear/Overalls.2jpg.jpg'
        },
        {
            productName:'USEIMG/Shirts/Tailored Office Shirts.png',
            category:"OuterWear",
            price:'30',
            image:'/USEIMG/OuterWear/Branded Bags.jpg'
        },
        {
            productName:'USEIMG/Shirts/Dress-Shirt-PNG.png',
            category:"OuterWear",
            price:'30',
            image:'/USEIMG/OuterWear/Custom Bags.jpg'
        },
        // uniforms
        {
            productName:'USEIMG/Shirts/Tailored Office Shirts.png',
            category:"uniforms",
            price:'30',
            image:'/USEIMG/Uniforms/Chef uniform 1.jpg'
        },
        {
            productName:'USEIMG/Shirts/Dress-Shirt-PNG.png',
            category:"uniforms",
            price:'30',
            image:'/USEIMG/Uniforms/CHef5.jpg'
        },
        {
            productName:'USEIMG/Shirts/Tailored Office Shirts.png',
            category:"uniforms",
            price:'30',
            image:'/USEIMG/Uniforms/Choir gown1.webp'
        },
        {
            productName:'USEIMG/Shirts/Tailored Office Shirts.png',
            category:"uniforms",
            price:'30',
            image:'/USEIMG/Uniforms/Security Image1.webp'
        },
        {
            productName:'USEIMG/Shirts/Dress-Shirt-PNG.png',
            category:"uniforms",
            price:'30',
            image:'/USEIMG/Uniforms/Security Image2.webp'
        },
        {
            productName:'USEIMG/Shirts/Tailored Office Shirts.png',
            category:"uniforms",
            price:'30',
            image:'/USEIMG/Uniforms/Security Image3.webp'
        },
        {
            productName:'USEIMG/Shirts/Dress-Shirt-PNG.png',
            category:"uniforms",
            price:'30',
            image:'/USEIMG/Uniforms/Waiters.jpg'
        },
        {
            productName:'USEIMG/Shirts/Dress-Shirt-PNG.png',
            category:"uniforms",
            price:'30',
            image:'/USEIMG/Uniforms/waiters.6.jpg'
        },

    ]
};

for (let i of products.data){
    // create  a card
    let card=document.createElement('div');
    // card category and should be hidden initially

    card.classList.add('card',i.category,"hide");
    // create image container
    let imgContainer=document.createElement('div');
    imgContainer.classList.add('image-container')
    // img tag
    let image=document.createElement('img')
    // /src
    image.setAttribute('src',i.image);
    imgContainer.appendChild(image);
    card.append(imgContainer);

    

    // add container
    let container=document.createElement('div');
    container.classList.add('container');

    // product name
    let name=document.createElement('h4')
    name.classList.add('product-name')
    name.innerText=i.productName

    container.appendChild(name)

    // card.appendChild(container)
    // price

    let price=document.createElement('h5')
    price.classList.add('price')
    price.innerText=`$ ${i.price}`
    container.appendChild(price)

    document.getElementById('products').appendChild(card) 
}
// filter product method
// paramters passed should be equal to the value of the category of our item
function filterProduct(value){
    // button class code 
    let buttons=document.querySelectorAll('.button-value');
    buttons.forEach(button=>{
        // check if value equla innertext
        if(value.toUpperCase()== button.innerText.toUpperCase()){
            button.classList.add('active')
        }
        else{
            button.classList.remove('active')
        }
    })
    // select all cards
    let elements=document.querySelectorAll('.card')
    // loop thru all
    elements.forEach(element=>{
        if(value=='all'){
            element.classList.remove('hide')
        }
        else{
            // display element based on category
            if(element.classList.contains(value)){
                element.classList.remove('hide')
            }
            else{
                // hide elements
                element.classList.add('hide');
            }
        }
    })
}

// initial display all onloading
window.onload=()=>{
    filterProduct('all')
}

function scrollTop(){
    window.scrollTo(0,0);
}

