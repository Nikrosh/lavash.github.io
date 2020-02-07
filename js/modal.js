var modal = document.querySelector('.modal');
var openModalOne = document.querySelector('.opnOne');
var openModalTwo = document.querySelector('.opnTwo');
var openModalTree = document.querySelector('.opnTree');
var openModalFour = document.querySelector('.opnFour');
var openModalFive = document.querySelector('.opnFive');
var openModalSix = document.querySelector('.opnSix');
var closeModal = document.querySelector('.close-button');

openModalOne.onclick = function () {
  modal.style.display = "block";
}

openModalTwo.onclick = function () {
  modal.style.display = "block";
}

openModalTree.onclick = function () {
  modal.style.display = "block";
}

openModalFour.onclick = function () {
  modal.style.display = "block";
}

openModalFive.onclick = function () {
  modal.style.display = "block";
}

openModalSix.onclick = function () {
  modal.style.display = "block";
}

closeModal.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
