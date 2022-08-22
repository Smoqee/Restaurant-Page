export default function loadMenu(set1, set2, set3, set4) {
    const mainContent = document.querySelector('.main-content')
    console.log(mainContent)
    
    mainContent.innerHTML = ''
    mainContent.innerHTML = `
    <div class="menu-set">
                <h1>Our Menu.</h1>
                <div class="menu-area">
                    <div class="menu-item">
                        <img src="${set1}" alt="">
                        <h2>Sushi Set 1</h2>
                        <p>Taste our delicious suhsi set</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et</p>
                        <h3>$5.99</h3>
                    </div>
                    <div class="menu-item">
                        <img src="${set2}" alt="">
                        <h2>Sushi Set 2</h2>
                        <p>Taste our delicious suhsi set</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et</p>
                        <h3>$5.99</h3>
                    </div>
                    <div class="menu-item">
                        <img src="${set3}" alt="">
                        <h2>Sushi Set 3</h2>
                        <p>Taste our delicious suhsi set</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et</p>
                        <h3>$5.99</h3>
                    </div>
                    <div class="menu-item">
                        <img src="${set4}" alt="">
                        <h2>Sushi Set 4</h2>
                        <p>Taste our delicious suhsi set</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et</p>
                        <h3>$5.99</h3>
                    </div>
                </div>
            </div>
    `
}