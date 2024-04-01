// Retrieve the book details from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title');
const author = urlParams.get('author');
const year = urlParams.get('year');
const genre = urlParams.get('genre');

// Populate the form fields with the retrieved book details
document.getElementById('title').value = title;
document.getElementById('author').value = author;
document.getElementById('year').value = year;
document.getElementById('genre').value = genre;

// Handle form submission
document.getElementById('edit-book-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Fetch updated form data
  const updatedTitle = document.getElementById('title').value;
  const updatedAuthor = document.getElementById('author').value;
  const updatedYear = document.getElementById('year').value;
  const updatedGenre = document.getElementById('genre').value;

  // Update the book details in the home page
  updateBookInHomePage(title, {
    title: updatedTitle,
    author: updatedAuthor,
    year: updatedYear,
    genre: updatedGenre
  });

  // Redirect back to the home page after editing
  window.location.href = 'index.html'; // Replace with the actual URL of your home page
});

// Function to update the book details in the home page
function updateBookInHomePage(oldTitle, updatedBook) {
  // Retrieve the existing books from local storage or any other data source
  const existingBooks = JSON.parse(localStorage.getItem('books')) || [];

  // Find the index of the book to be updated
  const index = existingBooks.findIndex(book => book.title === oldTitle);

  if (index !== -1) {
    // Update the book details at the found index
    existingBooks[index] = updatedBook;

    // Save the updated book list back to local storage or any other data source
    localStorage.setItem('books', JSON.stringify(existingBooks));
  }
}
