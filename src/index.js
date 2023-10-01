document.addEventListener('DOMContentLoaded', () => {
    const movieForm = document.getElementById('movieForm');
    const movieDetails = document.getElementById('movieDetails');
  
    movieForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const inputField = document.getElementById('searchByID');
      const movieId = inputField.value;
  
      try {
        const response = await fetch(`http://localhost:3000/movies/${movieId}`);
        if (response.ok) {
          const movieData = await response.json();
          displayMovieDetails(movieData);
        } else {
          displayErrorMessage('Movie not found');
        }
      } catch (error) {
        displayErrorMessage('An error occurred');
      }
    });
  
    function displayMovieDetails(movie) {
      const titleElement = movieDetails.querySelector('h4');
      const summaryElement = movieDetails.querySelector('p');
  
      titleElement.textContent = movie.title;
      summaryElement.textContent = movie.summary;
    }
  
    function displayErrorMessage(message) {
      const titleElement = movieDetails.querySelector('h4');
      const summaryElement = movieDetails.querySelector('p');
  
      titleElement.textContent = 'Error';
      summaryElement.textContent = message;
    }
  });
  