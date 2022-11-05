// function per emailJS presa dai Docs del servizio stesso
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      this.contact_number.value =
        (Math.random() * 100000) | 0;
      emailjs
        .sendForm("contact_service", "contact_form", this)
        // alert di invio effettuato o errore
        .then(
          function () {
            alert(
              "\nYour message have been sent successfully. I'll reply as soon as possible!\n\nIl tuo messaggio è stato inviato correttamente. Risponderò il prima possibile!\n"
            );
          },
          function (error) {
            console.log(
              "There was an error. Retry!",
              error
            );
          }
        );
    });
};
