document.addEventListener("DOMContentLoaded", () => {


// ===============================
// OBTENER ID DESDE LA URL
// ===============================
const params = new URLSearchParams(window.location.search);
const idLugar = parseInt(params.get("id"));

// ===============================
// BUSCAR LUGAR POR ID
// ===============================
function obtenerLugarPorId(id) {
  return lugares.find(lugar => lugar.id === id);
}

const lugar = obtenerLugarPorId(idLugar);

// ===============================
// RELLENAR CARD PRINCIPAL
// ===============================
if (lugar) {
  document.getElementById("detalle-nombre").textContent = lugar.nombre;
  document.getElementById("detalle-temp").textContent = `${lugar.tempActual}°C`;
  document.getElementById("detalle-icono").src = lugar.icono;
  document.getElementById("detalle-sensacion").textContent = `${lugar.sensacion}°C`;
  document.getElementById("detalle-viento").textContent = lugar.viento;
  document.getElementById("detalle-humedad").textContent = lugar.humedad;
}

// ===============================
// PRONÓSTICO SEMANAL
// ===============================
const contenedorPronostico = document.getElementById("pronostico-semanal");

function iconoPorEstado(estado) {
  const iconos = {
    "Soleado": "🌞",
    "Parcial": "⛅",
    "Nublado": "☁️",
    "Lluvia": "🌧️",
    "Viento": "💨"
  };
  return iconos[estado] || "⛅";
}

if (contenedorPronostico && lugar) {
  contenedorPronostico.innerHTML = "";

  lugar.pronosticoSemanal.forEach(dia => {
    contenedorPronostico.innerHTML += `
      <div class="col-12 col-md-4 col-lg-1">
        <article class="weather-weekly__day text-center">
          <p class="fw-bold mb-1 small">${dia.dia}</p>
          <span class="fs-3">${iconoPorEstado(dia.estado)}</span>
          <p class="small mb-0 mt-2">${dia.max}° / ${dia.min}°</p>
        </article>
      </div>
    `;
  });
}

// ===============================
// ESTADÍSTICAS
// ===============================
function calcularEstadisticas(pronostico) {
  const max = Math.max(...pronostico.map(d => d.max));
  const min = Math.min(...pronostico.map(d => d.min));
  const promedio = (
    pronostico.reduce((acc, d) => acc + d.max, 0) / pronostico.length
  ).toFixed(1);

  return { max, min, promedio };
}

const stats = calcularEstadisticas(lugar.pronosticoSemanal);

// ===============================
// MOSTRAR ESTADÍSTICAS
// ===============================
document.getElementById("stats-max").textContent = `Máxima semanal: ${stats.max}°C`;
document.getElementById("stats-min").textContent = `Mínima semanal: ${stats.min}°C`;
document.getElementById("stats-prom").textContent = `Promedio semanal: ${stats.promedio}°C`;

// ===============================
// RESUMEN TEXTUAL
// ===============================
const resumen = `
  Esta semana en ${lugar.nombre} tendremos temperaturas entre ${stats.min}°C y ${stats.max}°C,
  con un promedio de ${stats.promedio}°C.
`;

document.getElementById("resumen-clima").textContent = resumen;

});