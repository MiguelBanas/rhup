let imagem = document.getElementById("imagemLogo");

function inicializar() {
  imagem.style.transition = "5s";
  imagem.style.opacity = "40%";
  setInterval(() => {
    escurecer();
  }, 5000);
}

function escurecer() {
  imagem.style.transition = "5s";
  (imagem.style.opacity = "100%"),
    setInterval(() => {
      inicializar();
    }, 5000);
}
