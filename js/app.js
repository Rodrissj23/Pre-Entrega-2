
class Usuario {
    constructor(id, nombre, edad, activo) {
      this.id = id;
      this.nombre = nombre;
      this.edad = edad;
      this.activo = activo;
    }
  }
  
  
  const esUsuarioValido = (usuario) => {
    if (!usuario || typeof usuario !== "object") {
      console.error("El dato proporcionado no es un objeto válido.");
      return false;
    }
    if (!usuario.nombre || typeof usuario.nombre !== "string") {
      console.error("El usuario debe tener un nombre válido.");
      return false;
    }
    if (!usuario.edad || typeof usuario.edad !== "number") {
      console.error("El usuario debe tener una edad válida.");
      return false;
    }
    return true;
  };
  
  
  let usuarios = [];
  
  
  const agregarUsuarios = () => {
    let cantidad = parseInt(prompt("¿Cuántos usuarios quieres agregar?"));
    if (isNaN(cantidad) || cantidad <= 0) {
      alert("Por favor, ingresa un número válido.");
      return;
    }
  
    for (let i = 0; i < cantidad; i++) {
      let id = usuarios.length + 1; // Generar ID único
      let nombre = prompt(`Ingresa el nombre del usuario ${id}:`);
      let edad = parseInt(prompt(`Ingresa la edad de ${nombre}:`));
      let activo = prompt(`¿Está activo ${nombre}? (sí/no):`).toLowerCase() === "sí";
  
      const nuevoUsuario = new Usuario(id, nombre, edad, activo);
  
      if (esUsuarioValido(nuevoUsuario)) {
        usuarios.push(nuevoUsuario);
      } else {
        alert(`El usuario ${nombre} no es válido y no se agregó.`);
      }
    }
  
    alert("Usuarios agregados correctamente.");
  };
  
 
  const buscarUsuarioPorId = () => {
    let idBuscado = prompt("Ingresa el ID del usuario que deseas buscar:");
    if (isNaN(idBuscado) || idBuscado === null || idBuscado.trim() === "") {
      alert("Por favor, ingresa un número válido para el ID.");
      return;
    }
  
    idBuscado = parseInt(idBuscado);
    const usuarioConId = usuarios.find((usuario) => usuario.id === idBuscado);
  
    if (usuarioConId) {
      alert(`Usuario encontrado:
      - Nombre: ${usuarioConId.nombre}
      - Edad: ${usuarioConId.edad}
      - Activo: ${usuarioConId.activo ? "Sí" : "No"}`);
    } else {
      alert("No se encontró un usuario con ese ID.");
    }
  };
  
 
  const listarUsuarios = () => {
    if (usuarios.length === 0) {
      alert("No hay usuarios registrados.");
      return;
    }
  
    usuarios.forEach((usuario) => {
      alert(`Usuario:
      - ID: ${usuario.id}
      - Nombre: ${usuario.nombre}
      - Edad: ${usuario.edad}
      - Activo: ${usuario.activo ? "Sí" : "No"}`);
    });
  };
  
  
  const menu = () => {
    let opcion;
    do {
      opcion = prompt(`Selecciona una opción:
      1. Agregar usuarios
      2. Buscar usuario por ID
      3. Listar todos los usuarios
      4. Salir`);
  
      switch (opcion) {
        case "1":
          agregarUsuarios();
          break;
        case "2":
          buscarUsuarioPorId();
          break;
        case "3":
          listarUsuarios();
          break;
        case "4":
          alert("¡Gracias por usar el sistema!");
          break;
        default:
          alert("Por favor, selecciona una opción válida.");
      }
    } while (opcion !== "4");
  };
  
  
  document.getElementById("iniciarPrograma").addEventListener("click", () => {
    menu();
  });
  