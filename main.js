import "./style.css"
import { header } from "./src/header"
import { About } from "./src/About"
import { Personal } from "./src/Personal"
import { Links } from "./src/Links"
import { deleteRender } from "./src/functions/delteRender"
import gif from "./img/gif.mp4"
import { Projects } from "./src/Projects"

const body = document.querySelector("#body")

const backgroundGif = document.createElement("video")
backgroundGif.classList.add("video")
backgroundGif.src = gif 
backgroundGif.muted = true
backgroundGif.autoplay = true
backgroundGif.loop = true
body.appendChild(backgroundGif)


function main(){
const div = document.querySelector("#app")

const main = document.createElement("main")
main.classList.add("main-section")
div.appendChild(main)
}

header()
main()
About()
Personal()


document.addEventListener("click", function(event) {
    const target = event.target

    if (target.classList.contains("me")) {
        deleteRender()
        
        header()
        main()
        About()
        Personal()
    } else if (target.classList.contains("links")) {
        deleteRender()
       
        header()
        main()
        Personal()
        Links()
        
    }else if(target.classList.contains("projects")){
        deleteRender()
       
        header()
        main()
        Personal()
        Projects()
    }
})

