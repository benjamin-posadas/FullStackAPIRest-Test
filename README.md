## FullStackAPIRest-Test
Parte correspondiente de APIRest para la aplicación de bitcoin 
# Prueba: FullStack (APIRest)
# Codigo del la API REST implementada en el dashboard.

Este proyecto esta desarrollado en NODE.js 

#NOTA IMPORTANTE: la base de datos utilizada en este proyecto es MongoBD, se útilizo el servicio 'Atlas' que permite
tener la base de datos en la nube, el proyecto contiene un archivo llamado "db.js" este se localiza dentro de la carpeta de
scripts, dentro de ese archivo se encuentra la cadena de conexión en la cual encontraran las etiquetas <usuario> y <password>
es necesario que creen una cuenta en MongoDB Atlas y pongan los datos necesarios en esa sección antes de correr el servidor.

#El proyecto se se encuentra alojado en una máquina virtual proporcionada por los servicios de AWS, por lo cual no es necesario
ejecutar el servidor para poder probar la parte del dashboard.

La instalación es como lo indica la sección de abajo.

## Build Setup

> A NODE.js project

#Nota: este servidor y el servidor ejecutado por el código del dashboard tienen la indicación de ejecutarse en el puerto 8080,
es necesario cambiar el puerto de este servidor e indicarlo en el código del dashboard en caso de que se quieran probar los
dos proyectos trabajando juntos.

``` bash
# install dependencies
npm install

# serve running at localhost:8080
node index.js
