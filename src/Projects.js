import closeSvg from "../img/close.svg"
import minimizeSvg from "../img/minimize.svg"

export function Projects(){

    const main = document.querySelector(".main-section")

    const projectsContainer = document.createElement("div")
    projectsContainer.classList.add("link-container")
    main.appendChild(projectsContainer)

    const decoration = document.createElement("div")
    decoration.classList.add("me-decoration")
    projectsContainer.appendChild(decoration)

    const projectsSection = document.createElement("section")
    projectsSection.classList.add("links-section")
    projectsContainer.appendChild(projectsSection)

    const close = document.createElement("img")
    close.src= closeSvg
    close.classList.add("decoration-svg")
    decoration.appendChild(close)

    const minimize = document.createElement("img")
    minimize.src= minimizeSvg
    minimize.classList.add("decoration-svg")
    decoration.appendChild(minimize)

    const decorationInfo = document.createElement("p")
    decorationInfo.innerText = "About me"
    decoration.classList.add("decoration-text")
    decoration.appendChild(decorationInfo)

    const projectsText = document.createElement("p")
    projectsText.innerText = "Currently in work :p"
    projectsSection.appendChild(projectsText)

}