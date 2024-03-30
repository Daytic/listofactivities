
const myFunction = (title, paragraph, button1)=> {
    let div = document.createElement("div")

    div.innerHTML = `<div class = "style">
                    <h1>${title}</h1></br>
                    <p>${paragraph}</p>
                    </div>
                    <div class = "btn">
                    <button>${button1}</button>
                    </div>`
    return div
}

export {myFunction}
