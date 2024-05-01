//array declaration
const myLibrary = [];
//assigning modal value to newBookModal variable
const newBookModal = document.querySelector('#new-book-modal');

//object constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//this function makes a new book and adds it to the library
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

//this function loops through the books and show them on the console
function libraryLoop() {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(
      `${myLibrary[i].title} by ${myLibrary[i].author}, has ${myLibrary[i].pages} pages.`
    );
  }
}

//this function makes the modal appears when clicked
document.getElementById('new-book-button').onclick = function () {
  newBookModal.showModal();
};
//this function adds a book with the user inputs as its properties and close the modal
document.getElementById('add-button').onclick = function () {
  title = document.getElementById('title').value;
  author = document.getElementById('author').value;
  pages = document.getElementById('pages').value;
  read = document.getElementById('read').checked;
  addBookToLibrary(title, author, pages, read);
  newBookModal.close();
};

// //this function adds random books to the array
// function addRandomBook() {
//   const randomTitle = makeString(7);
//   const randomAuthor = makeString(7);
//   const randomPages = Math.floor(Math.random() * 1000);
//   addBookToLibrary(randomTitle, randomAuthor, randomPages);
// }

// function makeString(length) {
//   let result = '';
//   const characters =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   const charactersLength = characters.length;
//   let counter = 0;
//   while (counter < length) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     counter += 1;
//   }
//   return result;
// }
