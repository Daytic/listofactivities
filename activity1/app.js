import { myimage } from "./img.js"
import { myFunction } from "./info.js"

let myObject = {
    title1 : "Welcome to",
    paragraph1 : "Greek Mythology is the set of stories about the gods, goddesses, heroes and rituals of Ancient Greeks.",
    myimg: "R.png",
    myimg1: "greek.png",
    button1: "Contact",
    button2: "About",
    title: "Greek Mythology",
    paragraph: "Greek Mythology was part of the religion in Ancient Greece. The most popular Greek Mythology figures include Greek Gods like Zeus, Poseidon & Apollo, Greek Goddesses like Aphrodite, Hera & Athena and Titans like Atlas.",
    button3: "Source",
    button4: "Visit"
} 

const {title1, paragraph1, myimg, myimg1, button1, button2, title, paragraph, button3, button4} = myObject
let container = document.getElementById("container")
container.append(myFunction(title1,title, paragraph1,paragraph, button1,button2, button3, button4))
container.append(myimage(myimg, myimg1,))