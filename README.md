# Proyecto de Testing de FrontEnd

Este proyecto está diseñado para enseñar a los estudiantes a realizar pruebas unitarias y de componentes en una aplicación React utilizando Vitest y Testing Library. El objetivo es proporcionar una estructura básica donde se puedan practicar pruebas en componentes y hooks de React que interactúan con un backend simulado. Las pruebas abarcan validaciones de formularios, hooks personalizados, y el manejo de errores y redirecciones en la interfaz de usuario.

## Instrucciones para Ejecutar el Proyecto

1. Clonar el repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd frontend-testing-nuclio
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Ejecutar el proyecto en modo desarrollo:

   ```bash
   npm run dev
   ```

4. Ejecutar las pruebas:

   Para ejecutar todas las pruebas:

   ```bash
   npm test
   ```

## Estructura del Proyecto

```bash
frontend-testing-nuclio/
│
├── public/                     # Archivos estáticos
├── src/
│   ├── components/             # Componentes de la interfaz de usuario
│   │   ├── LoginForm.jsx       # Formulario de inicio de sesión
│   │   ├── ProfilePage.jsx     # Página de perfil de usuario
│   │   └── RegisterForm.jsx    # Formulario de registro
│   ├── hooks/                  # Hooks personalizados
│   │   ├── useLogin.js         # Hook para el inicio de sesión
│   │   ├── useLogout.js        # Hook para el cierre de sesión
│   │   ├── useProfile.js       # Hook para obtener perfil de usuario
│   │   └── useRegister.js      # Hook para el registro de usuarios
│   ├── App.jsx                 # Componente principal de la aplicación
│   ├── main.jsx                # Punto de entrada de la aplicación
│   └── index.css               # Estilos globales de la aplicación
├── tests/                      # Directorio de pruebas
│   ├── components/             # Pruebas de componentes
│   │   ├── LoginForm.test.js    # Pruebas del formulario de inicio de sesión
│   │   ├── ProfilePage.test.js  # Pruebas de la página de perfil
│   │   └── RegisterForm.test.js # Pruebas del formulario de registro
│   ├── hooks/                  # Pruebas de hooks personalizados
│   │   ├── useLogin.test.js     # Pruebas del hook de inicio de sesión
│   │   ├── useLogout.test.js    # Pruebas del hook de cierre de sesión
│   │   ├── useProfile.test.js   # Pruebas del hook de perfil
│   │   └── useRegister.test.js  # Pruebas del hook de registro
├── package.json                # Dependencias y scripts del proyecto
├── vite.config.js              # Configuración de Vite
└── README.md                   # Documentación del proyecto
```

### Componentes

Los componentes principales de la aplicación son formularios de inicio de sesión y registro, y una página de perfil. Cada uno está diseñado para ser probado de manera aislada y verificar su funcionalidad, como la correcta interacción con los hooks de registro y autenticación, y las redirecciones correspondientes.

### Hooks Personalizados

Los hooks encapsulan la lógica de negocio para el manejo de autenticaciones, registro y gestión del perfil de usuario. Las pruebas de estos hooks aseguran que la lógica se maneje correctamente independientemente de los componentes.

### Tests

El proyecto incluye pruebas para los componentes y los hooks, asegurando que la UI funcione como se espera y que la lógica de los hooks se ejecute correctamente.

### Pruebas de Componentes

Las pruebas de componentes se centran en verificar que los formularios se renderizan correctamente, que las entradas del usuario son gestionadas adecuadamente, y que se manejan los errores y redirecciones.

### Pruebas de Hooks

Las pruebas de hooks verifican que las funciones de negocio, como el inicio de sesión y el registro, se ejecuten correctamente, manejando tanto los casos exitosos como los fallidos.

## Scripts Disponibles

- `npm run dev`: Inicia la aplicación en modo desarrollo con Vite.
- `npm test`: Ejecuta las pruebas usando Vitest.
- `npm run build`: Construye la aplicación para producción.
- `npm run preview`: Previsualiza la aplicación construida.

## Dependencias

- **React**: Biblioteca para construir interfaces de usuario.
- **react-hook-form**: Manejo de formularios en React.
- **react-router-dom**: Manejo de rutas en aplicaciones React.
- **axios**: Cliente HTTP para hacer peticiones a la API.

### Dependencias de desarrollo

- **vitest**: Framework para escribir y ejecutar pruebas.
- **@testing-library/react**: Herramientas para probar componentes de React.
- **eslint**: Linter para mantener el código limpio y consistente.

## Recomendaciones para las Pruebas

- Asegúrate de aislar las dependencias externas usando mocks durante las pruebas.
- Utiliza las herramientas de Testing Library para interactuar con los elementos del DOM de forma que se asemeje a cómo lo haría un usuario.
- Verifica que los hooks respondan correctamente a las llamadas a la API y manejan bien los errores.
