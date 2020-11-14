'use strict'


let modal = document.getElementById("modal") ;
let modalBtn = document.getElementById("openModal") ;
let closeBtn = document.getElementById("close") ;

modalBtn.onclick = function() {
    modal.style.display = "block"
};

closeBtn.onclick = function() {
    modal.style.display = "none";
  };

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
