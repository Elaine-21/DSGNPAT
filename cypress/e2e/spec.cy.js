// cypress/integration/login_spec.js

describe('Login testing', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
})

 /*  //login witoout email and password 
  it('login without username', () => {
    // Enter invalid username/email and password
    cy.get('#email').type('');
    cy.get('#password').type('');
    
    // Click the login button
    cy.get('#login-button').click();
    
    // Assert that the error message is displayed
    cy.get('#error_issue').should('be.visible').and('contain', 'Username is Required!');
  });

  //login witoout password 
  it('login without password', () => {
    // Enter invalid username/email and password
    cy.get('#email').type('invalid_user');
    cy.get('#password').type('');
    
    // Click the login button
    cy.get('#login-button').click();
    
    // Assert that the error message is displayed
    cy.get('#error_issue').should('be.visible').and('contain', 'Password is Required!');
  }); */

  //log in using incorrect credentials
  it('Invalid login', () => {
    // Enter invalid username/email and password
    cy.get('#email').type('invalid_user');
    cy.get('#password').type('invalid_password');
    
    // Click the login button
    cy.get('#login-button').click();
    
    // Assert that the error message is displayed
    cy.get('#error_issue').should('be.visible').and('contain', 'Incorrect Credentials!');
  });

  /* // forgot password for no email found in database
  it('Forgot password (email not found on database)', () => {
  
    // Click the login button
    cy.get('#login-form > :nth-child(2) > button').click();

    // enter valid username/email
    cy.get('#for-pas-email').type('notfoundemail');
    
    // Assert that the error message is displayed
    cy.get('#error_issue').should('contain', 'email not found! Register first');
  }); */

  // forgot password correct email
  it('Forgot password (email found on database)', () => {
  
    // Click the login button
    cy.get('#login-form > :nth-child(2) > button').click();

    // enter valid username/email
    cy.get('#for-pas-email').type('john.doe@example.com');
    
    // Assert that the error message is displayed
    cy.get('#forgot-password-form').should('not.exist');
  });

  it('Successful login', () => {
    // Enter valid username/email and password
    cy.get('#email').type('john.doe@example.com');
    cy.get('#password').type('password123');
    
    // Click the login button
    cy.get('#login-button').click();

    // Assert that the login button is not visible
    cy.get('#login-button').should('not.exist');
    cy.get('#time').should('be.visible');
  })

  it('Successful logout', () => {
    // Enter valid username/email and password
    cy.get('#email').type('john.doe@example.com');
    cy.get('#password').type('password123');
    
    // Click the login button
    cy.get('#login-button').click();

    // Click the login button
    cy.get('h2 > a').click();       ///click on the logout button (s)

    // Assert that the login button is not visible
    cy.get('h2 > a').should('not.exist');
    cy.get('#login-button').should('be.visible');
  })
});


describe('User Story #3', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('User can view Weekly Pay', () => {
    // Enter valid username/email and password
    cy.get('#email').type('john.doe@example.com');
    cy.get('#password').type('password123');
    
    // Click the login button
    cy.get('#login-button').click();

    // Click the login button
    cy.get(':nth-child(2) > p > a').click();       ///click on the logout button (s)

    // Assert that the Weekly Pay is visible
    cy.get('[style="width:45%"] > h2').should('be.visible');
  })
});