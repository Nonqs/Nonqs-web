import "./About.css"
import pfp from "../img/pfp.jpeg"
import css from "../img/css.svg"
import html from "../img/html.svg"
import js from "../img/js.svg"
import mongo from "../img/mongo.svg"
import node from "../img/node.svg"
import react from "../img/react.svg"
import sql from "../img/sql.svg"
import closeSvg from "../img/close.svg"
import minimizeSvg from "../img/minimize.svg"

export function About() {

    const main = document.querySelector(".main-section")

    const aboutContainer = document.createElement("div")
    aboutContainer.classList.add("about-container")
    main.appendChild(aboutContainer)

    const decoration = document.createElement("div")
    decoration.classList.add("decoration")
    aboutContainer.appendChild(decoration)

    const close = document.createElement("img")
    close.src= closeSvg
    close.classList.add("decoration-svg")
    decoration.appendChild(close)

    const minimize = document.createElement("img")
    minimize.src= minimizeSvg
    minimize.classList.add("decoration-svg")
    decoration.appendChild(minimize)

    const decorationInfo = document.createElement("p")
    decorationInfo.innerText = "Me"
    decoration.classList.add("decoration-text")
    decoration.appendChild(decorationInfo)

    const section = document.createElement("section")
    section.classList.add("about")
    aboutContainer.appendChild(section)

    const firstPart = document.createElement("div")
    firstPart.classList.add("first")
    section.appendChild(firstPart)

    const img = document.createElement("img")
    img.src = pfp
    img.classList.add("pfp-img")
    firstPart.appendChild(img)

    const info = document.createElement("div")
    info.classList.add("info")
    firstPart.appendChild(info)

    const name = document.createElement("h2")
    name.innerText = "Tomas"
    info.appendChild(name)

    const firstP = document.createElement("p")
    firstP.innerText = "Former fullstack dev"
    info.appendChild(firstP)

    const imagesContainer = document.createElement("div")
    info.appendChild(imagesContainer)

    const htmlImage = document.createElement("img")
    htmlImage.src = html
    htmlImage.classList.add("logo-img")
    imagesContainer.appendChild(htmlImage)

    const cssImage = document.createElement("img")
    cssImage.src = css
    cssImage.classList.add("logo-img")
    imagesContainer.appendChild(cssImage)

    const jsImage = document.createElement("img")
    jsImage.src = js
    jsImage.classList.add("logo-img")
    imagesContainer.appendChild(jsImage)

    const reactImage = document.createElement("img")
    reactImage.src = react
    reactImage.classList.add("logo-img")
    imagesContainer.appendChild(reactImage)

    const mongoImage = document.createElement("img")
    mongoImage.src = mongo
    mongoImage.classList.add("logo-img")
    imagesContainer.appendChild(mongoImage)

    const secondP = document.createElement("p")
    secondP.innerText = "Learning now: "
    info.appendChild(secondP)

    const secondImageContainer = document.createElement("div")
    info.appendChild(secondImageContainer)

    const nodeImage = document.createElement("img")
    nodeImage.src = node
    nodeImage.classList.add("logo-img")
    secondImageContainer.appendChild(nodeImage)

    const sqlImage = document.createElement("img")
    sqlImage.src = sql
    sqlImage.classList.add("logo-img")
    secondImageContainer.appendChild(sqlImage)

    const factsContainer = document.createElement("div")
    factsContainer.classList.add("text")
    section.appendChild(factsContainer)

    const randomFact = document.createElement("p")
    randomFact.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deleniti commodi possimus ea, blanditiis quae rerum culpa iste maiores numquam ab nam, hic ratione recusandae, modi temporibus animi totam sunt?"
    factsContainer.appendChild(randomFact)

    const randomFact2 = document.createElement("p")
    randomFact2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deleniti commodi possimus ea, blanditiis quae rerum culpa iste maiores numquam ab nam, hic ratione recusandae, modi temporibus animi totam sunt?"
    factsContainer.appendChild(randomFact2)

}