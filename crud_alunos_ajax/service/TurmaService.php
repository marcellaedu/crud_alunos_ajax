<?php
#Arquivo com a declaração da classe service para Turma

require_once(__DIR__ . "/../model/Turma.php");

class TurmaService {

    public function validarDados(Turma $turma) {
        $erros = array();

        //Validar ano
        if(! $turma->getAno())
            array_push($erros, "O campo ano é obrigatório.");

        //Valida o valor do ano
        if($turma->getAno() && $turma->getAno() < 2000)
            array_push($erros, "O campo ano deve ser maior que 2000.");

        //Validar disciplina
        if(! $turma->getDisciplina())
            array_push($erros, "O campo disciplina é obrigatório.");

        return $erros;
    }

}