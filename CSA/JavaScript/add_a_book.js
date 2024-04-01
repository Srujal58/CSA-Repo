document.getElementById('add-book-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Fetch form data
  const formData = new FormData(event.target);
  const bookData = {};
  formData.forEach((value, key) => {
    bookData[key] = value;
  });

  // Validate form data (you can add more validation as needed)
  if (Object.values(bookData).some(value => value.trim() === '')) {
    alert('Please fill out all fields.');
    return;
  }

  // Get the uploaded cover image
  const coverFile = document.getElementById('cover').files[0];
  if (!coverFile) {
    alert('Please upload a cover image.');
    return;
  }

  // Read the uploaded cover image as a data URL
  const reader = new FileReader();
  reader.onload = function(event) {
    // Add the new book to the local storage
    const newBook = {
      title: bookData.title,
      author: bookData.author,
      year: bookData.year,
      genre: bookData.genre,
      coverURL: event.target.result
    };
    localStorage.setItem('addedBook', JSON.stringify(newBook));

    // Redirect to the home page
    window.location.href = 'index.html';
  };
  reader.readAsDataURL(coverFile);
});
