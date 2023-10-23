hamburger_menu=document.querySelector('#nav-bar .nav-bar .nav-list .hamburger')
nav_list=document.querySelector('#nav-bar .nav-bar .nav-list')

hamburger_menu.addEventListener('click',()=>{
    hamburger_menu.classList.toggle('active')
    nav_list.classList.toggle('open')
})