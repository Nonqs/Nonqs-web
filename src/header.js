import "./header.css"
import homeSvg from "../img/home.svg"
import hammerSvg from "../img/hammer.svg"
import linkSvg from "../img/link.svg"

export function header(){

    const div = document.querySelector("#app")

    const header = document.createElement("header")
    div.appendChild(header)

    const butttonOne = document.createElement("button")
    butttonOne.classList.add("header-buttons")
    butttonOne.classList.add("me")
    header.appendChild(butttonOne)
    

    const home = document.createElement("img")
    home.src = homeSvg
    home.classList.add("me")
    home.classList.add("header-img")
    butttonOne.appendChild(home)
    

    const me = document.createElement("span")
    me.innerText = "Me"
    me.classList.add("me", "span-text")
    butttonOne.appendChild(me)

    const butttonTwo = document.createElement("button")
    butttonTwo.classList.add("header-buttons", "projects")
    header.appendChild(butttonTwo)

    const hammer = document.createElement("img")
    hammer.src = hammerSvg
    hammer.classList.add("header-img", "projects")
    butttonTwo.appendChild(hammer)

    const projects = document.createElement("span")
    projects.innerText = "Projects"
    projects.classList.add("projects", "span-text")
    butttonTwo.appendChild(projects)

    const butttonThree = document.createElement("button")
    butttonThree.classList.add("header-buttons", "links")
    header.appendChild(butttonThree)

    const linksImg = document.createElement("img")
    linksImg.src = linkSvg
    butttonThree.appendChild(linksImg)
    linksImg.classList.add("header-img", "links")

    const links = document. createElement("span")
    links.innerText ="Links"
    links.classList.add("links", "span-text")
    butttonThree.appendChild(links)



}