//document.getElementById("msgErro").style.display="block";

const init = () => {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");

  const urlParams = new URLSearchParams(window.location.search);
  const matricula = parseInt(urlParams.get("m"));
  const api = new URL("http://localhost:8080");

  let lista;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", api + "Administrador/" + matricula, false);
  xhr.onload = function (e) {
    lista = xhr.response;
  };
  xhr.send();
  var listajs = JSON.parse(lista);
  //console.log(listajs)

  let administrador = listajs;

  console.log(administrador);

  if (administrador.nome) {
    nome.innerText = "Nome: " + administrador.nome;
  }
  if (administrador.email) {
    email.innerText = "Email: " + administrador.email 
  } else {
    email.innerText = "Email: ";
  }
};

function cliqueAlunos() {
  const urlParams = new URLSearchParams(window.location.search);
  const matricula = parseInt(urlParams.get("m"));
  window.location.href = "../Interfaces---Dados-dos-Alunos-main/Interfaces---Dados-dos-Alunos-main/indexdados.html?m=" + matricula;
}

function cliqueProfessor() {
  const urlParams = new URLSearchParams(window.location.search);
  const matricula = parseInt(urlParams.get("m"));
  window.location.href = "../excluir tirar professor/html.html?m=" + matricula;
}


window.onload = init;
