// DOM elements
const navbarItems = document.querySelectorAll('.navbar__item')
const burgerMenu = document.querySelector('#hamburger-menu__toggle')
const burgerMenuItems = document.querySelectorAll('.hamburger-menu__item')
const body = document.querySelector('body')


//Funcs
const removeAllActive = () => {
    navbarItems.forEach((navbarItem) => navbarItem.classList.remove('navbar__item--active'))
}
const removeAllActiveBurger = () => { 
    burgerMenuItems.forEach((burgerMenuItem) => burgerMenuItem.classList.remove('hamburger-menu__item--active'))
}

//Event listeners
navbarItems.forEach((navbarItem) => {
    navbarItem.addEventListener('click',(e) => {
        removeAllActive()
        e.currentTarget.classList.add('navbar__item--active')
    })
})
burgerMenu.addEventListener('click',() => {
    body.classList.toggle('block-scroll')
})
burgerMenuItems.forEach((burgerMenuItem) => {
    burgerMenuItem.addEventListener('click',(e) => {
        removeAllActiveBurger()
        e.currentTarget.classList.add('hamburger-menu__item--active')
    })
})





