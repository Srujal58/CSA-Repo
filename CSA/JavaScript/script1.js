document.getElementById('logout-button').addEventListener('click', function() {
  // Redirect the user to the login page
  window.location.href = 'login.html'; // Replace 'login.html' with the actual URL of your login page
});

// Function to add a book to the home page
function addBookToHomePage(book) {
  const inventory = document.querySelector('main');

  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = book.coverURL;
  img.alt = 'Book Cover';

  const details = document.createElement('div');
  details.classList.add('details');

  const title = document.createElement('h3');
  title.textContent = 'Title: ' + book.title;

  const author = document.createElement('p');
  author.textContent = 'Author: ' + book.author;

  const genre = document.createElement('p');
  genre.textContent = 'Genre: ' + book.genre;

  const year = document.createElement('p');
  year.textContent = 'Year: ' + book.year;

  details.appendChild(title);
  details.appendChild(author);
  details.appendChild(genre);
  details.appendChild(year);

  card.appendChild(img);
  card.appendChild(details);

  inventory.appendChild(card);
}

// Retrieve added book details from local storage (if any) and add them to the home page
const addedBook = JSON.parse(localStorage.getItem('addedBook'));
if (addedBook) {
  addBookToHomePage(addedBook);
  localStorage.removeItem('addedBook'); // Clear the added book from local storage
}
