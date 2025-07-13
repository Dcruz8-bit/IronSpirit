document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const thankYou = document.getElementById("thank-you-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    nameField.classList.remove("error");
    emailField.classList.remove("error");
    thankYou.style.display = "none";

    const nameValid = nameField.value.trim() !== "";
    const emailValid = emailField.value.includes("@");

    if (!nameValid) nameField.classList.add("error");
    if (!emailValid) emailField.classList.add("error");

    if (nameValid && emailValid) {
      thankYou.innerHTML = `✅ Thanks, ${nameField.value}! Someone will reach out to you soon.`;
      thankYou.style.display = "block";
      form.reset();
    }
  });
});
