 document.addEventListener("DOMContentLoaded", () => {
  const dadosSalvos = localStorage.getItem("dadosAluno");
  const dadosAlunoContainer = document.getElementById("dados-aluno");
  const formProvas = document.getElementById("form-provas");
  const resultadoContainer = document.getElementById("resultado");

  
  if (!dadosSalvos) {
    window.location.href = "calculo.de.nota.html";
    return;
  }

  
  const aluno = JSON.parse(dadosSalvos);
  dadosAlunoContainer.innerHTML = `
    <p><strong>Aluno:</strong> ${aluno.nome}</p>
    <p><strong>Classe:</strong> ${aluno.classe} | <strong>Turma:</strong> ${aluno.turma}</p>
  `;

  
  formProvas.addEventListener("submit", (e) => {
    e.preventDefault();

    const p1 = parseFloat(document.getElementById("p1").value);
    const p2 = parseFloat(document.getElementById("p2").value);
    const p3 = parseFloat(document.getElementById("p3").value);


    const media = (p1 + p2 + p3) / 3;

    
    resultadoContainer.style.display = "block";
    resultadoContainer.innerHTML = `
      <h3>Resumo Final</h3>
      <p><strong>Nome:</strong> ${aluno.nome}</p>
      <p><strong>Classe / Turma:</strong> ${aluno.classe} / ${aluno.turma}</p>
      <hr style="border: 0; border-top: 1px solid #cbd5e1; margin: 10px 0;">
      <p><strong>Prova 1:</strong> ${p1.toFixed(1)}</p>
      <p><strong>Prova 2:</strong> ${p2.toFixed(1)}</p>
      <p><strong>Prova Trimestral:</strong> ${p3.toFixed(1)}</p>
      <p class="destaque-media">Média Final: ${media.toFixed(2)}</p>
    `;
  });
});