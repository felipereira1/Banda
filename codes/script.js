//"let" é uma variavel, "musica" é o nome que eu dei, "document.querySelector("audio")"; é usado para
//selecionar um elemento no html, podendo ser uma classe, ID, um tipo de elemento como <p>, etc...
   let musica = document.querySelector("audio");

document.querySelector(".play").addEventListener("click", playSong);
document.querySelector(".pause").addEventListener("click", stopSong);
document.querySelector('.pause').style.display = 'none';

function playSong() {
  musica.play();
  document.querySelector('.pause').style.display = 'block';
  document.querySelector('.play').style.display = 'none';
}

function stopSong() {
  musica.pause();
  document.querySelector('.pause').style.display = 'none';
  document.querySelector('.play').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.pause').style.display = 'none';
});