// a constant with the name 'myLibrary' is declared
// this constant has an array as its value
const myLibrary = [];
// assigning HTML modal as value to newBookModal variable
const newBookModal = document.querySelector('#new-book-modal');

// an object constructor is declared, for Book objects, each object
// is going to have four properties: title, author, pages and read status
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// this function makes a new book object and adds it to the library array
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBooks() {
  const bookShelf = document.getElementById('shelf');

  // this loop clears existing content, it literally means: "while there is a
  // a first child on bookShelf element, remove it". So it keeps removing them
  // till the element is empty.
  while (bookShelf.firstChild) {
    bookShelf.removeChild(bookShelf.firstChild);
  }

  myLibrary.forEach((book) => {
    const bookCard = document.createElement('div');
    if (book.read) {
      bookCard.innerHTML = `
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <p>You have already read it.</p>
      `;
    } else {
      bookCard.innerHTML = `
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <p>You haven't read it yet.</p>
      `;
    }
    bookShelf.appendChild(bookCard);
  });
}

// this function makes the modal element appears when clicked
document.getElementById('new-book-button').onclick = function () {
  newBookModal.showModal();
};
// this function adds a book object with the user inputs
// as its properties to the Library array and close the modal
document.getElementById('add-button').onclick = function () {
  title = document.getElementById('title').value;
  author = document.getElementById('author').value;
  pages = document.getElementById('pages').value;
  read = document.getElementById('read').checked;
  addBookToLibrary(title, author, pages, read);
  newBookModal.close();
  displayBooks();
};

// this provisional code adds some books examples to work with
addBookToLibrary('example of title', 'example of author', 45);
addBookToLibrary('example of title 2', 'example of author', 87, true);
addBookToLibrary('example of title 3', 'example of author', 62);

displayBooks();
