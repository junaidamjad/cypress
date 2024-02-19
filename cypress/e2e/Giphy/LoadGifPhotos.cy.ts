describe('Trending GIFs API Test', () => {
  it('Loads trending GIF photos from Giphy API', () => {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk';

    cy.request<TrendingGifsResponse>({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/trending',
      qs: {
        apiKey,
        limit: 15,
      },
    }).then((response) => {
      // Ensure the API call is successful
      expect(response.status).to.eq(200);

      // Ensure the response contains trending GIF data
      expect(response.body.data).to.have.lengthOf(15);

      // Ensure each GIF has an image and a title
      response.body.data.forEach((gif: GifData) => {
        expect(gif.images).to.have.property('fixed_height');
        expect(gif.images.fixed_height).to.have.property('url');
        expect(gif.title).to.be.a('string');
        console.log(gif.title);
      });
    });
  });
});
