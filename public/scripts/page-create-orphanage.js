//criando o mapa
const map = L.map("mapid").setView([-22.2508414, -45.7024668], 15);

//criando e adicionando a camada que recebe o mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//criando o ícone
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//criando e adicionando um marcador
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const long = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=long]").value = long;

  // remover o ícone
  marker && map.removeLayer(marker);

  //adicionar ícone ao marker
  marker = L.marker([lat, long], { icon }).addTo(map);
});

//adicionar o campo de fotos
function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector("#images");
  // pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  // verificar se o campo está vazio, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  //limpa o campo antes de adicionar ao container de imagens
  input.value = "";
  // adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o campo
  span.parentNode.remove();
}

//selecionar o botão sim e não
function toggleSelect(event) {
  // retirar a classe active dos botões
  document.querySelectorAll(".button-select button").forEach((button) => {
    button.classList.remove("active");
  });

  // colocar a classe active no botão clicado
  const button = event.currentTarget;
  button.classList.add("active");

  // atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');
  //verificar se sim ou não
  input.value = button.dataset.value;
}
