describe('Search GIFs API Test', () => {
  const apiKey = 'hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk'; // Replace with your actual API key
  const gifsPerPage = 15;

  it('Loads 15 images from Giphy API at once', () => {
    // Intercept the request to the Giphy search API
    cy.intercept('GET', `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${gifsPerPage}`).as('searchRequest');

    // Trigger the action that sends a request to the Giphy search API
    // For example, visit the page and perform a search
    cy.visit('https://giphy-app-nu.vercel.app/');
    cy.get('input[name="searchTerm"]').type('apples');
    cy.get('button[type="submit"]').click();

    // Wait for the API request to complete
    cy.wait('@searchRequest').then((interception) => {
      // Assert that the response contains 15 images
      expect(interception.response.statusCode).to.equal(200);
      expect(interception.response.body.data).to.have.length(gifsPerPage);
    });
  });
});