var nombreRole = document.querySelector("#exampleInputrol");
var botonRole = document.querySelector(".botonRole");
var tbodyUsers = document.querySelector(".tbodyRoles");
var bottonedicion = document.querySelector("#role-edicion");
var lista = "";
window.addEventListener("load", (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("cuadro", "cuadro");
    let xhr = new XMLHttpRequest();
    xhr.onload = (e) => {
        e.preventDefault();
        if (xhr.readyState === 4 && xhr.status === 200) {
            var listaRole = JSON.parse(xhr.responseText);
            Object.values(listaRole).forEach(element => {
                lista += `<tr><td>${element.Id}</td>
                <td>${element.nombre}</td>
                <td><button type="button" class="btn btn-danger del" onclick="eliminar(this);">eliminar</button></td>
                <td><button type="button" class="btn btn-success edit" onclick="editar(this);">editar</button></td>
                </tr>`;
            });
            tbodyUsers.innerHTML = lista;
        }
    }
    xhr.open("POST", "http://localhost:8080/websportDesafioTecnico/actions/roles.php");
    xhr.send(data);
});
botonRole.addEventListener("click", function(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("nombre", nombreRole.value);
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
            var listaRole = JSON.parse(xhr.responseText);
            lista = "";
            Object.values(listaRole).forEach(element => {
                lista += `<tr><td>${element.Id}</td>
                    <td>${element.nombre}</td>
                    <td><button type="button" class="btn btn-danger del" onclick="eliminar(this);">eliminar</button></td>
                    <td><button type="button" class="btn btn-success edit" onclick="editar(this);">editar</button></td>
                    </tr>`;
            });
            tbodyUsers.innerHTML = lista;
            nombreRole.value = "";
        }
    }
    xhr.open("POST", "http://localhost:8080/websportDesafioTecnico/actions/roles.php");
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
            var listaRole = JSON.parse(xhr.responseText);
            lista = "";
            Object.values(listaRole).forEach(element => {
                lista += `<tr><td>${element.Id}</td>
                <td>${element.nombre}</td>
                <td><button type="button" class="btn btn-danger del" onclick="eliminar(this);">eliminar</button></td>
                <td><button type="button" class="btn btn-success edit" onclick="editar(this);">editar</button></td>
                </tr>`;
            });
            tbodyUsers.innerHTML = lista;
        }
    }
    xhr.open("POST", "http://localhost:8080/websportDesafioTecnico/actions/roles.php");
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
            var listaRole = JSON.parse(xhr.responseText);
            console.log(listaRole[0]);
            nombreRole.value = listaRole[0].nombre;
            bottonedicion.style.display = "block";
            bottonedicion.style.marginLeft = "-2px";
            botonRole.style.display = "none";
            bottonedicion.setAttribute("data-role", listaRole[0].Id);
        }
    }
    xhr.open("POST", "http://localhost:8080/websportDesafioTecnico/actions/roles.php");
    xhr.send(formData);
}
bottonedicion.addEventListener("click", function(e) {
    console.log(bottonedicion.getAttribute("data-user"));
    let formData = new FormData();
    formData.append("editando", "editando");
    formData.append("index", bottonedicion.getAttribute("data-role"));
    formData.append("nombreEditado", nombreRole.value);
    let xhr = new XMLHttpRequest();
    xhr.onload = (e) => {
        e.preventDefault();
        if (xhr.readyState === 4 && xhr.status === 200) {
            var listaRole = JSON.parse(xhr.responseText);
            console.log(listaRole);
            lista = "";
            Object.values(listaRole).forEach(element => {
                lista += `<tr><td>${element.Id}</td>
                    <td>${element.nombre}</td>
                    <td><button type="button" class="btn btn-danger del" onclick="eliminar(this);">eliminar</button></td>
                    <td><button type="button" class="btn btn-success edit" onclick="editar(this);">editar</button></td>
                    </tr>`;
            });
            tbodyUsers.innerHTML = lista;
            nombreRole.value = "";
            botonRole.style.display = "block";
            bottonedicion.style.display = "none";
        }
    }
    xhr.open("POST", "http://localhost:8080/websportDesafioTecnico/actions/roles.php");
    xhr.send(formData);
})