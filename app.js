function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById 
    ("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada:
    if (!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Inserir um nome valido</p>"
       return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre os dados da pesquisa e constrói o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        //cria um novo elemento
          resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}.</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
}
if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
}
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }

