const subBtn = document.querySelector("button[type=submit]");

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());

  formValues.phone =
    formValues.phone_area + formValues.phone_prefix + formValues.phone_line;

  delete formValues.phone_area;
  delete formValues.phone_prefix;
  delete formValues.phone_line;

  formValues.messageText = formValues.messageText.trim().replace(/\s+/g, " ");

  console.log("formValues :>> ", formValues);
});
