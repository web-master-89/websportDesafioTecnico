<?php
include "conexion.php";
class Roles extends Conexion{
    public $nombre;

    public function addRole($nombre)
        {
            $this->nombre = $nombre;
            $sql = "INSERT INTO roles(nombre) VALUES ('".$this->nombre."')";
            $query = $this->conexion->query($sql);
        }
    public function editRole($id, $nombre)
        {
            $this->nombre = $nombre;
            $sql = "UPDATE roles SET nombre='".$this->nombre."' WHERE Id= ".$id."";
            $query = $this->conexion->query($sql);
        }
    public function deleteRole($id)
        {
            $sql = "DELETE FROM roles WHERE Id=".$id."";
            $query = $this->conexion->query($sql);
        }
        public function selectRole()
        {
            $sql = "SELECT * FROM roles";
            $query = $this->conexion->query($sql);
            $rolesresponse = array();
            while ($result = $query->fetch_assoc()) {
                # code...
                $rolesresponse[]= $result;
            }
            echo json_encode($rolesresponse);
        }     
        public function selectOneRole($id)
        {
            $sql = "SELECT * FROM roles WHERE id =".$id."";
            $query = $this->conexion->query($sql);
            $usersresponse = array();
            while ($result = $query->fetch_assoc()) {
                # code...
                $usersresponse[]= $result;
            }
            echo json_encode($usersresponse);
        }  
}
if($_SERVER['REQUEST_METHOD'] === "POST"){
    if (isset($_POST['nombre'])) 
        {
            # code...
            $role = new Roles();
            try {
                
                $role->addRole($_POST['nombre']);
                $role->selectRole();
            } catch (\Throwable $th) {
                //throw $th;
                echo "fallaste";
            }
        }else if (isset($_POST['cuadro'])){ 
            $role = new Roles();
            $role->selectRole();
         }else if (isset($_POST['eliminar'])){ 
            $role = new Roles();
            $role->deleteRole($_POST['index']);
            $role->selectRole();
         }else if (isset($_POST['editar'])){ 
            $role = new Roles();
            $role->selectOneRole($_POST['index']);
         }else if (isset($_POST['editando'])){ 
            $role = new Roles();
            $role->editRole($_POST['index'], $_POST['nombreEditado']);
            $role->selectRole();
         }
}

    