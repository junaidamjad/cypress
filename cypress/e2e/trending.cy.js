describe('Trending GIFs API Test', () => {
  it('Loads trending GIF photos from Giphy API', () => {
    // Make an API call to get trending GIFs
    cy.request({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/trending',
      qs: {
        api_key: 'hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk', // Replace 'YOUR_API_KEY' with your actual API key
        limit: 15, // Get 15 trending GIFs
      },
    }).then((response: Cypress.Response) => {
      // Ensure the API call is successful
      expect(response.status).to.eq(200);

      // Ensure the response contains trending GIF data
      expect(response.body.data).to.have.lengthOf(15);

      // Ensure each GIF has an image and a title
      (response.body.data as any[]).forEach((gif: any) => {
        expect(gif.images).to.have.property('fixed_height');
        expect(gif.images.fixed_height).to.have.property('url');
        expect(gif.title).to.be.a('string');
      });
    });
  });
});

// describe('Trending GIFs API Test', () => {
//   it('Loads trending GIF photos from Giphy API', () => {
//     // Make an API call to get trending GIFs
//     cy.request({
//       method: 'GET',
//       url: 'https://api.giphy.com/v1/gifs/trending',
//       qs: {
//         api_key: 'hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk', // Replace 'YOUR_API_KEY' with your actual API key
//         limit: 15, // Get 15 trending GIFs
//       },
//     }).then((response) => {
//       // Ensure the API call is successful
//       expect(response.status).to.eq(200);

//       // Ensure the response contains trending GIF data
//       expect(response.body.data).to.have.lengthOf(15);

//       // Ensure each GIF has an image and a title
//       response.body.data.forEach((gif) => {
//         // Ensure each GIF has an image URL
//         expect(gif.images).to.have.property('original');
//         expect(gif.images.original).to.have.property('url');

//         // Ensure each GIF has a title
// expect(gif.title.toLowerCase()).to.include('happy hour beer gif by busch');

//         // Check if the GIF is rendered properly on the page
//         cy.visit('/') // Replace '/' with the actual URL of the page where GIFs are rendered
//         cy.get('.gif-row').should('have.lengthOf', 1); // Assuming GIFs are rendered row-wise with a class of 'gif-row'

//         // Check if the image and title are displayed for each GIF
//         cy.get('.gif-row').within(() => {
//           cy.get('.gif-image').should('be.visible'); // Assuming GIF images have a class of 'gif-image'
//           cy.get('.gif-title').should('be.visible'); // Assuming GIF titles have a class of 'gif-title'
//         });
//       });
//     });
//   });
// });


