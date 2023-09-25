//document.getElementById("msgErro").style.display="block";

function retorna() {
  history.back()
}

const init = () => {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");

  const urlParams = new URLSearchParams(window.location.search);
  const matricula = parseInt(urlParams.get("m"));
  const api = new URL("http://localhost:8080");

  
  let lista;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", api + "Aluno", false);
  xhr.onload = function (e) {
    lista = xhr.response;
  };
  xhr.send();
  var listajs = JSON.parse(lista);
  //console.log(listajs)
  var alunos=""
  listajs.forEach(function (objeto, i) {
    alunos += "<tr><td>" + objeto.nome + "</td>"
    alunos += "<td>" + objeto.email + "</td>"
    alunos += "<td>" + objeto.telefone + "</td></tr>"
  });
  document.getElementById("alunos").innerHTML=alunos
  
};



window.onload = init;

