<?php
class Conexion{
    public $conexion;
    public function __construct(){
       $this->conexion = new mysqli("127.0.0.1", "root", "" , "websport");
      
    }
}