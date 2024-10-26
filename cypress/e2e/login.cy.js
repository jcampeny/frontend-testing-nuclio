describe('Login Form', () => {
  before(() => {
    cy.registerUser('john@example.com', 'password123');
  });

  it('should navigate to profile after successful login', () => {
    cy.visit('/login');

    cy.get('input[placeholder="Email"]').type('john@example.com');
    cy.get('input[placeholder="Contraseña"]').type('password123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/profile');
  });

  it('should show an error message on login failure', () => {
    cy.visit('/login');

    cy.get('input[placeholder="Email"]').type('wrong@example.com');
    cy.get('input[placeholder="Contraseña"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();

    cy.contains('Credenciales inválidas').should('be.visible');
  });
});
