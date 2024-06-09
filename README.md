# Carrito de Compras Backend

Este proyecto es un sistema de backend diseñado para gestionar un carrito de compras, la inscripción de usuarios, y el manejo de productos. Utilizando Express JS y Node JS como principales tecnologías para el desarrollo del servidor, este proyecto provee una solución eficiente y escalable para la administración de un comercio electrónico. Además, se integra con MongoDB para la gestión de la persistencia de los datos, ofreciendo así un rendimiento óptimo y una organización clara de la información.

## Características

- **Inscripción de Usuarios**: Permite a nuevos usuarios registrarse y a usuarios existentes iniciar sesión, manejar sus datos de perfil y cerrar sesión.
- **Manejo de Productos**: Administración de productos incluyendo la creación, lectura, actualización y eliminación de información de productos (CRUD).
- **Carro de Compras**: Facilita a los usuarios añadir productos a un carro de compras, actualizar las cantidades, ver los productos añadidos y removerlos del carro.
- **Persistencia de Datos**: Uso de MongoDB para almacenar y gestionar los datos relacionados con usuarios, productos y carritos de compras de manera eficiente y escalable.
- **API RESTful**: Diseño e implementación de endpoints REST para la interacción con el sistema a través de HTTP, facilitando así la integración con interfaces de usuario y otros sistemas.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express.js**: Framework para Node.js que facilita la creación de aplicaciones web y API.
- **MongoDB**: Base de datos NoSQL orientada a documentos, usada para almacenar los datos de la aplicación.

## Instalación

Para ejecutar este proyecto necesitas tener Node.js y MongoDB instalados en tu sistema.

1. Clona este repositorio
   ```
   git clone https://github.com/DiegoHerreraGre/2da-pre-entrega-backend
   ```
2. Navega al directorio del proyecto
   ```
   cd carrito-compras-backend
   ```
3. Instala las dependencias
   ```
   npm install
   ```
4. Configura las variables de entorno creando un archivo `.env` en el directorio raíz del proyecto y añade los siguientes valores:
   ```
   DATABASE_URL=mongodb://localhost/carritoCompras
   PORT=8080
   ```
5. Ejecuta el servidor
   ```
   npm start
   ```

El sistema ahora debería estar corriendo en `http://localhost:3000`.

## Documentación de API

La documentación detallada de los endpoints está disponible en `http://localhost:3000/api-docs` después de iniciar el servidor.

## Contribuyendo

Las contribuciones son siempre bienvenidas. Por favor, lee el `CONTRIBUTING.md` para ver el proceso para enviar pull requests.

## Licencia

Este proyecto está bajo la Licencia MIT. Ve el archivo `LICENSE` para más información.

```Python
def cuidado:
    print("Este proyecto todavía le falta configuraciones extra")

cuidado()
```
