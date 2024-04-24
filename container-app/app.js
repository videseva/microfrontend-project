
// Declarar las rutas de los micro frontends
const angularMicrofrontendUrl = 'http://localhost:4200'; 
const reactMicrofrontendUrl = 'http://localhost:3000'; 

function cargarVistaAngular() {
  const contenedorAngular = document.getElementById('contenedorAngular');
  contenedorAngular.innerHTML = ''; 
  const iframe = document.createElement('iframe');
  iframe.src = angularMicrofrontendUrl; 
  // Establecer estilos en línea para el iframe
  iframe.style.width = '100%'; // Ancho al 100% del contenedor
  iframe.style.height = '600px'; // Altura de 600px (puedes ajustar este valor)
  iframe.style.border = 'none'; // Sin borde alrededor del iframe
 
  contenedorAngular.appendChild(iframe);
}

// Asociar la función cargarVistaAngular al evento clic del botón
const botonRegistrar = document.getElementById('botonRegistrar');
botonRegistrar.addEventListener('click', cargarVistaAngular);

function cargarVistaReact() {
    const contenedorReact = document.getElementById('contenedorReact');
    contenedorReact.innerHTML = ''; 
    const iframe = document.createElement('iframe');
    iframe.src = reactMicrofrontendUrl; 
     // Establecer estilos en línea para el iframe
  iframe.style.width = '100%'; // Ancho al 100% del contenedor
  iframe.style.height = '600px'; // Altura de 600px (puedes ajustar este valor)
  iframe.style.border = 'none'; // Sin borde alrededor del iframe
    contenedorReact.appendChild(iframe);
  }
  