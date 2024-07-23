/*
    DOMContentLoaded sirve para controlar
    que primero se cargue TODO el documento
    HTML, por ultimo javascript
*/
documento.addEventListener("DOMContentLoaded", función(){
    //Esta es zona segura
    //console.log(document.getElementById("txtNombre").value);
    //console.log(document.getElementById("txtApellido").value);
});

//añadiendo evento clic al botón mostrar
const btnMostrar = documento.getElementById("btnMostrar");
    btnMostrar.addEventListener("clic", function() {
    //console.log('haciendo clic');3
    //alert("hice clic");
    //recuperando info del formulario
    const nombres = documento.getElementById("txtNombre").valor;
    const apellido = documento.getElementById("txtApellido").valor;
    const cedula = documento.getElementById("txtCedula").valor;
    consola.log('nombres ' +nombres+ ', apellidos ' +apellido+ ', cédula ' + cédula);
});

function hola(nombre, apellido) {
    consola.log(nombre, apellido);
    //Código Reutilizable


}