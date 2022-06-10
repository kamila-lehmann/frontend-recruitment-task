const modal = document.getElementById("modal");
const modalContent = document.getElementsByClassName("modal-content")[0];
const btn = document.getElementById("btn");
const span = document.getElementById("close");
const displayCounter = document.getElementsByClassName("counter")[0];
const resetBtn = document.getElementById("btn-reset");

// Store click count in sessionStorage, reset it when Reset button is clicked
function countClicks() {
  if (typeof(Storage) !== "undefined") {
    if (sessionStorage.count) {
      sessionStorage.count = Number(sessionStorage.count)+1;
    } else {
        sessionStorage.count = 1;
    }
    displayCounter.innerHTML = sessionStorage.count;
    if (sessionStorage.count >= 5) {
      resetBtn.style.opacity = 1;
      resetBtn.addEventListener("click", () => {
        sessionStorage.count = 0;
        //count = 0;
        modal.style.display = "none";
      });
    } else {
      resetBtn.style.opacity = 0;
    }
  }
}

// Open the modal when user clicks a button and count clicks
btn.onclick = () => {
  modal.style.display = "block";
  countClicks();
}

// Close the modal when user clicks "X"
span.onclick = () => {
  modal.style.display = "none";
}

// Close the modal when user clicks anywhere
window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}