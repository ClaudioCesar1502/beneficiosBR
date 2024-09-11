// Adiciona um event listener para o campo de pesquisa que escuta o pressionamento de tecla
document.getElementById("campo-pesquisa").addEventListener("keydown", function(event) {
    // Verifica se a tecla pressionada foi o Enter (código 13)
    if (event.key === "Enter") {
        event.preventDefault(); // Evita o comportamento padrão (submeter formulário, por exemplo)
        pesquisar(); // Chama a função de pesquisa
    }
});

function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Inserir um nome válido</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          resultados += `
          <div class="item-resultado">
            <h2>
              <a href="${dado.link}" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
          </div>
        `;
      }
  }

  if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>";
  }

  section.innerHTML = resultados;
}
