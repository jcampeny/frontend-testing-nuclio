describe('Register Form', () => {
    const randomEmail = `user${Date.now()}@example.com`;

    it('should register a new user successfully', () => {
        cy.visit('/register');

        cy.get('input[placeholder="Nombre"]').type('John');
        cy.get('input[placeholder="Apellido"]').type('Smith');
        cy.get('input[placeholder="Email"]').type(randomEmail);
        cy.get('input[placeholder="Contraseña"]').type('password123');
        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/profile');
    });

    it('should show an error message if the user is already registered', () => {
        cy.visit('/register');

        cy.get('input[placeholder="Nombre"]').type('John');
        cy.get('input[placeholder="Apellido"]').type('Smith');
        cy.get('input[placeholder="Email"]').type(randomEmail);
        cy.get('input[placeholder="Contraseña"]').type('password123');
        cy.get('button[type="submit"]').click();

        cy.contains('El usuario ya está registrado').should('be.visible');
    });
});
