# 🎮 LoLBuilds - Quickset

**Proyecto Intermodular - Ciclo formativo de Desarrollo de Aplicaciones Multiplataforma (DAM)**  
**Realizado por: Luis Enrique Juan Ferrer**

---

## 🧑‍💻 Tecnologías

![Spring Boot](https://img.shields.io/badge/Backend-SpringBoot-green?logo=spring)
![Java](https://img.shields.io/badge/Language-Java-red?logo=openjdk)
![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?logo=typescript)
![Firebase](https://img.shields.io/badge/Database-Firebase-yellow?logo=firebase)
![Docker](https://img.shields.io/badge/Deploy-Docker-blue?logo=docker)

---

## 📌 Introducción

Este proyecto nace en el contexto del ciclo formativo de **Desarrollo de Aplicaciones Multiplataforma (DAM)** como una propuesta para el último trimestre de la asignatura **Proyecto Intermodular**, con el objetivo de demostrar la capacidad de crear un programa o página web de principio a fin. Para ello nos han dado entre mes y medio y dos meses para realizarlo.

El objetivo principal es consolidar lo ya aprendido en los dos primeros trimestres del curso, o ir más allá y aprender nuevas tecnologías o lenguajes de programación que resulten interesantes. Personalmente, he querido utilizar los frameworks y lenguajes utilizados en mis prácticas en empresa (**Java Spring Boot** y **React TypeScript**), y me he aventurado a conocer **Docker** y **Firebase**. 

En este proyecto he consolidado conocimientos en arquitectura cliente-servidor, consumo de APIs externas, gestión de entornos y despliegue, aplicando buenas prácticas de programación y control de versiones.

---

## 🧠 Resumen del proyecto

**LoLBuilds (Quickset)** es una aplicación web que permite a la comunidad de _League of Legends_ crear, personalizar y compartir builds de campeones mediante archivos **JSON**. Utiliza la **API oficial de Riot Games** para obtener datos en tiempo real sobre campeones y objetos.

Está dividido en dos módulos:

- 🧩 **Frontend**: React + TypeScript
- 🧩 **Backend**: Servidor Spring Boot + Firebase

---

## 📷 Capturas de Pantalla

### 🏠 Página de Inicio

![Página principal](assets/homepage.png)

---

### 🛠 Editor de Builds

![Editor de builds](assets/makeabuild-page.png)

---

### 🎯 Filtro de Objetos dentro del Editor

![Filtro de items](assets/filtering-items.png)

### ℹ️ Página "About"

![Página About](assets/aboutpage.png)

## 🎯 Objetivos del Proyecto

- 🖥 Crear una interfaz visual, intuitiva y dinámica para gestionar builds.
- 🔄 Automatizar la sincronización con la API de Riot Games.
- 🧬 Permitir la exportación e importación de builds en formato JSON.
- 📦 Desarrollar una arquitectura preparada para contenedores (Docker).

---

## 🧱 Estructura del Repositorio

Este repositorio contenedor enlaza dos submódulos:

| Módulo   | Repositorio                                                             |
| -------- | ----------------------------------------------------------------------- |
| Frontend | [lol-builds-ui](https://github.com/luisenriquejuanferrer/lol-builds-ui) |
| Backend  | [lol-builds](https://github.com/luisenriquejuanferrer/lol-builds)       |

```bash
quickset/
├── frontend/    # Interfaz web (React + Vite + TypeScript)
├── backend/     # API REST (Spring Boot + Firebase)
├── assets/      # Assets needed for README.md
└── README.md
```
