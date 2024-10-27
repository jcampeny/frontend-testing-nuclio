describe('Profile Page', () => {
    before(() => {
        cy.registerUser('john@example.com', 'password123');
    });

    beforeEach(() => {
        cy.loginUser('john@example.com', 'password123');
    });


    it('should display the user profile information', () => {
        // TODO 05

        // Visitar la ruta /profile y comprobar que esta el nombre del usuario John Smith
    });

    it('should allow the user to log out', () => {
        // TODO 06
        // Visitar la ruta /profile

        // Hacer clic en el enlace de cerrar sesión

        // Comprobar que la URL contiene /login
    });
});
