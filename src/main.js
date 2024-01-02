// DOM elements
const getModeList = () => {
    const modeList = []
    blogDisplayModes.forEach((displayMode) => {
        displayMode.classList.value.split(' ').forEach((mode) => {
            if (mode.includes('--')) modeList.push(mode.slice(mode.indexOf('--')+2,mode.length))
        })
    })
    return modeList
}
const navbarItems = document.querySelectorAll('.navbar__item')
const burgerMenu = document.querySelector('#hamburger-menu__toggle')
const burgerMenuItems = document.querySelectorAll('.hamburger-menu__item')
const body = document.querySelector('body')
const blogDisplayModes = document.querySelectorAll('.blog__display-mode')
const blog = document.querySelector('.blog__cards')
const cards = document.querySelectorAll('.card')
const displayModeList = getModeList();


// Funcs


 // Removes the given class from a list of DOM elements
const removeElementsClass = (elementList, targetClass) => {
    elementList.forEach((element) => element.classList.remove(`${targetClass}`))
}
// Removes everything related to a certain mode of displaying cards in the blog section
const unsetDisplayMode = () => {
    displayModeList.forEach((mode) => {
        blog.classList.remove(`blog__cards--${mode}`)
    })
    cards.forEach((card) => {
        card.classList.remove('card--lined')
        card.querySelector('.card__body').classList.remove('card__body--lined')
        card.querySelector('.card__image').classList.remove('card__image--lined')
        card.querySelector('.card__info').classList.remove('card__info--absolute')
    })
}
// Sets the given mode of displaying for the blog section
const setBlogDisplayMode = (mode) => {
    unsetDisplayMode()
    Cookies.set('blogDisplayMode', mode)
    switch (mode){
        case 'list':
            blog.classList.add('blog__cards--list')
            cards.forEach((card) => {
                card.classList.add('card--lined')
                card.querySelector('.card__body').classList.add('card__body--lined')
                card.querySelector('.card__image').classList.add('card__image--lined')
                card.querySelector('.card__info').classList.add('card__info--absolute')
            })
            break;
        // Grid is set by default if there's no mode saved in Cookies
        case 'grid':
            blog.classList.add('blog__cards--grid')
            break;
    }
}
// Put here everything you need to get executed when the page gets loaded
const onPageLoad = () => {
    const blogDisplayMode =  Cookies.get('blogDisplayMode')

    blogDisplayMode 
    ? setBlogDisplayMode(blogDisplayMode) 
    : setBlogDisplayMode('grid')
} 

// Event listeners
navbarItems.forEach((navbarItem) => {
    navbarItem.addEventListener('click',(e) => {
        removeElementsClass(navbarItems,'navbar__item--active')
        e.currentTarget.classList.add('navbar__item--active')
    })
})

burgerMenu.addEventListener('click', () => {
    body.classList.toggle('block-scroll') // Disables the scroll bar on the y-axis
}) 

burgerMenuItems.forEach((burgerMenuItem) => {
    burgerMenuItem.addEventListener('click',(e) => {
        removeElementsClass(burgerMenuItems,'hamburger-menu__item--active')
        e.currentTarget.classList.add('hamburger-menu__item--active')
    })
})

for (let i = 0; i < blogDisplayModes.length; i++) {
    blogDisplayModes[i].addEventListener('click', () => {
        setBlogDisplayMode(displayModeList[i])
    })
}


onPageLoad();







