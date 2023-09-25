//document.getElementById("msgErro").style.display="block";

const init = () => {
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const submitButton = document.getElementById("confirmar");
  const errorDiv = document.getElementById("error");
  const errorMsg = document.getElementById("errormsg");
  const api = new URL("http://localhost:8080");

  console.log(inputEmail, inputPassword, submitButton, errorDiv, errorMsg);

  if (submitButton) {
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      let matricula;
      var data = new FormData();
      data.append("email", inputEmail.value);
      data.append("senha", inputPassword.value);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", api + "Administrador/login", false);
      xhr.onload = function (e) {
        matricula = xhr.responseText;
      };

      xhr.send(data);
      console.log(matricula);
      if (xhr.status != 200) {
        errorMsg.innerHTML = "Login inválido. Tente de novo.";
        errorDiv.style.setProperty("display", "none");
        setTimeout(() => {
          errorDiv.style.setProperty("display", "block");
        }, 500);
      } else {
        window.location.href = "../../../interface ADM/html.html?m=" + matricula;
      }
    });
  }
};

window.onload = init;
