# Instagram challange
En el marco de un desafio para una entrevista laboral, se me solicitó desarrollar un clon de Instagram con los siguientes requisitos:
* Web responsive, se debe adaptar a diferentes pantallas.
* Al iniciar la aplicación debe traer la lista de publicaciones existentes y mostrarlas de forma vertical similar a instagram, permitiendo hacer scroll para ver las siguientes publicaciones.
* La aplicación debe mostrar un botón “+” que redirige a una página o abre un modal fullscreen para crear una nueva publicación. Dicha publicación requiere la URL a una imagen y un texto opcional.
* Se debe poder darle like a las publicaciones existentes desde un botón y debe incrementarse el contador “me gusta” debajo del botón.
* Una API que permita las siguientes operaciones:
  - Crear una publicación (Requiere la url a una imagen y un texto opcional).
  - Obtener la lista de publicaciones existentes. 
  - Incrementar los likes de una publicación.
* Posibilidad de cambiar el texto de la publicación.
* Al implementar el proyecto e iniciarlo, se crean automáticamente 3 publicaciones que se visualizan desde el primer acceso a la app.
* Posibilidad de que la aplicación permita subir y hostear imágenes y brinde la URL para utilizarla en las publicaciones.
* Posibilidad de crear publicaciones con videos además de imágenes. Al mostrar la publicación, debe mostrar el reproductor de vídeo permitiendo dar play y pausar.
* Guardar en base de datos las publicaciones.

## Indicaciones para inicializar el proyecto

1. Ejecutar el comando `npm i` en la carpeta *raiz* para instalar las dependecias requeridas para el funcionamiento del BackEnd, desarrollado con Node.JS y Express.JS
2. Ejecutar el comando `npm start` en la carpeta *raiz*, lo que inicilizara el BackEnd.
3. Ejecutar el comando `npm i` dentro de la carpeta *frontend* para instalar las dependecias requeridas para el funcionamiento del FrontEnd, desarrollado con React.JS.
4. Luego ejecutar el comando `npm start` dentro de la carpeta *frontend*, lo que inicializara el FrontEnd.

