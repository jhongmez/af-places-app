# Angular v15 con Firebase (firestore) 
## PlacesApp 📍

Este proyecto esta siendo generado con [Angular CLI]version 15.1.5 y con Firebase especificamente con Cloud Firestore.

## Tecnologías 🛠
<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/> <img src="	https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black"> <img src="	https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">

## Pre-requisitos ✅
* Debemos tener instalado NodeJs con version 16 o superior para poder trabajar con Angular v15
* Instalar firebase de manera global 
```
npm install -g firebase-tools
```
* Debemos de tener en cuenta que para hacer uso de esto debemos de tener un proyecto creado dentro del sitio web de **Firebase**

* Debemos de loguearnos en Firebase desde nuestra terminal con el comando
```
firebase login
```
* Concedemos los permisos necesarios y ya podemos acceder a los proyectos que tengamos creados dentro del sitio web desde nuestra terminal

## ¿Cómo usar Firebase?
```
firebase init
```
* Seleccionamos la opción de **FireStore** para lograr esto debemos hacerlo con las fechas y con la barra espaciadora
* Luego elegimos el proyecto al cual vamos acceder en este caso **gdi-place-app** (Ese fue el nombre del proyecto que cree en Firebase OJO)
* Procedemos a dar ENTER para crear los archivos rules, indexes y json de firebase
* Agregamos la librería @angular/fire para hacer uso de varias propiedades que necesitamos
```
ng add @angular/fire
```
* En esta nos sale una serie de opciones donde vamos a elegir de nuevo Firestore (utilizando las flechas y barra espaciadora)
* Seleccionamos la cuenta con la que estamos logueados
* Seleccionamos nuestro proyecto que en mi caso es **gdi-place-app**
* Aquí debemos de crear una nueva app en mi caso le asigne **places-web** (Aqui podemos tener diferentes APPs en un mismo proyecto)
* Con estas opciones el va modificar los siguientes archivos environments y app.module principal, Por que? porque creo las conexiones hacia la base de datos y los servicios que necesitamos