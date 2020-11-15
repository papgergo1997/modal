'use strict'


let modal = document.getElementById("modal") ;
let modalBtn = document.getElementById("openModal") ;
let closeBtn = document.getElementById("close") ;
let close2Btn = document.getElementById("close2");


modalBtn.onclick = function() {
    modal.style.display = "block";
    modal.classList.add("showModal");
};

closeBtn.onclick = function() {
    modal.style.display = "none";
};

close2Btn.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
