'use strict'


let modal = document.querySelector('.section__modal') ;
let modalBtn = document.querySelector('.modal__button') ;
let closeBtn = document.querySelector('.close') ;
let closeBtn2 = document.querySelector('.close2') ;


modalBtn.onclick = function() {
    modal.style.display = "block";
    modal.classList.add("showModal");
};

closeBtn.onclick = function() {
    modal.style.display = "none";
};
closeBtn2.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
