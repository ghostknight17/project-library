//array declaration
const myLibrary = [];

//object constructor
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

//this function makes a new book and adds it to the library
function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  myLibrary.push(book);
}

//this function adds random books to the array
function addRandomBook() {
  const randomTitle = makeString(7);
  const randomAuthor = makeString(7);
  const randomPages = Math.floor(Math.random() * 1000);
  addBookToLibrary(randomTitle, randomAuthor, randomPages);
}

//this taken from internet function generates a random book
function makeString(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
