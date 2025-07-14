# 🔍 Buscador de Usuarios de GitHub

Este proyecto es una aplicación web que permite buscar información de cualquier usuario en GitHub utilizando la API pública de GitHub. Al ingresar un nombre de usuario, se muestran datos como su avatar, nombre, bio, cantidad de repositorios, seguidores, y enlace a su perfil.

---

## ⚙️ Enfoque técnico

El enfoque técnico fue simple y directo:

- **HTML**: estructura de la página.
- **CSS**: estilos personalizados para la interfaz.
- **JavaScript (Vanilla)**:
  - Uso de `fetch()` para obtener datos desde `https://api.github.com/users/{usuario}`
  - Manejo de errores para cuando un usuario no existe y aviso de que se intente ingresar de nuevo.
  - Animación de Spinner al momento de buscar el usuario en la barra de buscqueda.
  - Interacción con el DOM para mostrar los datos obtenidos
  - If else cuando el perfil tiene blog se muestra el link y cuando no, se oculta en el display.
  - Diseño Responsivo. 
  - El boton de buscar funciona también al presionar "enter".

---

## 🖼️ Capturas de pantalla

### 🔎 Vista inicial
![Vista inicial](./img/Captura%201.png)

### 👤 Usuarios encontrados
![Usuario encontrado](./img/Captura%202.png)
![Usuario encontrado sin web](./img/Captura%203.png)

### 📱 Diseño Responsivo
![Diseño Responsivo](./img/Captura%204.png)


### 🖥️ Pasos de Instalación
Paso 1: Buscamos "Releases" y damos clic en "Version 1.0"
![captura](./img/Captura%205.png)
Paso 2: Damos clic en "GitHub User Finder.zip" para descagar el sitio web.
![captura](./img/Captura%206.png)
Paso 3: Nos vamos a "Descargas" en el explorador de archivos, le damos clic derecho a la carpeta descargada y lo descomprimimos. 
![captura](./img/Captura%207.png)
![captura](./img/Captura%208.png)
Paso 4: Ya dentro de la carpeta hacemos clic en "index" y ya tenemos abierto el sitio web. ¡Listo para usarse!
![captura](./img/Captura%201.png)
