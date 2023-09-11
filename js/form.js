document.getElementById("formularioMagia").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores de los campos de formulario
    const nombre = document.getElementById("nombreapellido").value;
    const correo = document.getElementById("correoelectronico").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("contraseña").value;
    const selectElement = document.getElementById("horarios");
const selectedOption = selectElement.options[selectElement.selectedIndex];
const selectedValue = selectedOption.value;
const selectedText = selectedOption.text;
    

    // Construir el enlace de WhatsApp
    const enlaceWhatsApp = `https://wa.me/5493516643787/?text=Nombre:%20${encodeURIComponent(nombre)}%0ACorreo:%20${encodeURIComponent(correo)}%0ATeléfono:%20${encodeURIComponent(telefono)}%0AMensaje:%20${encodeURIComponent(mensaje)}%0AHorario:%20${encodeURIComponent(selectedText)}`;

    // Redireccionar al enlace de WhatsApp
    window.location.href = enlaceWhatsApp;
    console.log(enlaceWhatsApp)
  });