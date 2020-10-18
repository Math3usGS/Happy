//criando o mapa
const map = L.map("mapid").setView([-22.2508414, -45.7024668], 15);

//criando e adicionando a camada que recebe o mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//criando o ícone
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({ id, name, lat, long }) {
  //criando popup
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>`
  );

  //criando e adicionando um marcador
  L.marker([lat, long], { icon }).addTo(map).bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll(".orphanages span");

orphanagesSpan.forEach((span) => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    long: span.dataset.long,
  };

  addMarker(orphanage);
});
