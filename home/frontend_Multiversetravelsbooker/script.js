const btnHamburguer = document.getElementById('icon-hamburguer');
const navigation = document.querySelector('.menu');

var spanMenu = document.querySelector('.material-symbols-outlined')

btnHamburguer.addEventListener('click', openHamburguer);

function openHamburguer() {
  navigation.classList.toggle('active');
  if(spanMenu.innerHTML == "close"){
    spanMenu.innerHTML = "menu";
  }else{
    spanMenu.innerHTML = "close";
  }
}
