import "./Personal.css"
import closeSvg from "../img/close.svg"
import minimizeSvg from "../img/minimize.svg"

export function Personal() {

    const div = document.querySelector("#app")

    const main = document.querySelector(".main-section")

    const meContainer = document.createElement("div")
    meContainer.classList.add("me-container")
    main.appendChild(meContainer)

    const decoration = document.createElement("div")
    decoration.classList.add("me-decoration")
    meContainer.appendChild(decoration)

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


    const sectionMe = document.createElement("section")
    sectionMe.classList.add("section-me")
    meContainer.appendChild(sectionMe)

    const divInfoContainer = document.createElement("div")
    divInfoContainer.classList.add("me-info-container")
    sectionMe.appendChild(divInfoContainer)

    const divInfoOne = document.createElement("div")
    divInfoOne.classList.add("me-info")
    divInfoContainer.appendChild(divInfoOne)

    const country = document.createElement("p")
    country.innerText = "Country"
    divInfoOne.appendChild(country)

    const countryR = document.createElement("p")
    countryR.innerText = "Spain"
    divInfoOne.appendChild(countryR)

    const divInfotwo = document.createElement("div")
    divInfotwo.classList.add("me-info")
    divInfoContainer.appendChild(divInfotwo)

    const birthday = document.createElement("p")
    birthday.innerText = "Birthday"
    divInfotwo.appendChild(birthday)

    const birthdayR = document.createElement("p")
    birthdayR.innerText = "January 11"
    divInfotwo.appendChild(birthdayR)

    const divInfothree = document.createElement("div")
    divInfothree.classList.add("me-info")
    divInfoContainer.appendChild(divInfothree)

    const age = document.createElement("p")
    age.innerText = "Age"
    divInfothree.appendChild(age)

    const ageR = document.createElement("p")
    ageR.innerText = "20"
    divInfothree.appendChild(ageR)
    

}