# Proyecto RSS

Este proyecto consta de dos partes: un cliente web llamado "rss-feed" y un servidor llamado "rss-server". Ambos deben iniciarse por separado pero simultáneamente para que la aplicación funcione correctamente.

## RSS-Feed

La carpeta "rss-feed" contiene el cliente web desarrollado utilizando React y Vite. El cliente web muestra los feeds RSS en una interfaz de usuario interactiva.

### Configuración

Asegúrese de tener Node.js instalado en su sistema antes de continuar. Luego, siga estos pasos para configurar y ejecutar el cliente web:

1. Navegue a la carpeta "rss-feed" en la terminal (cd/rss-feed)
2. Ejecute el siguiente comando para instalar las dependencias:

   ```bash
   npm install

3. Inicie la aplicación con el siguiente comando:

    ```bash
    npm start

La aplicación se iniciará en el puerto que indica Vite (generalmente en http://localhost:3000).

## RSS-Server

La carpeta "rss-server" contiene el servidor de Node.js que analiza los feeds RSS y proporciona datos al cliente web.

### Configuración

Siga estos pasos para configurar y ejecutar el servidor:

1. Navegue a la carpeta "rss-server" en la terminal (cd/rss-server)
2. Ejecute el siguiente comando para instalar las dependencias:

   ```bash
   npm install

3. Inicie la aplicación con el siguiente comando:

    ```bash
    npm start

El servidor se iniciará en el puerto 4000 (http://localhost:4000).

## Uso simultáneo
Asegúrese de que tanto el cliente web como el servidor estén en funcionamiento para utilizar la aplicación de manera efectiva. El cliente web se ejecutará en un puerto diferente al servidor (por defecto, el puerto 3000 para el cliente y el puerto 4000 para el servidor).
