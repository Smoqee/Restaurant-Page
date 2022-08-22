import './styles/style.css'
import './styles/menu.css'
import './styles/home.css'
import './styles/about.css'

import loadLayout from './scripts/layout.js'
import loadHome from './scripts/home.js'
import loadMenu from './scripts/menu.js'
import loadAbout from './scripts/about.js'

import mainImage from './images/main-image.png'
import set1 from './images/sushi-set-1.png'
import set2 from './images/sushi-set-2.png'
import set3 from './images/sushi-set-3.png'
import set4 from './images/sushi-set-4.png'

loadLayout()
loadHome(mainImage)

document.querySelector('.home-nav').addEventListener('click', (e) => {
    loadHome(mainImage)
    scroll(0, 0)
})

document.querySelector('.menu-nav').addEventListener('click', (e) => {
    loadMenu(set1,set2,set3,set4)
    scroll(0, 0)

})

document.querySelector('.about-nav').addEventListener('click', (e) => {
    loadAbout()
    scroll(0, 0)
})
