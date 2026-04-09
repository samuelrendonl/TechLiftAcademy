function enviarFormulario(event) {
  event.preventDefault();

  const form = event.target;

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        // 🔥 REDIRECCIÓN SEGURA
        window.location.replace("gracias.html");
      } else {
        alert("Error al enviar");
      }
    })
    .catch(() => {
      alert("Error de conexión");
    });
}
