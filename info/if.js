const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});
function clickBolo1(){
  window.location.replace("index2.html");
}
function clickBolo2(){
  window.location.replace("index3.html");
}
function clickBolo3(){
  window.location.replace("index4.html");
}
function clickBolo4(){
  window.location.replace("index5.html");
}
function clickBolo5(){
  window.location.replace("index6.html");
}
function clickBolo6(){
  window.location.replace("index7.html");
}
function clickBolo7(){
  window.location.replace("index9.html");
}
function clickBolo8(){
  window.location.replace("index10.html");
}
function clickBolo9(){
  window.location.replace("index11.html");
}
function clickBolo10(){
  window.location.replace("index12.html");
}
function clickBolo11(){
  window.location.replace("index13.html");
}
function clickBolo12(){
  window.location.replace("index14.html");
}
function clickBolo13(){
  window.location.replace("index15.html");
}
function clickBolo14(){
  window.location.replace("index16.html");
}
function clickBolo15(){
  window.location.replace("index17.html");
}

function irParaCardapio(){
  window.location.replace("index/indexcard.html");
}



function moreOption1(){
  const moreOptions = document.querySelector('.botaoMais');
  moreOptions.style.display = 'none';
  const container = document.querySelector('.containerini2');
  const galeria2 = document.querySelector('.galeria2');
  galeria2.style.display = 'grid';
  container.style.display = 'flex';
} 
function animacaoCard(){
  const animationCard = document.getElementById("cardAnimado");
  setTimeout(() => {
    animationCard.classList.remove("animate__headShake");
  }, 1000);
}

function personalizado(){
  window.location.replace("index8.html");
}