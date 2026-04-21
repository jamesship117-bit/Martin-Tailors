const appointmentForm = document.getElementById("appointment-form");
const formMessage = document.getElementById("form-message");

if (appointmentForm && formMessage) {
  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = appointmentForm.elements.name.value.trim();
    const date = appointmentForm.elements.date.value;

    formMessage.textContent = `Thanks ${name || "there"}! Your appointment request for ${date} was received. Please call 713-861-4891 if you need immediate assistance.`;
    appointmentForm.reset();
  });
}
