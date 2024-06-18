const serviciiDiv = document.querySelector(".servicii__carusel");

document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("date");
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(tomorrow.getDate()).padStart(2, "0");

  const minDate = `${year}-${month}-${day}`;

  console.log(minDate);
  dateInput.min = minDate;
});

function mySubmitFunction(e) {
  e.preventDefault();

  // Clear all input fields
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("date").value = "";
  document.getElementById("hour").value = "";
  document.getElementById("additionalInfo").value = "";

  // Display confirmation message
  let confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.innerHTML =
    "<p>Programarea a fost trimisă, vă vom suna în cel mai scurt timp pentru confirmare.</p>";

  setTimeout(() => {
    confirmationMessage.innerHTML = "";
  }, 3000);

  return false;
}
