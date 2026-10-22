document.getElementById("form-aluno").addEventListener("submit", (e) => {
  e.preventDefault();

  const aluno = {
    nome: document.getElementById("nome").value.trim(),
    classe: document.getElementById("classe").value.trim(),
    turma: document.getElementById("turma").value.trim()
  };

  
  localStorage.setItem("dadosAluno", JSON.stringify(aluno));
  window.location.href = "provas.html";
});