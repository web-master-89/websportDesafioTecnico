var formulario = document.getElementById("formularioInscripcion");
var nombreUser = document.querySelector("#exampleInputNombre");
var apellidoUser = document.querySelector("#exampleInputApellido");
var emailUser = document.querySelector("#exampleInputEmail1");
var passwordUser = document.querySelector("#exampleInputPassword1");
var tbodyUsers = document.querySelector(".tbodyUsers");
var botonUser = document.querySelector(".user-button");
var bottonedicion = document.querySelector(".user-edicion");
var cont = 0;
var data = "cuadro";
var lista = "";
window.addEventListener("load", (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("cuadro", data);
    let xhr = new XMLHttpRequest();
    xhr.onload = (e) => {
        e.preventDefault();
        if (xhr.readyState === 4 && xhr.status === 200) {
            var listaUser = JSON.parse(xhr.responseText);
            Object.values(listaUser).forEach(element => {
                lista += `<tr><td>${element.Id}</td>
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.email}</td>
                <td>${element.clave}</td>
                <td><button type="button" class="btn btn-danger del" onclick="eliminar(this);">eliminar</button></td>
                <td><button type="button" class="btn btn-success edit" onclick="editar(this);">editar</button></td>
                </tr>`;
            });
            tbodyUsers.innerHTML = lista;
        }
    }
    xhr.open("POST", "http://localhost:8080/webexports/actions/users.php");
    xhr.send(data);
});
botonUser.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(formulario.children);
    let inputs = formulario.children;
    let formData = new FormData();
    formData.append("nombre", nombreUser.value);
    formData.append("apellido", apellidoUser.value);
    formData.append("email", emailUser.value);
    formData.append("password", passwordUser.value);
    let xhr = new XMLHttpRequest();
    xhr.onload = (e) => {
        e.preventDefault();
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
            Swal.fire(
                `insertado`,
                'You clicked the button!',
                'success'
            );
            var listaUser = JSON.parse(xhr.responseText);
            lista = "";
            Object.values(listaUser).forEach(element => {
                lista += `<tr><td>${element.Id}</td>
                    <td>${element.nombre}</td>
                    <td>${element.apellido}</td>
                    <td>${element.email}</td>
                    <td>${element.clave}</td>
                    <td><button type="button" class="btn btn-danger del" onclick="eliminar(this);">eliminar</button></td>
                    <td><button type="button" class="btn btn-success edit" onclick="editar(this);">editar</button></td>
                    </tr>`;
            });
            tbodyUsers.innerHTML = lista;
            nombreUser.value = "";
            apellidoUser.value = "";
            emailUser.value = "";
            passwordUser.value = "";
        }
    }
    xhr.open("POST", "http://localhost:8080/webexports/actions/users.php");
    xhr.send(formData)
});

function eliminar($soy) {
    var padres = $soy.parentNode.parentNode;
    var index = padres.children[0].innerText;
    let formData = new FormData();
    formData.append("eliminar", "eliminar");
    formData.append("index", index);
    let xhr = new XMLHttpRequest();
    xhr.onload = (e) => {
        e.preventDefault();
        if (xhr.readyState === 4 && xhr.status === 200) {
            var listaUser = JSON.parse(xhr.responseText);
            lista = "";
            Object.values(listaUser).forEach(element => {
                lista += `<tr><td>${element.Id}</td>
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.email}</td>
                <td>${element.clave}</td>
                <td><button type="button" class="btn btn-danger del" onclick="eliminar(this);">eliminar</button></td>
                <td><button type="button" class="btn btn-success edit" onclick="editar(this);">editar</button></td>
                </tr>`;
            });
            tbodyUsers.innerHTML = lista;
        }
    }
    xhr.open("POST", "http://localhost:8080/webexports/actions/users.php");
    xhr.send(formData)
}

function editar($soy) {
    var padres = $soy.parentNode.parentNode;
    var index = padres.children[0].innerText;
    let formData = new FormData();
    formData.append("editar", "editar");
    formData.append("index", index);
    let xhr = new XMLHttpRequest();
    xhr.onload = (e) => {
        e.preventDefault();
        if (xhr.readyState === 4 && xhr.status === 200) {
            var listaUser = JSON.parse(xhr.responseText);
            console.log(listaUser[0]);
            nombreUser.value = listaUser[0].nombre;
            apellidoUser.value = listaUser[0].apellido;
            emailUser.value = listaUser[0].email;
            passwordUser.value = listaUser[0].clave;
            bottonedicion.style.display = "block";
            bottonedicion.style.marginLeft = "17px";
            botonUser.style.display = "none";
            bottonedicion.setAttribute("data-user", listaUser[0].Id);
        }
    }
    xhr.open("POST", "http://localhost:8080/webexports/actions/users.php");
    xhr.send(formData);
}
bottonedicion.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(bottonedicion.getAttribute("data-user"));
    let formData = new FormData();
    formData.append("editando", "editando");
    formData.append("index", bottonedicion.getAttribute("data-user"));
    formData.append("nombreEditado", nombreUser.value);
    formData.append("apellido", apellidoUser.value);
    formData.append("email", emailUser.value);
    formData.append("password", passwordUser.value);
    let xhr = new XMLHttpRequest();
    xhr.onload = (e) => {
        e.preventDefault();
        if (xhr.readyState === 4 && xhr.status === 200) {
            var listaUser = JSON.parse(xhr.responseText);
            console.log(listaUser);
            lista = "";
            Object.values(listaUser).forEach(element => {
                lista += `<tr><td>${element.Id}</td>
                    <td>${element.nombre}</td>
                    <td>${element.apellido}</td>
                    <td>${element.email}</td>
                    <td>${element.clave}</td>
                    <td><button type="button" class="btn btn-danger del" onclick="eliminar(this);">eliminar</button></td>
                    <td><button type="button" class="btn btn-success edit" onclick="editar(this);">editar</button></td>
                    </tr>`;
            });
            tbodyUsers.innerHTML = lista;
            nombreUser.value = "";
            apellidoUser.value = "";
            emailUser.value = "";
            passwordUser.value = "";
            botonUser.style.display = "block";
            bottonedicion.style.display = "none";
        }
    }
    xhr.open("POST", "http://localhost:8080/webexports/actions/users.php");
    xhr.send(formData);
});