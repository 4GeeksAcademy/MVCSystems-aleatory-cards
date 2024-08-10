window.onload = function() {
  setInterval(generateCard, 10000);

  generateCard();
  document.getElementById("btnGenerar").addEventListener("click", generateCard);

  document
    .getElementById("widthInput")
    .addEventListener("input", updateCardSize);
  document
    .getElementById("heightInput")
    .addEventListener("input", updateCardSize);
};

function generateCard() {
  const iconos = ["spade", "club", "heart", "diamond"];
  const icono = iconos[Math.floor(Math.random() * iconos.length)];
  const numero = Math.floor(Math.random() * 13);

  const card = document.getElementById("card");
  card.className = `card ${icono}`;
  card.innerHTML = `
      <div class="card-title">${getSuitSymbol(icono)}</div>
      <div class="card-body">
        <div class="card-number">${getCardNumero(numero)}</div>
      </div>
      <div class="card-footer">${getSuitSymbol(icono)}</div>
  `;
}

function getCardNumero(numeroaleatorio) {
  const numero = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  return numero[numeroaleatorio];
}

function getSuitSymbol(icono) {
  switch (icono) {
    case "spade":
      return "♠";
    case "club":
      return "♣";
    case "heart":
      return "♥";
    case "diamond":
      return "♦";
  }
}

function updateCardSize() {
  const card = document.getElementById("card");
  const width = document.getElementById("widthInput").value;
  const height = document.getElementById("heightInput").value;

  card.style.width = width ? `${width}px` : "";
  card.style.height = height ? `${height}px` : "";
}
