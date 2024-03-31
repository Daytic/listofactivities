import { myimage } from "./img.js"
import { myFunction } from "./info.js"
import { myFunction2 } from "./card.js"

let myObject = {
    title: "Liza Mae C. Daytic",
    paragraph : "Hi there! I'm BSIT student who's passionate about traditional art and video editing. When I'm not hitting the books, you'll catch me snapping random pics, edit it using Adobe Lightroom. I love playing musical instruments too. Creating art and editing videos are my jams",
    myimg: "img1.jpg",
    button1: "Contact me"
}

let myObject2 = {
    p1:"gwapaaa.jpg",
    p2:"gwapaa.jpg",
    p3:"gwapa.jpg",
    paragraph1: "Project photographs",
    paragraph2: "Project traditional arts",
    paragraph3: "Project Videos editing",
    button3: "View more",
    button4: "View more",
    button5: "View more",
}

const {title, paragraph, myimg, button1} = myObject
let sectionOne = document.getElementById("sectionOne")
const  {title2, p1, p2, p3, paragraph1,paragraph2,paragraph3, button3, button4, button5} = myObject2
let sectionTwo = document.getElementById("sectionTwo")
sectionOne.append(myFunction(title, paragraph, button1))
sectionOne.append(myimage(myimg))
sectionTwo.append(myFunction2(title2, p1, p2, p3, paragraph1,paragraph2,paragraph3, button3, button4, button5))