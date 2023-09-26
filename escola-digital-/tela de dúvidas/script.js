//document.getElementById("msgErro").style.display="block";
function retorna(){
  history.back()
}

const init = () => {
  const nome = document.getElementById("nome");
  const curso = document.getElementById("materia");
  const cursos = ["Curso 1 - Java", "Curso 2 - JavaScript", "Curso 3 - HTML e CSS", "Curso 4 - C"];

  const urlParams = new URLSearchParams(window.location.search);
  const matricula = parseInt(urlParams.get("m"));
  const api = new URL("http://localhost:8080");

  let lista;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", api + "Professor/" + matricula, false);
  xhr.onload = function (e) {
    lista = xhr.response;
  };
  xhr.send();
  var listajs = JSON.parse(lista);
  //console.log(listajs)

  let professor = listajs;

  console.log(professor);

  if (professor.nome) {
    nome.innerText = "Nome: " + professor.nome;
  }
  if (professor.curso) {
    curso.innerText = cursos[professor.curso - 1];
  } else {
    curso.innerText = "Curso: ";
  }
};

function cliqueDuvidas() {
  const urlParams = new URLSearchParams(window.location.search);
  const matricula = parseInt(urlParams.get("m"));
  window.location.href = "../tela de dúvidas/html.html?m=" + matricula;
}

function cliqueAjuda() {
  const urlParams = new URLSearchParams(window.location.search);
  const matricula = parseInt(urlParams.get("m"));
  window.location.href = "../tela de ajuda professor/html.html?m=" + matricula;
}

function cliqueSair() {
  const urlParams = new URLSearchParams(window.location.search);
  const matricula = parseInt(urlParams.get("m"));
  window.location.href = "../sair/html.html?m=" + matricula;
}

window.onload = init;
