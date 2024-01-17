import mal from "../img/mal-logo.png"
import anilist from "../img/anilist-logo.png"
import x from "../img/x-logo.jpg"
import "./Links.css"
import closeSvg from "../img/close.svg"
import minimizeSvg from "../img/minimize.svg"

export function Links(){

    const main = document.querySelector(".main-section")

    const linkContainer = document.createElement("div")
    linkContainer.classList.add("link-container")
    main.appendChild(linkContainer)

    const decoration = document.createElement("div")
    decoration.classList.add("me-decoration")
    linkContainer.appendChild(decoration)

    const linksSection = document.createElement("section")
    linksSection.classList.add("links-section")
    linkContainer.appendChild(linksSection)

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

    const text = document.createElement("p")
    text.innerText = "You can also found me in this pages :D "
    linksSection.appendChild(text)

    const pageOne = document.createElement("div")
    pageOne.classList.add("links-img")
    pageOne.classList.add("x")
    linksSection.appendChild(pageOne)

    const xImage = document.createElement("img")
    xImage.src = x
    pageOne.appendChild(xImage)

    const xText = document.createElement("p")
    xText.innerText = "X (Twitter)"
    xText.classList.add("text-link")
    pageOne.appendChild(xText)

    const pageTwo = document.createElement("div")
    pageTwo.classList.add("links-img")
    pageTwo.classList.add("anilist")
    linksSection.appendChild(pageTwo)

    const anilistImage = document.createElement("img")
    anilistImage.src = anilist
    pageTwo.appendChild(anilistImage)

    const anilistText = document.createElement("p")
    anilistText.textContent = "Anilist"
    anilistText.classList.add("text-link")
    pageTwo.appendChild(anilistText)

    const pageThree = document.createElement("div")
    pageThree.classList.add("links-img")
    pageThree.classList.add("mal")
    linksSection.appendChild(pageThree)

    const malImage = document.createElement("img")
    malImage.src = mal
    pageThree.appendChild(malImage)

    const malText = document.createElement("p")
    malText.textContent = "My Anime List"
    malText.classList.add("text-link")
    pageThree.appendChild(malText)

}