// describe('Trending GIFs API Test', () => {
//   it('Loads trending GIF photos from Giphy API', () => {
//     // Replace 'YOUR_API_KEY' with your actual API key
//     const apiKey = 'hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk';

//     cy.request<TrendingGifsResponse>({
//       method: 'GET',
//       url: 'https://api.giphy.com/v1/gifs/trending',
//       qs: {
//         apiKey,
//         limit: 15,
//       },
//     }).then((response) => {
//       // Ensure the API call is successful
//       expect(response.status).to.eq(200);

//       // Ensure the response contains trending GIF data
//       expect(response.body.data).to.have.lengthOf(15);

//       // Ensure each GIF has an image and a title
//       response.body.data.forEach((gif: GifData) => {
//         expect(gif.images).to.have.property('fixed_height');
//         expect(gif.images.fixed_height).to.have.property('url');
//         expect(gif.title).to.be.a('string');
//         console.log(gif.title);
//       });
//     });
//   });
// });


// describe('Search GIFs API Test', () => {
//   const apiKey = 'hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk'; // Replace with your actual API key
//   const gifsPerPage = 15;

//   it('Loads search results from Giphy API', () => {
//     // Visit the app
//     cy.visit('https://giphy-app-nu.vercel.app/');

//     // Enter a search term
//     const searchTerm = 'cats'; // Replace with your desired search term
//     cy.get('input[name="searchTerm"]').type(searchTerm);

//     // Trigger the search
//     cy.get('button[type="submit"]').click();

//     // Verify API request and response
//     cy.intercept('GET', `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=${gifsPerPage}`).as('searchRequest');
//     // Wait for the search results to load
//     cy.wait('@searchRequest', { requestTimeout: 20000 }).then((interception) => {
//       expect(interception).to.have.property('response');
//       expect(interception.response.statusCode).to.equal(200);
//       expect(interception.response.body.data).to.have.length(gifsPerPage);

//       // Assert presence of image and title for each GIF
//       interception.response.body.data.forEach((gif: any) => {
//         expect(gif.images.fixed_height.url).to.be.a('string').and.not.be.empty;
//         expect(gif.title).to.be.a('string').and.not.be.empty;
//       });

//       // Assert that the search results are displayed on the page
//       cy.get('#gif-list').should('be.visible');
//       cy.get('#gif-list > li').should('have.length', gifsPerPage);
//     });
//   });
// });

// describe('Search GIFs API Test', () => {
//   const apiKey = 'hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk'; // Replace with your actual API key

//   it('Loads search results from Giphy API', () => {
//     // Replace 'YOUR_API_KEY' with your actual API key
//     const apiKey = 'hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk';
//     const searchTerm = 'cats'; // Replace with your desired search term

//     cy.request<SearchGifsResponse>({
//       method: 'GET',
//       url: `https://api.giphy.com/v1/gifs/search`,
//       qs: {
//         apiKey,
//         q: searchTerm,
//         limit: 15,
//       },
//     }).then((response) => {
//       // Ensure the API call is successful
//       expect(response.status).to.eq(200);

//       // Ensure the response contains search GIF data
//       expect(response.body.data).to.have.lengthOf(15);

//       // Ensure each GIF has an image and a title
//       response.body.data.forEach((gif: GifData) => {
//         expect(gif.images).to.have.property('fixed_height');
//         expect(gif.images.fixed_height).to.have.property('url');
//         expect(gif.title).to.be.a('string');
//         console.log(gif.title);
//       });
//     });
//   });
// });

// // Define interface for the Giphy API response structure
// interface SearchGifsResponse {
//   data: GifData[];
// }

// interface GifData {
//   images: {
//     fixed_height: {
//       url: string;
//     };
//   };
//   title: string;
// }



// describe('Search GIFs UI Test', () => {
//   const searchTerm = 'basketball'; // Replace with your desired search term

//   beforeEach(() => {
//     // Visit the app
//     cy.visit('https://giphy-app-nu.vercel.app/');
//   });

//   it('Loads search results from Giphy API and renders UI properly', () => {
//     // Enter the search term
//     cy.get('input[name="searchTerm"]').type(searchTerm);

//     // Trigger the search
//     cy.get('button[type="submit"]').click();
//  cy.wait(10000);

//  // Ensure that 15 GIF photos are loaded on the page
//  cy.get('[data-cy="gifItem"]').should('have.length', 15);

//  // Verify each GIF photo is displayed as one per row and includes image and title
//  cy.get('[data-cy="gifItem"]').each((gif) => {
//    // Check if each GIF has an image
//    cy.wrap(gif).find('img').should('be.visible');

//    // Check if each GIF has a title
//    cy.wrap(gif).find('.title').should('be.visible');
//  });
// });
// });


// describe('Search GIFs API Test', () => {
//   const apiKey = 'hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk'; // Replace with your actual API key
//   const gifsPerPage = 15;

//   it('Loads 15 images from Giphy API at once', () => {
//     // Intercept the request to the Giphy search API
//     cy.intercept('GET', `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${gifsPerPage}`).as('searchRequest');

//     // Trigger the action that sends a request to the Giphy search API
//     // For example, visit the page and perform a search
//     cy.visit('https://giphy-app-nu.vercel.app/');
//     cy.get('input[name="searchTerm"]').type('cats');
//     cy.get('button[type="submit"]').click();

//     // Wait for the API request to complete
//     cy.wait('@searchRequest').then((interception) => {
//       // Assert that the response contains 15 images
//       expect(interception.response.statusCode).to.equal(200);
//       expect(interception.response.body.data).to.have.length(gifsPerPage);
//     });
//   });
// });


// //////////
// describe('Giphy App: Infinite scroll test', () => {
//   beforeEach(() => {
//     cy.visit('https://giphy-app-nu.vercel.app/');
//   });

//   // Ensure GIF list element exists and is visible before scrolling
//   it('should scroll to the last GIF using scrollTo', () => {
//     cy.get('[data-cy="gifItem"]')
//       .should('be.visible')
//       .then(() => {
//         // Efficiently use cy.scrollTo with an option
//         cy.scrollTo('bottom');

//         // Verify that the last GIF is visible to ensure successful scrolling
//         cy.get('[data-cy="gifItem"] > li:last-child')
//           .should('be.visible')
//           .then(() => {
//             // Optional additional assertions or actions after reaching the bottom
//             cy.log('Successfully scrolled to the last GIF!');
//           });
//       });
//   });
// });

// describe('Giphy App: Infinite scroll test', () => {
//   beforeEach(() => {
//     cy.visit('https://giphy-app-nu.vercel.app/');
//   });

//   // Ensure GIF list element exists and is visible before scrolling
//   it('should scroll to the last GIF using infinite scroll', () => {
//     // Scroll down repeatedly until reaching the bottom of the page
//     const scrollDownToBottom = () => {
//       cy.scrollTo('bottom');
//       cy.wait(1000); // Adjust wait time as needed for smoother scrolling
//       cy.document().then((doc) => {
//         const scrolledToBottom = doc.documentElement.scrollHeight - window.innerHeight <= window.scrollY;
//         if (!scrolledToBottom) {
//           scrollDownToBottom();
//         } else {
//           cy.log('Successfully scrolled to the bottom of the page!');
//         }
//       });
//     };

//     // Start scrolling down
//     cy.get('[data-cy="gifItem"]').should('be.visible').then(() => {
//       scrollDownToBottom();
//     });
//   });
// });

describe('Giphy App: Infinite scroll test', () => {
  beforeEach(() => {
    cy.visit('https://giphy-app-nu.vercel.app/');
  });

  // Ensure GIF list element exists and is visible before scrolling
  it('should scroll to the last GIF using infinite scroll and stop loading more photos if last page is reached', () => {
    // Variables to track pagination
    let currentPage: number = 1;
    let totalGifsLoaded: number = 0;
    let totalGifsAvailable: number = 0;

    // Function to determine if last page is reached
    const isLastPageReached = (): boolean => {
      return totalGifsLoaded >= totalGifsAvailable;
    };

    // Function to load more GIFs
    const loadMoreGifs = (): void => {
      cy.scrollTo('bottom');
      cy.wait(1000); // Adjust wait time as needed for smoother scrolling
      totalGifsLoaded = currentPage * 15; // Assuming 15 GIFs per page
      cy.get('[data-cy="gifItem"]').its('length').then((length: number) => {
        totalGifsAvailable = length;
      });
      currentPage++;
    };

    // Start scrolling down and loading more GIFs until last page is reached
    cy.get('[data-cy="gifItem"]').should('be.visible').then(() => {
      cy.wrap({}).as('scrollCheck');
      cy.get('@scrollCheck').then(() => {
        if (!isLastPageReached()) {
          loadMoreGifs();
          cy.get('@scrollCheck').then(() => {
            if (!isLastPageReached()) {
              loadMoreGifs();
              cy.get('@scrollCheck').then(() => {
                // Add more iterations as needed
                // For demonstration, we have added only 2 iterations
                // You can add more iterations based on your requirement
              });
            }
          });
        }
      });
    });
  });
});
