<?php   
include "roles.php";
class Asign extends Conexion{
    public $user, $role;
    public function addAsign($user, $role)
        {
            $this->user = $user;
            $this->role = $role;
            $sql = "INSERT INTO roles_users(users_id, roles_id) VALUES (".$this->user.",".$this->role.")";
            $query = $this->conexion->query($sql);
        }
        public function traerRole()
        {
            $sql = "SELECT * FROM roles";
            $query = $this->conexion->query($sql);
            $rolesresponse = array();
            while ($result = $query->fetch_assoc()) {
                # code...
                $rolesresponse[]= $result;
            }
            return json_encode($rolesresponse);
        }
        public function selectAsign()
            {
                $sql = "SELECT roles_users.Id, users.nombre AS usuario, users.apellido, roles.nombre FROM roles_users INNER JOIN users ON roles_users.users_id = users.Id INNER JOIN roles ON roles_users.roles_id = roles.Id ORDER BY roles_users.Id";
                $query = $this->conexion->query($sql);
                $rolesAsign = array();
                while ($result = $query->fetch_assoc()) {
                    # code...
                    $rolesAsign[]= $result;
                }
                return json_encode($rolesAsign);
            }
            public function deleteAsign($id)
                {
                    $sql = "DELETE FROM roles_users WHERE Id=".$id."";
                    $query = $this->conexion->query($sql);
                }  
}
if($_SERVER['REQUEST_METHOD'] === "POST"){
    if (isset($_POST['inicio'])) 
        {
            $asign = new Asign();
            echo json_encode(array("roles"=>$asign->traerRole(),"asign"=>$asign->selectAsign()));
        }elseif (isset($_POST['registrando'])) 
            {
                $asign = new Asign();
                $conexion = new mysqli("localhost", "root", "", "websport");
                $sql = "SELECT * FROM roles_users WHERE users_id = ".$_POST['usuario']." AND roles_id = ".$_POST['role']."";
                $query = $conexion->query($sql);
                if ($query->num_rows >= 1 || empty($_POST['role'])) {
                    echo json_encode(array("res"=>"ya tiene ese rol"));
                }elseif ($query->num_rows < 1) {
                    $asign->addAsign($_POST['usuario'], $_POST['role']);
                    echo json_encode(array("res"=>"registrado","asign"=>$asign->selectAsign()));
                }
            }elseif (isset($_POST['eliminacion'])) 
                {
                    $asign = new Asign();
                    $asign->deleteAsign($_POST['index']);
                    echo json_encode($asign->selectAsign());
                }
    }