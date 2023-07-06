// Define the API endpoint and your API key
const endpoint = 'https://api.unsplash.com/search/photos';

const apiKey = 'I8ggJs5UJkkJV9xt-nNzKWQGvlY_unyQHXOK3n1UID0';

// Get the necessary HTML elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('results');

// Add an event listener to the search button
searchButton.addEventListener('click', searchImages);

// Function to fetch and display the search results
function searchImages() {
  const query = searchInput.value;

  // Create the API URL with the query and API key
  const url = `${endpoint}?query=${query}&client_id=${apiKey}`;

  // Fetch the data from the API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Clear previous results
      resultsDiv.innerHTML = '';

      // Loop through the image results and create HTML elements
      data.results.forEach((result) => {
        const image = document.createElement('img');
        image.src = result.urls.regular;
        resultsDiv.appendChild(image);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
