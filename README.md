Giphy App Automated Testing
How to Run and Test the Application
To run and test the Giphy App using the provided automated tests, follow these steps:

> Ensure you have Node.js and Cypress installed on your system.
> Clone the repository or download the source code.
> Navigate to the root directory of the project in your terminal.
> Install the dependencies by running: npm install
>Run the Cypress test runner by executing: npx cypress open
> All the solution is present inside the Giphy folder (ignore the test files outside of the giphy folder)

Module 1: Load Gif Photos
Run: In the Cypress window, click on the test file LoadGifPhotos.cy.ts to run the Load Gif test for the Giphy App.
 Reasoning Behind the Approach Taken:
The automated script performs the following checks:
> It sends a request to the Giphy API to fetch trending GIFs.
> It checks if the API call is successful (status code 200).
> It verifies that the response contains exactly 15 GIFs.
> For each GIF in the response, it checks if there is an image URL and a title.

 The test focuses on testing the functionality of fetching trending GIFs from the Giphy API.
 This ensures that the application can successfully retrieve and display GIFs from an external API,
 which is a critical feature of the application.

 The test includes assertions to verify that the API call is successful, the response contains the expected number of GIFs,
 and each GIF has the required properties (image URL and title). These checks ensure that the API response meets the 
 application's requirements and expectations. The test includes assertions to verify that the API call is successful, 
 the response contains the expected number of GIFs, and each GIF has the required properties (image URL and title). 
 These checks ensure that the API response meets the application's requirements and expectations.

Assumptions Made:
API Key: The test assumes that a valid API key is required to make requests to the Giphy API. It uses a placeholder API key ('YOUR_API_KEY') and expects the user to replace it with their actual API key for the test to work.

Number of GIFs: The test assumes that the Giphy API will always return exactly 15 trending GIFs in the response. This assumption is based on the specified limit of 15 GIFs per page in the API request.

GIF Properties: The test assumes that each GIF returned by the API will have properties such as image URL and title. It checks for the presence of these properties to ensure that the data returned by the API is structured as expected.

API Endpoint: The test assumes that the endpoint 'https://api.giphy.com/v1/gifs/trending' will always return trending GIFs. It does not account for scenarios where the endpoint may be unavailable or return unexpected data.


Module 2: Search Box Test
Run: In the Cypress window, click on the test file SearchBoxImplementation1.cy.ts to run the Load Gif test for the Giphy App.

Reasoning Behind the Approach Taken:
The test verifies a crucial functionality of the Giphy app – the ability to search for GIFs based on user input. 
Ensuring that the search feature works as expected is essential for the overall usability of the application.
 By intercepting the API request and checking its response, the test ensures that the application is making the correct API call 
 and receiving the expected data from the Giphy API.
 
 Assumptions:
API Key Validity: The test assumes that the provided API key is valid and authorized to access the Giphy API. If the API key is invalid or unauthorized, the test may fail.

Search Term Result: The test assumes that searching for the term "apples" will return exactly 15 GIFs. This assumption is based on the expected behavior of the Giphy search API and the test's implementation.

Static Search Term: The test uses a static search term ("apples") for simplicity. In a real-world scenario, the search term could be dynamic or parameterized to test different search queries.


Module 3: Scroll till the end
Run: In the Cypress window, click on the test file Scrolltilltheend.cy.ts to run the Load Gif test for the Giphy App.

Reasoning Behind the Approach Taken:

The test utilizes a recursive approach to continuously scroll down the page until reaching the bottom.
This approach ensures that the test can handle dynamic content loading as the user scrolls.
By incorporating a wait time after each scroll,  the test allows time for the page to load additional content before 
checking if it has reached the bottom.
This approach helps in smoother scrolling and prevents the test from erroneously concluding before all content is loaded.

Assumptions:
Visibility of GIF List: The test assumes that the GIF list element ([data-cy="gifItem"]) is present and visible on the page before scrolling. If this element is not visible or if there are issues with its visibility, the test may fail.

Consistent Scroll Behavior: The test assumes that the scrolling behavior of the page is consistent and predictable. If there are variations in the page's scrolling behavior due to dynamic content loading or other factors, the test may encounter unexpected issues or fail prematurely.

Missing Module:
Note: The feedback module was missing from the web page and it's API was also not available.
The above implementation contains test script for the available modules.

Time taken: It took me 6 hours to write the test plan and create the scripts in typescript. 
