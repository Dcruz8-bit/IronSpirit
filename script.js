document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent real submission

    // Clear previous error states
    nameField.classList.remove("error");
    emailField.classList.remove("error");

    // Basic validation
    const nameValid = nameField.value.trim() !== "";
    const emailValid = emailField.value.includes("@");

    if (!nameValid) nameField.classList.add("error");
    if (!emailValid) emailField.classList.add("error");

    if (nameValid && emailValid) {
      form.innerHTML = `<p class="success-message">Thanks, ${nameField.value}! Your submission was received.</p>`;
    }
  });
});
