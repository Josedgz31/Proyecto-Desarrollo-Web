/* ============================
   FUNCIÓN 1: CAMBIO DE TEMA
============================ */

// Seleccionamos el botón y el body
const btnTema = document.getElementById("btnTema");
const body = document.body;

// Evento para cambiar entre modo claro / oscuro
btnTema.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Cambiar el icono del botón
    btnTema.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});


/* ============================
   FUNCIÓN 2: VALIDACIÓN DEL FORMULARIO
============================ */

const form = document.getElementById("formContacto");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita que se envíe si hay errores

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    // Validaciones básicas
    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        alert("Ingrese un correo válido.");
        return;
    }

    if (mensaje.length < 10) {
        alert("El mensaje debe tener mínimo 10 caracteres.");
        return;
    }

    // Si todo está correcto
    alert("Mensaje enviado correctamente ✔");
    form.reset(); // limpia el formulario
});


