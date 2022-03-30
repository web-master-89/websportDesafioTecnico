<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./public/css/style.css">
    <link rel="stylesheet" href="./public/css/roleUser.css">
    <link href="//cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>UserRole</title>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="./index.php">Inicio</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="./insertRoles.php">Roles</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./insertUser.php">Usuarios</a>
            </li>
        
            </ul>
    </div>
</nav>
    <h1 class="asign-permisos">Asignación de Permisos</h1>
    <div class="divmodificar">
        <button type="button" class="btn-danger botonModiRole" id="roleBot"></button>
        <label for="roleBot">modificar Role?</label>
    </div>

<div class="radio-Roles"></div>
    <select name="userPerAsign" id="userPerAsign">
        <option value="#" selected>Usuarios</option>
        <?php
            include "./actions/users.php";
            $user = new Users();
            $theUsers = $user->selectUserTwo();
            $usersOption = json_decode($theUsers);
            foreach ($usersOption as $value) {?>
                # code...
                echo $value->Id." ".$value->nombre."<br>";
                <option value="<?php echo $value->Id; ?>">
                    <?php echo ucwords($value->nombre)." ".ucwords($value->apellido); ?>
                </option>
        <?php        
            }
        ?>
    </select>
<button type="button" class="btn btn-primary registrarRole">registrar</button>
<div class="tabladeAsignaciones">
    <table class="table">
    <thead class="thead-dark">
        <tr>
        <th scope="col">id</th>
        <th scope="col">nombre</th>
        <th scope="col">apellido</th>
        <th scope="col">Role</th>
        <th scope="col">Eliminar</th>
        </tr>
    </thead>
        <tbody class="tbodyUserRole">
            
        </tbody>
    </table>
</div>
<script src="./public/userRole.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>   
</body>
</html>