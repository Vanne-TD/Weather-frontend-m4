// ===============================
// HOME: GENERAR CARDS DINÁMICAMENTE
// ===============================
const contenedorCards = document.getElementById("contenedor-cards");

if (contenedorCards && typeof lugares !== "undefined") {
  renderCards(lugares);
}

function renderCards(lista) {
  contenedorCards.innerHTML = "";

  lista.forEach(lugar => {
    contenedorCards.innerHTML += `
      <div class="col-12 col-md-6 col-lg-3">
        <article class="card h-100 weather-card weather-card--bg text-light text-center shadow-sm">
          <div class="card-body p-4 d-flex flex-column">

            <h2 class="h4 mb-0">${lugar.nombre}</h2>

            <p class="weather-card__temp-display my-3">
              ${lugar.tempActual}°C
              <img src="${lugar.icono}" alt="Icono clima" class="weather-card__icon">
            </p>

            <p>Sensación: <strong class="weather-card__temp">${lugar.sensacion}°C</strong></p>

            <p class="h5 fw-bold text-dark">${lugar.estadoActual}</p>

            <div class="mt-auto pt-3">
              <a href="detalles.html?id=${lugar.id}" class="btn weather-card__button text-white w-75">
                Ver más
              </a>
            </div>

          </div>
        </article>
      </div>
    `;
  });
}
