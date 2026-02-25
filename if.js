const menuToggle = document.querySelector('.hamburger');
const navbar = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  const isClickInside = navbar.contains(event.target) || menuToggle.contains(event.target);

  if (!isClickInside) {
    navbar.classList.remove('active');
  }
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
function clickBolo16(){
  window.location.replace("index18.html");
}
function clickBolo17(){
  window.location.replace("folders/index9.html");
}
function clickBolo18(){
  window.location.replace("folders/index3.html");
}
function clickBolo19(){
  window.location.replace("folders/index2.html");
}
function clickBolo20(){
  window.location.replace("folders/index5.html");
}
function clickBolo21(){
  window.location.replace("folders/index10.html");
}
function clickBolo22(){
  window.location.replace("folders/index7.html");
}
function clickBolo23(){
  window.location.replace("folders/index16.html");
}
function clickBolo24(){
  window.location.replace("folders/index17.html");
}
function clickBolo25(){
  window.location.replace("folders/index14.html");
}
function clickBolo26(){
  window.location.replace("folders/index18.html");
}
function clickBolo27(){
  window.location.replace("folders/index4.html");
}
function clickBolo28(){
  window.location.replace("folders/index11.html");
}
function clickBolo29(){
  window.location.replace("folders/index15.html");
}
function clickBolo30(){
  window.location.replace("folders/index13.html");
}
function clickBolo31(){
  window.location.replace("folders/index26.html");
}
function clickBolo32(){
  window.location.replace("folders/index26.html");
}




function irParaInfantil(){
  window.location.replace("index19.html");
}

function irParaReligiosos(){
  window.location.replace("index20.html");
}
function irParaFlores(){
  window.location.replace("index21.html");
}
function irParaVintage(){
  window.location.replace("index22.html");
}
function irParaGanacheLeite(){
  window.location.replace("index23.html");
}
function irParaGanacheLivre(){
  window.location.replace("index24.html");
}
function irParaChantininho(){
  window.location.replace("index25.html");
}

function irParaCardapio(){
  window.location.replace("folders/indexcard.html");
}

function personalizado(){
  window.location.replace("personali.html");
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
