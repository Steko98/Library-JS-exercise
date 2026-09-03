const library = document.getElementById("library")

let myLibrary = [];

function Book(title, author, year, language, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this._id = crypto.randomUUID()
    this.title = title;
    this.author = author;
    this.year = year;
    this.language = language;
    this.pages = pages;
    this.read = read;
}

function createCard(book) {
    let newCard = document.createElement("div")
    newCard.classList.add("card");

    let infoBox = document.createElement("div")
    infoBox.classList.add("info")

    for (let key in book) {
        if (key === "_id") {
        } else if (key === "title"){
            let element = document.createElement("h1")
            element.textContent = `${book[key]}`
            infoBox.appendChild(element)
        } else if(key === "author"){
            let element = document.createElement("h2")
            element.textContent = `${book[key]}`
            infoBox.appendChild(element)
        } else if (key === "read"){
            let element = document.createElement("div")
            if (book[key] === true) {
                element.classList.add("read")
                element.setAttribute("id", "read")
                element.textContent = "Read"
            } else {
                element.setAttribute("id", "unread")
                element.textContent = "Unread"
            }
            infoBox.appendChild(element)
        } else {
            let element = document.createElement("p");
            element.setAttribute("id", key)
            element.textContent = `${book[key]}`
            element.classList.add("item")
            infoBox.appendChild(element)
        }
    }

    let btnBox = document.createElement("div")
    btnBox.classList.add("button-box")
    let readBtn = document.createElement("button")
    readBtn.setAttribute("id", "read-btn")
    readBtn.textContent = "Check";
    let removeBtn = document.createElement("button")
    removeBtn.setAttribute("id", "remove-btn")
    removeBtn.textContent = "Remove"

    btnBox.appendChild(readBtn)
    btnBox.appendChild(removeBtn)

    newCard.appendChild(infoBox)
    newCard.appendChild(btnBox)

    library.appendChild(newCard)
}

function addNewBook(title, author, year, language, pages, read) {
    let book = new Book(title, author, year, language, pages, read);
    myLibrary.push(book);
}