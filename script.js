//Constantes
const input = document.getElementById("barraBuscador");
const boton = document.getElementById("botonBusqueda");
const nombreUsuario = document.getElementById("nombreDeUsuario");
const bio = document.getElementById("bioUsuario");
const ubicacion = document.getElementById("ubicacionUsuario");
const repositorios = document.getElementsByClassName("repositorios");
const seguidores = document.getElementsByClassName("seguidores");
const siguiendo = document.getElementsByClassName("siguiendo");
const avatar = document.getElementById("avatar");
const nombreCompleto = document.getElementById("nombreCompletoUsuario");
const logins = document.getElementsByClassName("loginUsuario");
const creacion = document.getElementById("fechaDeCreacion");
const enlace = document.getElementById("enlaceUsuario");
const perfilUsuario = document.getElementById("perfilUsuario");
const noEncontrado = document.getElementById("noEncontrado");
const buscar = document.getElementById("buscar");
const lupa2 = document.getElementById("lupa2");
const spinner = document.getElementById("spinner");
const webSite = document.getElementById("enlaceWebsite");
const webSiteCont = document.getElementById('webCont');
//Funcion de boton habilitado/deshabilitado
input.addEventListener("input", () => {
  if (input.value.trim() !== "") {
    boton.disabled = false;
  } else {
    boton.disabled = true;
  }
});

// Guardar el input en 'username'
boton.addEventListener("click", () => {
  const username = input.value.trim();
  const url = `https://api.github.com/users/${username}`;

  // Spinner

  buscar.style.display = "none";
  lupa2.style.display = "none";
  spinner.style.display = "inline-block";

  // Solicitar la informacion de usuario
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Usuario no encontrado, intenta de nuevo");
      }
      return response.json();
    })
    .then((data) => {
      setTimeout(() => {
        console.log("Datos del usuario:", data);
        perfilUsuario.style.display = "block";
        noEncontrado.style.display = "none";

        const fecha = new Date(data.created_at);
        //Asignaciones
        avatar.src = data.avatar_url;
        nombreUsuario.textContent = data.name;
        logins[0].textContent = `@${data.login}`;
        logins[1].textContent = `@${data.login}`;
        bio.textContent = data.bio;
        ubicacion.textContent = `📍 ${
          data.location || "Ubicación no disponible"
        }`;
        creacion.textContent = `🗓️ Se unió el ${fecha.toLocaleDateString(
          "es-MX",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        )}`;
        repositorios[0].textContent = data.public_repos;
        repositorios[1].textContent = data.public_repos;
        seguidores[0].textContent = data.followers;
        seguidores[1].textContent = data.followers;
        siguiendo[0].textContent = data.following;
        siguiendo[1].textContent = data.following;
        nombreCompleto.textContent = data.name;
        if (data.blog) {
          webSite.style.display = "block";
          webSite.href = data.blog;
        } else {
        webSite.removeAttribute("href");
        webSite.style.display = "none";
        }
        enlace.href = data.html_url;
        buscar.style.display = "block";
        lupa2.style.display = "block";
        spinner.style.display = "";
      }, 1000);
    })
    .catch((error) => {
      setTimeout(() => {
        noEncontrado.style.display = "block";
        perfilUsuario.style.display = "none";
        buscar.style.display = "block";
        lupa2.style.display = "block";
        spinner.style.display = "";
        input.value = "";
      }, 1000);
    });
});

//Extras

// 'enter'
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    boton.click();
  }
});
