describe('Login Form', () => {
  before(() => {
    cy.registerUser('john@example.com', 'password123');
  });

  it('should navigate to profile after successful login', () => {
    // TODO 01
    // Visitar la ruta /login

    // Rellenar el formulario con un email y contraseña

    // Hacer clic en el botón de enviar

    // Comprobar que la URL contiene /profile
  });

  it('should show an error message on login failure', () => {
    // TODO 02
    // Visitar la ruta /login

    // Rellenar el formulario con un email y contraseña INCORRECTOS

    // Hacer clic en el botón de enviar

    // Comprobar que se muestra el mensaje de error 'Credenciales inválidas'
  });
});
