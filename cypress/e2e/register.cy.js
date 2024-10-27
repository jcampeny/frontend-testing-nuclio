describe('Register Form', () => {
    const randomEmail = `user${Date.now()}@example.com`;

    it('should register a new user successfully', () => {
        // TODO 03
        // Visitar la ruta /register

        // Rellenar el formulario con un nombre, apellido, email y contraseña
        // Utilizando el email aleatorio definido arriba

        // Hacer clic en el botón de enviar

        // Comprobar que la URL contiene /profile
    });

    it('should show an error message if the user is already registered', () => {
        // TODO 04
        // Visitar la ruta /register

        // Rellenar el formulario con un nombre, apellido, email y contraseña
        // Utilizando el email aleatorio definido arriba OTRA VEZ
        // Para registrar ese mismo usuario por segunda vez

        // Hacer clic en el botón de enviar

        // Comprobar que se muestra el mensaje de error 'El usuario ya está registrado'
    });
});
