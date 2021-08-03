// PRIMAL PATH MODAL

// Get the modal
var modal = document.getElementById("primalPathModal");

// Get the button that opens the modal
var btn = document.getElementById("primalPath");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// FERAL INSTINCT MODAL

// Get the modal
var modal2 = document.getElementById("feralInstinctModal");

// Get the button that opens the modal
var btn2 = document.getElementById("feralInstinct");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  switch (event.target.id) {
    case 'primalPathModal':
      modal.style.display="none";

    case 'feralInstinctModal':
      modal2.style.display="none";

    default:
      console.log('no match')
  }
}
