document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inscripcionForm");

  form.addEventListener("submit", (event) => {
    const password = document.getElementById("password").value;
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const lenguaje = document.getElementById("lenguaje").value;
    const motivacion = document.getElementById("motivacion").value;

    if (password.length < 8) {
      event.preventDefault();
      alert("Error: La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    event.preventDefault();

    console.log(`¡Bienvenido/a, ${nombre}!`);
    console.log(`Email de contacto: ${email}`);
    console.log(`Lenguaje favorito registrado: ${lenguaje}`);
    if (motivacion) {
      console.log(`Tu motivación para el curso: "${motivacion}"`);
    } else {
      console.log("No has dejado comentarios sobre tu motivación.");
    }
    console.log(
      "Validación superada. Los datos ahora podrían ser enviados al servidor.",
    );
  });
});
