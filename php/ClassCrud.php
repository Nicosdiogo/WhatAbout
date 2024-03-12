<?php

class ClassCrud extends Conexao{

    private $Crud;
    private $Contador;

    private function preparedStatements($Query , $Parametros){
        $this->countParametros(0);
        $this->Crud=$this->conectar()->prepare($Query);
        
        if($this->Contador >0){
            for($I=1; $I <= $this->Contador; $I++){
                $this->Crud->bindValue($I, $Parametros[$I-1]);
            }
        }
        $this->Crud->execute();
    }

    #contador de parametros
    private function countParametros($Parametros){
        $this->Contador=count($Parametros);
    }
}