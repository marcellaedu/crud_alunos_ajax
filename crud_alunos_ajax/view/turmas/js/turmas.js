const baseUrl = document.getElementById('hddBaseUrl').value;

const inputCurso = document.getElementById('somCurso');
const inputDisciplina = document.getElementById('somDisciplina');

buscarDisciplinas();

function buscarDisciplinas() {
    //remover option já existentes no select da disciplina
    while(inputDisciplina.children.length > 0){
        inputDisciplina.children[0].remove();

    }

    //Criar option vazia
    criarOptionDisciplina("Selecione", "", "-");

    var idSelecionado = inputDisciplina.getAttribute("idSelecionado");

    var xhttp = new XMLHttpRequest()

    var url = baseUrl + "/api/listar_por_curso.php?idCurso=" + inputCurso.value;
    xhttp.open("GET", url);

    //função de retorno executada após a resposta do servidor chegar no cliente
    xhttp.onload = function(){
        //Resposta da requisição
        console.log("Resposta recebida do servidor!");
        var json = xhttp.responseText;
        var disciplinas = JSON.parse(json);

        disciplinas.forEach(disc => {
            //Criar as opções para o select
            criarOptionDisciplina(disc.nome, disc.id, idSelecionado);
        });
    
    }

    xhttp.send();
    console.log("Requisição enviada ao servidor!");
    console.log("Mensagem nova!");
    console.log("Mensagem nova 2!");
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