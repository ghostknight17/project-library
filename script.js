const myLibrary = []; //array declaration

book1 = new Book('cacaco', 'maca quiño', 362);

//create an object on the index 0 of the array

myLibrary[0] = book1;

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
