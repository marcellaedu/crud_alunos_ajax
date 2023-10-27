function buscarDisciplinas() {
    var xhttp = new XMLHttpRequest()
    xhttp.open("GET", "listar_por_curso.php", false);
    xhttp.send();

    var resposta = xhttp.responseText;

    console.log(resposta);
}