<?php 
    require_once(__DIR__ . "/../controller/TurmaController.php");
    require_once(__DIR__ . "/../model/Turma.php");
    require_once(__DIR__ . "/../model/Disciplina.php");

    $ano = is_numeric($_POST['ano']) ? $_POST['ano'] : 0;
    $curso = is_numeric($_POST['idCurso']) ? $_POST['idCurso'] : 0;
    $disciplina = is_numeric($_POST['idDisc']) ? $_POST['idDisc'] : 0;

    $turma = new Turma();
    //sets de turma com os valores
    $turma->setAno($ano);

    if($disciplina){
        $disc = new Disciplina();
        $disc->setId($disciplina);
        $turma->setDisciplina($disc);
    }

    //Chamar o controller para salvar a turma
    $turmaCont = new TurmaController();
    $erros = $turmaCont->salvar($turma);

    //Retornar os erros ou uma string vazia se não houver
    $msgErro = "";
    if($msgErro){
        $msgErro = implode("<br>", $erros);
    }

    //echo json_encode($erros, JSON_UNESCAPED_UNICODE);
    //echo $ano . "-" . $idCurso . "-" . $idDisciplina;