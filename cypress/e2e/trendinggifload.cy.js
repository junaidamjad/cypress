describe('Giphy App', () => {
  it('Loads trending GIFs and displays them correctly', () => {
    cy.visit('https://giphy-app-nu.vercel.app/');
    cy.wait(5000);

    // Ensure the trending GIFs are loaded
    cy.get('.trending-gifs .gif').should('have.length', 15);
    cy.wait(5000);
    // Verify each GIF has an image and title
    cy.get('.trending-gifs .gif').each(($gif) => {
      cy.wrap($gif).find('img').should('be.visible');
      cy.wrap($gif).find('.title').should('be.visible');
    });
  });
  it('Loads more trending GIFs when scrolling down', () => {
    cy.visit('https://giphy-app-nu.vercel.app/');

    // Scroll down to trigger loading more GIFs
    cy.get('.trending-gifs').scrollTo('bottom');

    // Ensure additional GIFs are loaded
    cy.get('.trending-gifs .gif').should('have.length.greaterThan', 15);
  });

  it('Stops loading more trending GIFs when reaching the last page', () => {
    cy.visit('https://giphy-app-nu.vercel.app/');

    // Scroll down multiple times to reach the last page
    for (let i = 0; i < 5; i++) {
      cy.get('.trending-gifs').scrollTo('bottom');
    }

    // Ensure no additional GIFs are loaded beyond the last page
    cy.get('.trending-gifs .gif').its('length').then(($length) => {
      cy.wait(2000); // Wait for any potential loading delay
      cy.get('.trending-gifs .gif').should('have.length', $length);
    });
  });

  it('Searches for GIFs using the search box', () => {
    cy.visit('https://giphy-app-nu.vercel.app/');

    // Enter a search term
    cy.get('.search-input').type('cats');

    // Submit the search
    cy.get('.search-btn').click();

    // Ensure search results are displayed
    cy.get('.search-results .gif').should('have.length.gt', 0);
  });

  it('Loads more search results when scrolling down', () => {
    cy.visit('https://giphy-app-nu.vercel.app/');

    // Search for a term
    cy.get('.search-input').type('dogs');
    cy.get('.search-btn').click();

    // Scroll down to trigger loading more results
    cy.get('.search-results').scrollTo('bottom');

    // Ensure additional search results are loaded
    cy.get('.search-results .gif').should('have.length.greaterThan', 15);
  });

  it('Stops loading more search results when reaching the last page', () => {
    cy.visit('https://giphy-app-nu.vercel.app/');

    // Search for a term
    cy.get('.search-input').type('birds');
    cy.get('.search-btn').click();

    // Scroll down multiple times to reach the last page
    for (let i = 0; i < 5; i++) {
      cy.get('.search-results').scrollTo('bottom');
    }

    // Ensure no additional search results are loaded beyond the last page
    cy.get('.search-results .gif').its('length').then(($length) => {
      cy.wait(2000); // Wait for any potential loading delay
      cy.get('.search-results .gif').should('have.length', $length);
    });
  });
});
