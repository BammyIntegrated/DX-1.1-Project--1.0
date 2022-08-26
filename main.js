var hamburger = document.querySelector('.hamburger__menu')
var mobilelink = document.querySelector('.mobile__header__nav-linkholder')
var backdrop = document.querySelector('.backdrop')



function Addclass (){
    hamburger.classList.toggle('display')
    mobilelink.classList.toggle('displaylinks')
    backdrop.classList.toggle('displaylinks')

}