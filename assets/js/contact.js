// function per emailJS
function sendMail() {
  var parameters = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  // serviceID e templateID
  const serviceID = "service_f8rpbka";
  const templateID = "template_0fqf1z8";

  emailjs
    .send(serviceID, templateID, parameters)
    .then((res) => {
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#message").value = "";

      console.log(res);

      alert(
        "\nYour message have been sent successfully. I'll reply as soon as possible!\n\nIl tuo messaggio è stato inviato correttamente. Risponderò il prima possibile!\n"
      );
    })
    .catch((err) => console.log(err));
}
