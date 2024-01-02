  const bookShelf = document.getElementsByClassName('bookshelf0');
  const myLibrary = [];
  
  function Book(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
  }
  
  // Function to toggle the visibility of the form
  function toggleFormVisibility() {
      const form = document.querySelector('.book3');
      form.style.display = form.style.display === 'none' ? 'block' : 'none';
  }
  
  // Event listener for the "Add book" button with the class "addBook"
  document.querySelector('.addBook').addEventListener('click', toggleFormVisibility);
  
  function addBookToLibrary() {
      // Get form values
      const title = document.getElementById('title3').value;
      const author = document.getElementById('author3').value;
      const pages = document.getElementById('pages3').value;
      const read = document.getElementById('yes3').checked;
  
      // Create a new book instance
      const newBook = new Book(title, author, pages, read);
  
      // Add the new book to the library array
      myLibrary.push(newBook);
  
      // Optional: Clear the form after adding the book
      document.getElementById('title3').value = '';
      document.getElementById('author3').value = '';
      document.getElementById('pages3').value = '';
      document.getElementById('yes3').checked = true;


    // Determine the index of the bookshelf based on the length of myLibrary
    const bookshelfIndex = Math.min(myLibrary.length, 2);

    // Append the new book to the respective bookshelf
    const bookshelf = document.getElementsByClassName(`bookshelf${bookshelfIndex}`)[0];
    const bookDiv = document.createElement('div');
    // Customize the way you want to display the book information
    bookDiv.textContent = `Title: ${newBook.title}, Author: ${newBook.author}`;
    bookshelf.appendChild(bookDiv);

  
      // Optional: Call a function to render/display the updated library
      renderLibrary(); 
  
      // Hide the form after adding the book
      toggleFormVisibility();
  }
  
  function renderLibrary() {

    console.log(myLibrary);
  }
