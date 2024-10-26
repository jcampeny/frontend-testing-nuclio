Cypress.Commands.add('registerUser', (email, password) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/users/register',
        body: {
            email,
            password,
            firstName: 'John',
            lastName: 'Smith',
        },
        failOnStatusCode: false, // Prevent Cypress from failing the test on a non-2xx status code
    }).then((response) => {
        if (response.status === 400 && response.body.error === 'El usuario ya está registrado') {
            cy.log('Usuario ya registrado, continuando con las pruebas...');
        } else if (response.status !== 201) {
            throw new Error(`Error al registrar el usuario: ${response.body.error}`);
        }
    });
});

Cypress.Commands.add('loginUser', (email, password) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/users/login',
        body: {
            email,
            password,
        },
        failOnStatusCode: false,
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error(`Error al iniciar sesión: ${response.body.error}`);
        }
    });
});
