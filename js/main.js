function mostrarMensaje(event) {
  const mensaje = document.getElementById("mensajeExito");
  mensaje.classList.remove("d-none");

  // Opcional: limpiar formulario
  event.target.reset();
}
