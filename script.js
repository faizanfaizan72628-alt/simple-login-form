const form=document.getElementById("loginform")
const message=document.getElementById("message")
form.addEventListener("submit", function(event) {
  event.preventDefault();
message.textContent = "Form submitted successfully!";
  message.style.color = "green";
});
