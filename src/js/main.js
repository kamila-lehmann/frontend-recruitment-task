const modal = document.getElementById("modal");
const btn = document.getElementById("btn");
const span = document.getElementById("close");

let counter = 0;

// Open the modal when user clicks a button
btn.onclick = () => {
  modal.style.display = "block";
  if (counter > 5) {
    console.log(`You clicked ${counter} times`);
  } else { 
    counter++;
    console.log(`You clicked ${counter} times`);
  }
}

// Close the modal when user clicks "X"
span.onclick = () => {
  modal.style.display = "none";
}

// Close the modal when user clicks anywhere
window.onclick = (e) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}