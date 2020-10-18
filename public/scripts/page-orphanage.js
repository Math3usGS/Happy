const options = {
  dragging: false,
  touchZoom: false,
  doubleclickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//pegando valores do html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const long = document.querySelector('span[data-long]').dataset.long;

//criando o mapa
const map = L.map("mapid", options).setView([lat, long], 15);

//criando e adicionando a camada que recebe o mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//criando o ícone
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//criando e adicionando um marcador
L.marker([lat, long], { icon }).addTo(map);

/* image gallery*/
function selectImage(event) {
  const button = event.currentTarget;
  //remover todas as classes active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  //selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  //atualizar o container de imagem
  imageContainer.src = image.src;

  //adicionar a classe active para esse botão que foi clicado
  button.classList.add('active');
}
