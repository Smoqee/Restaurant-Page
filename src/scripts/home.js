export default function loadHome(imageSource) {
    const mainContent = document.querySelector('.main-content')
    mainContent.innerHTML = ''

    const headPage = document.createElement('div')
    headPage.classList.add('head-page')
    mainContent.append(headPage)

    const text = document.createElement('div')
    text.classList.add('text')
    headPage.append(text)

    const headline = document.createElement('h1')
    headline.innerHTML = '&nbsp&nbsp<span>Sushi</span><br>restaurant.'
    text.append(headline)

    const headlineParagraph = document.createElement('p')
    headlineParagraph.innerText = 'Enjoy delicious food at our place!'
    text.append(headlineParagraph)

    const image = document.createElement('img')
    image.src = imageSource
    headPage.append(image)

    const buttonLabel = document.createElement('p')
    buttonLabel.classList.add('button-label')
    buttonLabel.innerText = 'Keep scrolling!'
    headPage.append(buttonLabel)

    const homemadeLink = document.createElement('a')
    homemadeLink.href = '#homemade'
    headPage.append(homemadeLink)

    const button = document.createElement('button')
    button.innerText = 'V'
    homemadeLink.append(button)

    const homemade = document.createElement('div')
    homemade.id = 'homemade'
    mainContent.append(homemade)

    const homemadeArea = document.createElement('div')
    homemadeArea.classList.add('homemade-area')
    homemade.append(homemadeArea)

    const headline2 = document.createElement('h2')
    headline2.innerText = 'Our food is 100% homemade!'
    homemadeArea.append(headline2)

    const paragraph = document.createElement('p')
    paragraph.innerText = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam`
    homemadeArea.append(paragraph)
}