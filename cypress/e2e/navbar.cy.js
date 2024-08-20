describe('Navbar Navigation', () => {
  // test for navigating to the Quiz Generation page
  it('should navigate to the Quiz Generation page when the link is clicked', () => {
    // visit the homepage
    cy.visit('http://localhost:3000/');
    // click on the 'Quiz Generation' link
    cy.contains('Quiz Generation').click();
    // verify the URL includes '/quizgeneration'
    cy.url().should('include', '/quizgeneration');
    // check for the presence of 'Quiz Generation Options' text
    cy.contains('Quiz Generation Options');
  });
  
  // test for navigating to the Account page
  it('should navigate to the Account page when the link is clicked', () => {
    // visit the homepage
    cy.visit('http://localhost:3000/');
    // click on the 'Account' link
    cy.contains('Account').click();
    // verify the URL includes '/account'
    cy.url().should('include', '/account');
    // check for the presence of 'You have a streak of 5 days!' text
    cy.contains('You have a streak of 5 days!');
  });
});
