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

// this function purpose is to display each book object inside the library array
// into a card on a shelf div inside the html
function displayBooks() {
  const bookShelf = document.getElementById('shelf');

  // this loop clears existing content, it literally means: "while there is a
  // a first child on bookShelf element, remove it". So it keeps removing them
  // till the element is empty.
  while (bookShelf.firstChild) {
    bookShelf.removeChild(bookShelf.firstChild);
  }

  // this method execute a function once per every book
  // a div is created 'bookCard' and according a condition
  // ('read' status) the content is decided
  // besides, a button to change that condition is also created
  // then another button is created with the purpose of remove books
  // some attributes and the button text are set
  // then all created elements are append
  myLibrary.forEach((book, index) => {
    const readButton = document.createElement('button');
    readButton.setAttribute('class', 'read-button');
    readButton.setAttribute('data-index', `${index}`);

    const bookCard = document.createElement('div');

    if (book.read) {
      bookCard.innerHTML = `
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <p>You have already read it.</p>
      `;
      readButton.textContent = 'mark as unread';
    } else {
      bookCard.innerHTML = `
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <p>You haven't read it yet.</p>
      `;
      readButton.textContent = 'mark as read';
    }

    const cardButton = document.createElement('button');

    cardButton.setAttribute('class', 'remove-button');
    cardButton.setAttribute('data-index', `${index}`);

    cardButton.textContent = 'remove';

    bookCard.appendChild(cardButton);
    bookCard.appendChild(readButton);
    bookShelf.appendChild(bookCard);
  });
  // here an event listener is added to the remove button, the index attribute
  // is read and then that index is remove from the array and the display
  document.querySelectorAll('.remove-button').forEach((button) => {
    button.addEventListener('click', function () {
      const cardIndex = button.getAttribute('data-index');
      myLibrary.splice(cardIndex, 1);
      displayBooks();
    });
  });
  // here an event listener is added to the read button, the index attribute
  // is read and then that array index's read property is change
  document.querySelectorAll('.read-button').forEach((button) => {
    button.addEventListener('click', function () {
      const cardIndex = button.getAttribute('data-index');
      myLibrary[cardIndex].toggleStatus();
      displayBooks();
    });
  });
}

Book.prototype.toggleStatus = function () {
  if (this.read) {
    this.read = false;
  } else {
    this.read = true;
  }
};

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
