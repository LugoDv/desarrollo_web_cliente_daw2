let reload = 0
const formUser = document.querySelector('#form-initial')
const body = document.querySelector('body');
const user = document.querySelector('.userName')
const reloadSpan = document.querySelector('#reload-count')
const inputColor = document.querySelector('#color')
const titleLastVisit = document.querySelector('h3')


//Gestión de cookies
const lastVisited = () => {
    let now = new Date();

    if (!document.cookie.includes("lastVisit")) {

        document.cookie = "lastVisit=" + now.toUTCString() + "; path=/";

        console.log(document.cookie)
    }

    document.cookie = `lastVisit=${now.toUTCString()}; path=/`;

}

const getCookie = (name) => {
    const value = document.cookie.split('; ').find(cookie => cookie.startsWith(name + '='));
    return value
}



//contador de recargas de la pagina
const reloadsCount = () => {
    reload = sessionStorage.getItem('reload') ? parseInt(sessionStorage.getItem('reload')) : 0;

    sessionStorage.setItem('reload', ++reload)

    console.log("summa countador", reload)
    return reload;

}



//eventos de carga load, DOMContentLoaded,beforeunload
window.addEventListener('DOMContentLoaded', () => {
    // console.log('La página y todos sus recursos se han cargado.');

    const lastVisit = getCookie("lastVisit") ?? 'Welcomer'


    lastVisited()

    titleLastVisit.textContent = `${lastVisit}`
    body.style.setProperty('background-color', localStorage.getItem('color'))
    user.textContent = this.localStorage.getItem('name')


    reloadSpan.textContent = reloadsCount()

    // alert(lastVisit)



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
