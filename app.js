const library = document.getElementById("library")
const submitBtn = document.getElementById("submit")

let myLibrary = [];

function startUp(library) {
    for (let book in library) {
        createCard(library[book]);
    }
}

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

const book1 = new Book("Teo Te Ching", "Lao Tzu", 2020, "Croatian", 96, true);
myLibrary.push(book1)
const book2 = new Book("Zhuangzi: The Complete Writings", "Zhuangzi", 2020, "English", 336, false);
myLibrary.push(book2)
const book3 = new Book("Svijet progonjen demonima", "Carl Sagan", 2013, "Croatian", 376, true)
myLibrary.push(book3)
const book4 = new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 1995, "English", 224, true)
myLibrary.push(book4)
const book5 = new Book("Opća psihologija komunikacije", "Friedemann Schulz von Thun", 2006, "Croatian", 235, false)
myLibrary.push(book5)
const book6 = new Book("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 2011, "English", 512, false)
myLibrary.push(book6)

function createCard(book) {
    let newCard = document.createElement("div")
    newCard.classList.add("card");

    let infoBox = document.createElement("div")
    infoBox.classList.add("info")
    let btnBox = document.createElement("div")
    btnBox.classList.add("button-box")

    for (let key in book) {
        if (key === "_id") {
        } else if (key === "title") {
            let element = document.createElement("h1")
            element.textContent = `${book[key]}`
            infoBox.appendChild(element)
        } else if (key === "author") {
            let element = document.createElement("h2")
            element.textContent = `${book[key]}`
            infoBox.appendChild(element)
        } else if (key === "read") {
            let element = document.createElement("div")
            if (book[key] === true) {
                element.setAttribute("id", "read")
                element.textContent = "Read"
            } else {
                element.setAttribute("id", "unread")
                element.textContent = "Unread"
            }
            btnBox.appendChild(element)
        } else {
            let element = document.createElement("p");
            element.setAttribute("id", key)
            element.textContent = `${book[key]}`
            element.classList.add("item")
            infoBox.appendChild(element)
        }
    }

    let removeBtn = document.createElement("button")
    removeBtn.setAttribute("id", "remove-btn")
    removeBtn.textContent = "Remove"

    btnBox.appendChild(removeBtn)

    newCard.appendChild(infoBox)
    newCard.appendChild(btnBox)

    library.appendChild(newCard)
}

function addNewBook(title, author, year, language, pages, read) {
    let book = new Book(title, author, year, language, pages, read);
    myLibrary.push(book);
    createCard(book)
}

const myForm = document.getElementById("myForm")

myForm.addEventListener("submit", function(){
    event.preventDefault();
    let readBool;
    if (this.elements.read.value === "true") {
        readBool = true;
    } else {
        readBool = false;
    }
    addNewBook(
        this.elements.title.value,
        this.elements.author.value,
        this.elements.year.value,
        this.elements.language.value,
        this.elements.pages.value,
        readBool
    )
    myForm.reset();
})

startUp(myLibrary);