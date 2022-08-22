export default function loadAbout() {
    const mainContent = document.querySelector('.main-content')
    mainContent.innerHTML = ''
    mainContent.innerHTML = `
    <div class="about-section">
                <div class="mapouter"><div class="gmap_canvas"><iframe width="500" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br><style>.mapouter{position:relative;text-align:right;height:800px;width:600px;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:800px;width:600px;}</style></div></div>
                <div class="text">
                    <h1>Visit our <br> restaurant!</h1>
                    <p>Youtube</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>
            `
}