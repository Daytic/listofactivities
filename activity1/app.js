import { myimage } from "./img.js"
import { myFunction } from "./info.js"

let myObject = {
    title1 : "The Panda",
    paragraph1 : "The giant panda (Ailuropoda melanoleuca), also known as the panda bear or simply panda, is a bear species endemic to China. It is characterised by its bold black-and-white coat and rotund body.",
    myimg: "3pups.jpg",
    button1: "contact us",
    button2: "about us",
    title: "Title 2",
    paragraph: "The giant panda (Ailuropoda melanoleuca), also known as the panda bear or simply panda, is a bear species endemic to China. It is characterised by its bold black-and-white coat and rotund body.",
    button3: "contact us",
    button4: "about us"
} 

const {title1, paragraph1, myimg, button1, button2, title, paragraph, button3, button4} = myObject
let container = document.getElementById("container")
container.append(myFunction(title1,title, paragraph1,paragraph, button1,button2, button3, button4))
container.append(myimage(myimg))