/**
 * Initial layout: top menu bar + bottom footer
 * stays the same on every tab
 */

export default function loadLayout() {
    const content = document.querySelector('#content')

     //navigation bar:
    const header = document.createElement('div')
    header.classList.add('header')
    content.append(header)

    const navigation = document.createElement('div')
    navigation.classList.add('navigation')
    header.append(navigation)

    const navigationList = document.createElement('ul')
    navigation.append(navigationList)

    const homeItem = document.createElement('li')
    homeItem.innerText = 'Home'
    homeItem.classList.add('home-nav')
    const menuItem = document.createElement('li')
    menuItem.innerText = 'Menu'
    menuItem.classList.add('menu-nav')
    const aboutItem = document.createElement('li')
    aboutItem.innerText = 'About'
    aboutItem.classList.add('about-nav')

    navigationList.append(homeItem, menuItem, aboutItem)

    const mainContent = document.createElement('div')
    mainContent.classList.add('main-content')
    content.append(mainContent)

    //footer:
    const footer = document.createElement('footer')
    content.append(footer)

    const footerText = document.createElement('p')
    footerText.innerText = 'Copyright © by Kaan'
    footer.append(footerText)

}
