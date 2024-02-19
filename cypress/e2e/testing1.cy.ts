describe('Trending GIFs API Test', () => {
  const apiKey = 'hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk'; // Replace with your actual API key
  const gifsPerPage = 15;
  let currentPage = 0;
  let allGifsLoaded = false;

  const loadMoreGifs = () => {
    if (allGifsLoaded) return;

    cy.request<TrendingGifsResponse>({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/trending',
      qs: {
        apiKey,
        limit: gifsPerPage,
        offset: currentPage * gifsPerPage,
      },
    }).then((response) => {
      // Ensure the API call is successful
      expect(response.status).to.eq(200);
      console.log('hi');
      // Ensure the response contains trending GIF data
      const newGifs = response.body.data;
      console.log(newGifs)
      if (newGifs.length === 0) {
        allGifsLoaded = true;
        return;
      }
      

      // Append new GIFs to the existing photo list
      newGifs.forEach((gif: GifData) => {
        // Append the new gif to your photo list here
        console.log('New GIF:', gif.title);
      });

      // Move to the next page
      currentPage++;
    });
  };

  beforeEach(() => {
    currentPage = 0;
    allGifsLoaded = false;
  });

  it('Loads trending GIF photos from Giphy API', () => {
    // Load initial GIFs
    loadMoreGifs();

    // Listen for scroll event to load more GIFs
    // cy.window().scroll(() => {
    //   const distanceFromBottom = Math.ceil(document.documentElement.scrollHeight - window.innerHeight - window.scrollY);
    //   const threshold = 100; // Adjust threshold as needed

    //   // Load more GIFs when the user reaches the bottom of the page
    //   if (distanceFromBottom <= threshold) {
    //     loadMoreGifs();
    //   }
    // });//scroll end
    // Listen for scroll event to load more GIFs
    // Listen for scroll event to load more GIFs
cy.window().then((win: Cypress.AUTWindow) => {
  win.addEventListener('scroll', () => {
    const distanceFromBottom = Math.ceil(document.documentElement.scrollHeight - window.innerHeight - window.scrollY);
    const threshold = 100; // Adjust threshold as needed

    // Load more GIFs when the user reaches the bottom of the page
    if (distanceFromBottom <= threshold) {
      loadMoreGifs();
    }
  });
});
   

  });
});

// Define interfaces for the Giphy API response structure
interface TrendingGifsResponse {
  data: GifData[];
}

interface GifData {
  images: {
    fixed_height: {
      url: string;
    };
  };
  title: string;
}
