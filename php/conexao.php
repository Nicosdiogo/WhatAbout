<?php

abstract class Conexao {

    public function conectar() {
        try {
            $Con = new PDO("mysql:host=localhost;dbname=waaa","root","");
            return $Con;
        } catch (PDOException $Erro) {
            return $Erro->getMessage();
        }
    }
}