const baseUrl = document.getElementById('hddBaseUrl').value;

const inputCurso = document.getElementById('somCurso');
const inputDisciplina = document.getElementById('somDisciplina');

buscarDisciplinas();

function buscarDisciplinas() {
    //remover option já existentes no select da disciplina
    while(inputDisciplina.children.length > 0){
        inputDisciplina.children[0].remove();

    }

    var xhttp = new XMLHttpRequest()

    var url = baseUrl + "/api/listar_por_curso.php?idCurso=" + inputCurso.value;
    xhttp.open("GET", url, false);
    xhttp.send();

    var json = xhttp.responseText;
    var disciplinas = JSON.parse(json);

    //Criar option vazia
    criarOptionDisciplina("Selecione", "", "-");

    var idSelecionado = inputDisciplina.getAttribute("idSelecionado");

    disciplinas.forEach(disc => {
        criarOptionDisciplina(disc.nome, disc.id, idSelecionado);
    });

}

function criarOptionDisciplina(desc, valor, valorSelecionado){
    var option = document.createElement("option");
    option.innerHTML = desc;
    option.setAttribute("value", valor);

    if(valor == valorSelecionado){
        option.selected = true;
    }

    inputDisciplina.appendChild(option);
}