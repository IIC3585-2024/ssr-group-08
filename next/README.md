# Proyecto de Recomendaciones de Series

## Descripción del Proyecto

Este proyecto tiene como objetivo experimentar con frameworks que soportan tanto CSR como SSR a través del desarrollo de una aplicación web relativamente sencilla. La aplicación permite a los usuarios compartir y recomendar series disponibles en servicios de streaming.

## Funcionalidades Implementadas

- **Autenticación**: Los usuarios pueden registrarse e iniciar sesión utilizando `AuthJSON Server`.
- **CRUD de Series**: Los usuarios pueden agregar nuevas series, pedir recomendaciones por categoría, servicio de streaming, y número mínimo de estrellas.
- **Comentarios y Calificaciones**: Los usuarios pueden agregar comentarios y calificaciones a las series.
- **Reactividad**: Aunque la aplicación no se actualiza en tiempo real al agregar nuevos datos, se puede actualizar la página para ver los cambios.  
  Para pedir recomendaciones por categoría, servicio, número mínimo de estrellas a través de los filtros, agregar nuevas series y agregar comentarios y rating es necesario que el usuario haya iniciado sesión

## Configuración del Proyecto

### 1. Instalar Dependencias

Asegúrate de estar en la carpeta raíz del proyecto y luego instala las dependencias para `next` y `StubServer`.

```bash
cd next
npm install
```

2. Iniciar el JSON Server y AuthJSON Server

JSON Server y AuthJSON Server se utilizan para simular un backend. Corre el siguiente comando para iniciar el servidor en el puerto 3001:

`npm run json-server`

Esto levantará un servidor que utiliza db.json como base de datos. Asegúrate de detener y reiniciar este servidor cada vez que modifiques db.
json manualmente.

3. Iniciar el Proyecto Next.js

```bash
cd next
npm run dev
```

Esto levantará el frontend en el puerto 3000 y se conectará al backend en el puerto 3001.

Detalles de Implementación

    •	Server Components: Utilizados en la mayoría de las vistas para aprovechar SSR.
    •	Client Components: Utilizados principalmente en formularios, excepto en el login y signup que también son SSR.
    •	Autenticación: Implementada usando cookies para almacenar un token que contiene solo el ID del usuario por simplicidad.

Notas Importantes

    •	Cada vez que se agregan nuevos datos, la página debe actualizarse manualmente para reflejar los cambios.
    •	La base de datos inicial se encuentra en StubServer/db.json y puede ser modificada manualmente. Después de cualquier modificación, el servidor debe ser reiniciado.
    •	La autenticación es simplificada y solo utiliza el ID del usuario en el token.

Con estos pasos y notas, podrás configurar y correr el proyecto de recomendaciones de series, experimentando tanto con CSR como con SSR.
