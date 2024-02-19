describe('Giphy App: Infinite scroll test', () => {
  beforeEach(() => {
    cy.visit('https://giphy-app-nu.vercel.app/');
  });

  // Ensure GIF list element exists and is visible before scrolling
  it('should scroll to the last GIF using infinite scroll', () => {
    // Scroll down repeatedly until reaching the bottom of the page
    const scrollDownToBottom = () => {
      cy.scrollTo('bottom');
      cy.wait(1000); // Adjust wait time as needed for smoother scrolling
      cy.document().then((doc) => {
        const scrolledToBottom = doc.documentElement.scrollHeight - window.innerHeight <= window.scrollY;
        if (!scrolledToBottom) {
          scrollDownToBottom();
        } else {
          cy.log('Successfully scrolled to the bottom of the page!');
        }
      });
    };

    // Start scrolling down
    cy.get('[data-cy="gifItem"]').should('be.visible').then(() => {
      scrollDownToBottom();
    });
  });
});

