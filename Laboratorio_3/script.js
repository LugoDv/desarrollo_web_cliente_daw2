let reload = 0
const formUser = document.querySelector('#form-initial')
const applyButton = document.querySelector('#apply-button')
const body = document.querySelector('body');
const user = document.querySelector('.userName')
const reloadSpan = document.querySelector('#reload-count')
const inputColor = document.querySelector('#color')


const lastVisited = () => {

    if (!document.cookie.includes("ultimaVisita")) {

        let ahora = new Date();
        document.cookie = "ultimaVisita=" + ahora.toUTCString() + "; path=/";

        console.log(document.cookie)
    }

    return document.cookie("ultimaVisita");
}




const reloadsCount = () => {
    reload = sessionStorage.getItem('reload') ? parseInt(sessionStorage.getItem('reload')) : 0;

    sessionStorage.setItem('reload', ++reload)

    console.log("summa countador", reload)
    return reload;


}




window.addEventListener('load', () => {
    // console.log('La página y todos sus recursos se han cargado.');

    body.style.setProperty('background-color', localStorage.getItem('color'))
    user.textContent = this.localStorage.getItem('name')


    reloadSpan.textContent = reloadsCount()


});


formUser.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(formUser)
    const name = formData.get('name')
    const color = formData.get('color')

    body.style.setProperty('background-color', color);
    user.textContent = name
    inputColor.value = color

    // console.log(color, name)

    localStorage.setItem('color', color)
    localStorage.setItem('name', name)
    sessionStorage.setItem('reload', reload)


    reloadSpan.textContent = reloadsCount()





})
