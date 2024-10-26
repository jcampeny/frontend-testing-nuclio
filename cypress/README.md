```markdown
# Pruebas End-to-End con Cypress

Este directorio contiene las pruebas end-to-end (E2E) para la aplicación frontend utilizando Cypress.

## Prerrequisitos

Asegúrate de tener el servidor backend en funcionamiento. Puedes encontrar el repositorio del backend [aquí](https://github.com/jcampeny/backend-testing-nuclio).

### Configuración del Backend

1. Clona el repositorio del backend:
    ```bash
    git clone https://github.com/jcampeny/backend-testing-nuclio.git
    cd backend-testing-nuclio
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Inicia el servidor backend:
    ```bash
    npm run dev
    ```

### Configuración del Frontend

1. Asegúrate de estar en el directorio raíz del proyecto frontend.

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo del frontend:
    ```bash
    npm run dev
    ```

## Configuración de Cypress

1. Instala Cypress:
    ```bash
    npm install cypress --save-dev
    ```

2. Abre el Test Runner de Cypress:
    ```bash
    npx cypress open
    ```

## Ejecución de Pruebas

### Ejecución de Pruebas en el Test Runner de Cypress

1. Abre el Test Runner de Cypress:
    ```bash
    npx cypress open
    ```

2. Haz clic en el archivo de prueba que deseas ejecutar desde la interfaz del Test Runner de Cypress.

### Ejecución de Pruebas en Modo Headless

1. Ejecuta todas las pruebas en modo headless:
    ```bash
    npm run test:e2e
    ```

## Estructura de las Pruebas

- `cypress/e2e/`: Contiene los archivos de pruebas end-to-end.
- `cypress/fixtures/`: Contiene archivos de datos de prueba.
- `cypress/support/`: Contiene archivos de soporte y comandos personalizados.

## Ejemplo de Prueba

Aquí tienes un ejemplo de una prueba de inicio de sesión ubicada en `cypress/e2e/login.cy.js`:

```javascript
describe('Formulario de Inicio de Sesión', () => {
  before(() => {
    cy.registerUser('john@example.com', 'password123');
  });

  it('debería navegar al perfil después de un inicio de sesión exitoso', () => {
    cy.visit('/login');

    cy.get('input[placeholder="Email"]').type('john@example.com');
    cy.get('input[placeholder="Contraseña"]').type('password123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/profile');
  });

  it('debería mostrar un mensaje de error en caso de fallo de inicio de sesión', () => {
    cy.visit('/login');

    cy.get('input[placeholder="Email"]').type('wrong@example.com');
    cy.get('input[placeholder="Contraseña"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();

    cy.contains('Credenciales inválidas').should('be.visible');
  });
});
```

## Comandos Personalizados

Puedes agregar comandos personalizados en `cypress/support/commands.js`. Por ejemplo, un comando para registrar un usuario:

```javascript
Cypress.Commands.add('registerUser', (email, password) => {
  cy.request('POST', 'http://localhost:3000/api/register', {
    email,
    password
  });
});
```

## Configuración

El archivo de configuración de Cypress está ubicado en `cypress.config.js`. Asegúrate de que `baseUrl` esté configurado correctamente:

```javascript
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implementa los listeners de eventos aquí
    },
  },
});
```

## Solución de Problemas

- Asegúrate de que el servidor backend esté en funcionamiento y accesible en `http://localhost:3000`.
- Asegúrate de que el servidor frontend esté en funcionamiento y accesible en `http://localhost:5173`.
- Revisa la consola del Test Runner de Cypress para cualquier mensaje de error.

Para más información, consulta la [documentación de Cypress](https://docs.cypress.io).
```
