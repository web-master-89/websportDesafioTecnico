var botonRegistrar = document.querySelector(".registrarRole");
var userPerAsign = document.querySelector("#userPerAsign");
var botonModiRole = document.querySelector(".botonModiRole");
var divmodificar = document.querySelector(".divmodificar");
var tbodyUserRole = document.querySelector(".tbodyUserRole");
var radios = "";
var lista = "";
var radioRoles = document.querySelector(".radio-Roles");
let formData = new FormData();
formData.append("inicio", "inicio");
let xhr = new XMLHttpRequest();
xhr.onload = (e) => {
    e.preventDefault();
    if (xhr.readyState === 4 && xhr.status === 200) {
        var listaRole = JSON.parse(xhr.responseText);
        console.log(listaRole);
        Object.values(JSON.parse(listaRole.roles)).forEach(element => {
            let div = document.createElement("div");
            let inradio = document.createElement("input");
            let label = document.createElement("label");
            label.setAttribute("class", `form-check-label`);
            label.setAttribute("for", `${element.nombre}`);
            label.innerText = `${element.nombre}`;
            inradio.setAttribute("type", "radio");
            inradio.setAttribute("class", `form-check-input`);
            inradio.setAttribute("name", `${element.Id}`);
            inradio.setAttribute("id", `${element.nombre}`);
            inradio.setAttribute("value", `${element.Id}`);
            div.append(inradio);
            div.append(label);
            div.setAttribute("class", `form-check radio${element.nombre}`);
            radioRoles.append(div);
        });
        var cuadroRoles = JSON.parse(listaRole.asign);
        console.log(cuadroRoles);
        Object.values(cuadroRoles).forEach(element => {
            lista += `<tr><td>${element.Id}</td>
                    <td>${element.usuario}</td>
                    <td>${element.apellido}</td>
                    <td>${element.nombre}</td>
                    <td><button type="button" class="btn btn-danger del" onclick="eliminar(this);">eliminar</button></td>
                    </tr>`;
        });
        tbodyUserRole.innerHTML = lista;
        var misRadios = document.querySelectorAll(".form-check");
        Object.values(misRadios).forEach(element => {
            element.children[0].addEventListener("change", function(e) {
                e.preventDefault();
                if (element.children[0].checked === true) {
                    Object.values(misRadios).forEach(ele => {
                        if (ele.children[0].checked === false) {
                            ele.children[0].disabled = true;
                            divmodificar.style.display = "block";
                        }
                    });
                }
            });
        });
    }
}
xhr.open("POST", "http://localhost:8080/websportDesafioTecnico/actions/asignRole.php");
xhr.send(formData);
botonRegistrar.addEventListener("click", function(e) {
    e.preventDefault();
    if (userPerAsign.value === "#") {
        Swal.fire({
            icon: 'error',
            title: 'debes elegir un usario',
            text: 'Something went wrong!',
            footer: ''
        })
    } else {
        var misRadios = document.querySelectorAll(".form-check");
        Object.values(misRadios).forEach(element => {
            if (element.children[0].checked === true) {
                let formData = new FormData();
                formData.append("registrando", "registrando");
                formData.append("role", element.children[0].value);
                formData.append("usuario", userPerAsign.value);
                let xhr = new XMLHttpRequest();
                xhr.onload = (e) => {
                    e.preventDefault();
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        var registro = JSON.parse(xhr.responseText);
                        console.log(registro);
                        if (registro.res === "ya tiene ese rol") {
                            Swal.fire({
                                icon: 'error',
                                title: 'el usuario ya tiene ese rol',
                                text: 'Something went wrong!',
                                footer: ''
                            })
                        } else if (registro.res === "registrado") {
                            Object.values(misRadios).forEach(ele => {
                                ele.children[0].checked = false;
                                ele.children[0].disabled = false;
                                userPerAsign.value = "#";
                                divmodificar.style.display = "none";
                            });
                            console.log("soy" + JSON.parse(registro.asign));
                            lista = "";
                            Object.values(JSON.parse(registro.asign)).forEach(element => {
                                lista += `<tr><td>${element.Id}</td>
                                    <td>${element.usuario}</td>
                                    <td>${element.apellido}</td>
                                    <td>${element.nombre}</td>
                                    <td><button type="button" class="btn btn-danger del" onclick="eliminar(this);">eliminar</button></td>
                                    </tr>`;
                            });
                            tbodyUserRole.innerHTML = lista;
                            Swal.fire(
                                'Registrado!',
                                'Rol asignado!',
                                'success'
                            );

                        }
                    }
                }
                xhr.open("POST", "http://localhost:8080/websportDesafioTecnico/actions/asignRole.php");
                xhr.send(formData);
            } else if (element.children[0].disabled === false) {
                Swal.fire({
                    icon: 'error',
                    title: 'debes elegir un role',
                    text: 'Something went wrong!',
                    footer: ''
                })
            }
        });
    }
});
divmodificar.addEventListener("click", function(e) {
    e.preventDefault();
    var misRadios = document.querySelectorAll(".form-check");
    Object.values(misRadios).forEach(element => {
        if (element.children[0].checked === true) {
            Object.values(misRadios).forEach(ele => {
                ele.children[0].checked = false;
                ele.children[0].disabled = false;
            });
            divmodificar.style.display = "none";
        }
    });
});

function eliminar(soy) {
    var padres = soy.parentNode.parentNode;
    var index = padres.children[0].innerText;
    console.log(index);
    let formData = new FormData();
    formData.append("eliminacion", "eliminacion");
    formData.append("index", index);
    let xhr = new XMLHttpRequest();
    xhr.onload = (e) => {
        e.preventDefault();
        if (xhr.readyState === 4 && xhr.status === 200) {
            var listaRole = JSON.parse(xhr.responseText);
            console.log(listaRole);
            lista = "";
            Object.values(JSON.parse(listaRole)).forEach(element => {
                lista += `<tr><td>${element.Id}</td>
                    <td>${element.usuario}</td>
                    <td>${element.apellido}</td>
                    <td>${element.nombre}</td>
                    <td><button type="button" class="btn btn-danger del" onclick="eliminar(this);">eliminar</button></td>
                    </tr>`;
            });
            tbodyUserRole.innerHTML = lista;
        }
    }
    xhr.open("POST", "http://localhost:8080/websportDesafioTecnico/actions/asignRole.php");
    xhr.send(formData)
}