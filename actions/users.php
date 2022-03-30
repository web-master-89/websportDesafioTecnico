<?php
include "conexion.php";
class Users extends Conexion{
    public $nombre , $apellido, $email, $clave;

    public function addUser($nombre , $apellido, $email, $clave)
        {
            $this->nombre = $nombre;
            $this->apellido = $apellido;
            $this->email = $email;
            $this->clave = $clave;
            $sql = "INSERT INTO users(nombre , apellido, email, clave) VALUES 
            ('".$this->nombre."', '".$this->apellido."', '".$this->email."', '".$this->clave."')";
            $query = $this->conexion->query($sql);
        }
    public function editUser($id, $nombre , $apellido, $email, $clave)
        {
            $this->nombre = $nombre;
            $this->apellido = $apellido;
            $this->email = $email;
            $this->clave = $clave;
            $sql = "UPDATE users SET nombre='".$this->nombre."', apellido='".$this->apellido."', email='".$this->email."', clave='".$this->clave."' WHERE Id=".$id."";
            $query = $this->conexion->query($sql);
        }
    public function deleteUser($id)
        {
            $sql = "DELETE FROM users WHERE Id=".$id."";
            $query = $this->conexion->query($sql);
        }
    public function selectUser()
        {
            $sql = "SELECT * FROM users";
            $query = $this->conexion->query($sql);
            $usersresponse = array();
            while ($result = $query->fetch_assoc()) {
                # code...
                $usersresponse[]= $result;
            }
            echo json_encode($usersresponse);
        }
        public function selectUserTwo()
        {
            $sql = "SELECT * FROM users";
            $query = $this->conexion->query($sql);
            $usersresponse = array();
            while ($result = $query->fetch_assoc()) {
                # code...
                $usersresponse[]= $result;
            }
            return json_encode($usersresponse);
        }
        public function selectOneUser($id)
        {
            $sql = "SELECT * FROM users WHERE id =".$id."";
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
            $user = new Users();
            try {
                
                $user->addUser($_POST['nombre'],$_POST['apellido'],$_POST['email'],$_POST['password']);
                $user->selectUser();
            } catch (\Throwable $th) {
                //throw $th;
                echo "fallaste";
            }
        }else if (isset($_POST['cuadro'])){ 
            $usersSelect = new Users();
            $usersSelect->selectUser();
         }else if (isset($_POST['eliminar'])){ 
            $usersSelect = new Users();
            $usersSelect->deleteUser($_POST['index']);
            $usersSelect->selectUser();
         }else if (isset($_POST['editar'])){ 
            $usersSelect = new Users();
            $usersSelect->selectOneUser($_POST['index']);
         }else if (isset($_POST['editando'])){ 
            $usersSelect = new Users();
            $usersSelect->editUser($_POST['index'],$_POST['nombreEditado'],$_POST['apellido'],$_POST['email'],$_POST['password']);
            $usersSelect->selectUser();
         }
}