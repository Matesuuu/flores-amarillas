const audio = document.getElementById("miMusica");
const botonReiniciar = document.getElementById("botonReiniciar");
const botonPausa = document.getElementById("botonPausa");
const iconoPausa = document.getElementById("iconoPausa");
const iconoReproducir = document.getElementById("iconoReproducir");

botonReiniciar.addEventListener("click", function () {
  audio.currentTime = 0;
});

botonPausa.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    iconoPausa.style.display = "inline";
    iconoReproducir.style.display = "none";
  } else {
    audio.pause();
    iconoPausa.style.display = "none";
    iconoReproducir.style.display = "inline";
  }
});

audio.addEventListener("play", function () {
  iconoPausa.style.display = "inline";
  iconoReproducir.style.display = "none";
});

audio.addEventListener("pause", function () {
  iconoPausa.style.display = "none";
  iconoReproducir.style.display = "inline";
});
