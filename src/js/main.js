const modal = document.getElementById("modal");
const modalContent = document.getElementsByClassName("modal-content")[0];
const btn = document.getElementById("btn");
const span = document.getElementById("close");
const displayCounter = document.getElementsByClassName("counter")[0];
const resetBtn = document.getElementById("btn-reset");
const loading = document.getElementsByClassName("loading")[0];
const tableData = document.getElementsByClassName("table-data")[0];

// Generate table data
function generateTableData(data) {
  const users = data;

  if (users.length == 0) {
    loading.style.display = "block";
    tableData.style.display = "none";
  } else {
    loading.style.display = "none";

    for (let i = 0; i < users.length; i++) {
      const tableBody = document.querySelector("tbody");
      const row = document.createElement("tr");

      const usersData = `
        <td>${users[i].name}</td>
        <td>${users[i].email}</td>
        <td>${users[i].address.suite} ${users[i].address.street}, ${users[i].address.city}</td>
        <td>${users[i].phone}</td>
        <td>${users[i].company.name}</td>
      `;
      row.innerHTML = usersData;
      tableBody.appendChild(row);
    }
  }
}

// Fetch data from endpoint
async function requestData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();
    console.log(json);
    const data = generateTableData(json);
    return data;
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
 
// Store click count in sessionStorage, reset it when Reset button is clicked
function countClicks() {
  if (typeof(Storage) !== "undefined") {
    if (sessionStorage.count) {
      sessionStorage.count = Number(sessionStorage.count)+1;
    } else {
        sessionStorage.count = 1;
    }
    if (sessionStorage.count >= 5) {
      resetBtn.style.display = "block";
      resetBtn.addEventListener("click", () => {
        sessionStorage.count = 0;
        modal.style.display = "none";
      });
    } else {
      resetBtn.style.display = "none";
    }
  }
}

// Open the modal when user clicks a button and count clicks
btn.onclick = () => {
  modal.style.display = "block";
  countClicks();
  displayCounter.innerHTML = sessionStorage.count;
  requestData();
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
