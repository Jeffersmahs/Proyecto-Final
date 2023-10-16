
# APP Notes

APP Notes es una aplicación diseñada para ayudar a los usuarios a crear, actualizar y borrar notas de manera eficiente. Esta aplicación proporciona a cada usuario un espacio personalizado donde pueden administrar sus anotaciones, lo que facilita el almacenamiento y el acceso a la información importante.

La aplicación fue desarrollada utilizando Node.js para el backend y React.js para el frontend, lo que garantiza una navegación rápida y fluida. Entre las características destacadas de la aplicación se incluyen la autenticación de usuarios, la creación de múltiples notas con infinidad de caracteres y un título para identificarlas, y la capacidad de editar y eliminar notas según sea necesario.

APP Notes está dirigida a cualquier persona que necesite un lugar confiable para guardar y acceder a sus anotaciones. Resuelve el problema común de recordar información en un mundo en constante desarrollo, proporcionando un espacio dedicado para almacenar y recuperar información importante.
## Dependencias


NECESARIO TENER INSTALADO NODE JS  y MONGOOSE! 


# Back-end

-   bcryptjs V--2.4.3
-   cookie-parser V--1.4.6
-   cors V--2.8.5
-   dotenv V--16.3.1
-   express V--4.18.2
-   jsonwebtoken V--9.0.1
-    mongoose V--7.4.4

Dependencia de desarollo BACKEND 

-   nodemon V--3.0.1

#Front-end

-  react (con vite)
-  bootstrap





## Instalacion

Instala APP Notes con Git Clone

Añade esto en tu consola.

```bash
git clone https://github.com/3DWARDRG/Notes_FullStack_MERN.git
```
## Instalacion de dependencias

Dependencias del Backend

(Fijate que estes en la carpeta correcta de el  backendo o el frontend para ) 


Utiliza el siguiente comando en tu consola

```bash
  npm i 
```
Se instalaran todas las dependencias necesarias.
## Correr localmente

Primero tienes que arrancar Mongose


En tu consola ejecuta el siguiente comando:

```bash
  mongod
```

Ir al directorio Backend del proyecto

- Iniciar el servidor backend

```bash
  npm run dev
```

+ Con la base datos corriendo

!HORA DE CORRER EL FRONTEND  Y VER QUE TAL!

Ir al directorio Frontend_ del proyecto

- Iniciar el servidor Vite del Frontend

```bash
  npm run dev
```





## Variables de Entorno

Backend

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env para el backend

+ Direccion del backend

`APP_HOST`

+ Puerto en el que se ejecuta el backend

`PORT`

+ Nombre de la base de datos donde se creara la informacion

`APP_DATABASE`

+ Variable para encriptar los tokens de autenticacion

`TOKEN_PASS`

+ Variable para permitir comunicacion del frontend (Direccion completa  http/PORT)

`DIRECTION_VITE`

Frontend

+ Variable que proporciona la direccion del backend

`VITE_URL_BACKEND`








## Authors

+ Edward Rodriguez

- Github[@3DWARDRG](https://github.com/3DWARDRG)
- LinkedIn [@edwardjr](www.linkedin.com/in/edwardjr)

+Jefferson Garcia

- Github[@Jeffersmahs](https://github.com/Jeffersmahs)
- LinkedIn [@jefferson-garcia-tique](https://co.linkedin.com/in/jefferson-garcia-tique-62599b256)

+ Jenny Montero

- Github[@JennyMontero](https://github.com/JennyAstridMontero)
- LinkedIn [@ Jenny Montero](www.linkedin.com/in/)

+ Julian Hernandez

- Github[@JulianHernandez](https://github.com/)
- LinkedIn [@JulianHernandez](www.linkedin.com/in/)

