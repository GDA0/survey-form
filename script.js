// Fetch form and apply custom validation
const form = document.querySelector(".needs-validation");

form.addEventListener(
  "submit",
  (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");
  },
  false
);
