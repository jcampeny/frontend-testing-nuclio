describe('Profile Page', () => {
    before(() => {
        cy.registerUser('john@example.com', 'password123');
    });

    beforeEach(() => {
        cy.loginUser('john@example.com', 'password123');
    });


    it('should display the user profile information', () => {
        cy.visit('/profile');

        cy.contains('John Smith').should('be.visible');
    });

    it('should allow the user to log out', () => {
        cy.visit('/profile');

        cy.contains('Cerrar sesión').click();

        cy.url().should('include', '/login');
    });
});
