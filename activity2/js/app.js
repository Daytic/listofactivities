import { myimage } from "./img.js"
import { myFunction } from "./info.js"
import { myFunction2 } from "./card.js"

let myObject = {
    title: "Liza Mae C. Daytic",
    paragraph : "blah blah blah",
    myimg: "gwapa.jpg",
    button1: "Contact me"
}

let myObject2 = {
    p1:"gwapaaa.jpg",
    p2:"gwapaa.jpg",
    p3:"gwapaa.jpg",
    paragraph1: "type here",
    paragraph2: "type here",
    paragraph3: "type here",
    button3: "Learn More",
    button4: "Learn More",
    button5: "Learn More",
}

const {title, paragraph, myimg, button1} = myObject
let sectionOne = document.getElementById("sectionOne")
const  {title2, p1, p2, p3, paragraph1,paragraph2,paragraph3, button3, button4, button5} = myObject2
let sectionTwo = document.getElementById("sectionTwo")
sectionOne.append(myFunction(title, paragraph, button1))
sectionOne.append(myimage(myimg))
sectionTwo.append(myFunction2(title2, p1, p2, p3, paragraph1,paragraph2,paragraph3, button3, button4, button5))