<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./public/css/style.css">
    <link href="//cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Roles</title>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="./index.php">Inicio</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="./userRole.php">Asignaciones de rol</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./insertUser.php">Usuarios</a>
            </li>
        
            </ul>
    </div>
</nav>
<h1 class="title-roles">Registro de roles</h1>
    <div class="divRol">
    <form>
        <div class="form-group">
            <label for="exampleInputrol">Rol</label>
            <input type="text" class="form-control col-5" id="exampleInputrol" placeholder="Enter rol">
        </div>
        <button type="button" class="btn btn-primary botonRole">registrar</button>
        <button type="button" class="btn btn-success role-edicion" id="role-edicion">edicion</button>
    </form>
    </div>
    <div class="Roles">
        <table class="table tabla-Roles">
            <thead class="thead-dark">
                <tr>
                <th scope="col">id</th>
                <th scope="col">nombre</th>
                <th scope="col">eliminar</th>
                <th scope="col">editar</th>
                </tr>
            </thead>
            <tbody class="tbodyRoles">
                
            </tbody>
        </table>
    </div>
    <script src="./public/roles.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>