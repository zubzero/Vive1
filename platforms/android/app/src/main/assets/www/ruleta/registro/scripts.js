$(document).ready(function(){
    
    $(".contenedor-formularios").find("input, textarea").on("keyup blur focus", function (e) {

        var $this = $(this),
          label = $this.prev("label");

        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if($this.val() === "") {
                label.removeClass("active highlight"); 
                } else {
                label.removeClass("highlight");   
                }   
        } else if (e.type === "focus") {
            if($this.val() === "") {
                label.removeClass("highlight"); 
            } 
            else if($this.val() !== "") {
                label.addClass("highlight");
            }
        }

    });

    $(".tab a").on("click", function (e) {

        e.preventDefault();

        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        target = $(this).attr("href");

        $(".contenido-tab > div").not(target).hide();

        $(target).fadeIn(600);

    });
    
});

// JavaScript Document
// Función para recoger los datos de PHP según el navegador, se usa siempre.
function objetoAjax(){
    var xmlhttp=false;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
 
    try {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
        xmlhttp = false;
    }
}
 
if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
      xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}
 
//Función para recoger los datos del formulario y enviarlos por post  
function enviarDatosRegistro(){
 
  //div donde se mostrará lo resultados
  // divResultado = document.getElementById('resultado');
 //recogemos los valores de los inputs
  nom = document.registro.nombre.value;
  ape = document.registro.apellido.value;
  nacimiento = document.registro.nacimiento.value;
  correo = document.registro.email.value;
  contrasena = document.registro.contrasena.value;
 
 //  //instanciamos el objetoAjax
 //  ajax=objetoAjax();
 
 //  //uso del medotod POST
 //  //archivo que realizará la operacion
 //  //registro.php
 //  ajax.open("POST", "registro.php",true);
 //  //cuando el objeto XMLHttpRequest cambia de estado, la función se inicia
 //  ajax.onreadystatechange=function() {
 //      //la función responseText tiene todos los datos pedidos al servidor
 //    if (ajax.readyState==4) {
 //        //mostrar resultados en esta capa
 //        divResultado.innerHTML = ajax.responseText
 //        //llamar a funcion para limpiar los inputs
 //        LimpiarCampos();
 //    }
 // }
 //    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
 //    //enviando los valores a registro.php para que inserte los datos
 //    ajax.send("nombre="+nom+"&apellido="+ape+"&web="+web)
    $.ajax({
      method: "POST",
      url: "https://viveenunclick.com/api.php/usuarios",
      data: { nombre: nom, apellidos: ape, email: correo, fecha_nacimiento: nacimiento, contrasena: contrasena, puntos: 80, puntos_registrarse: 80, activo: 1}
    })
      .done(function( msg ) {
        alert( "Se ha registrado con exito!, ahora ya puede acceder");
      });
}
 
//función para limpiar los campos
function LimpiarCampos(){
  document.registro.nombre.value="";
  document.registro.apellido.value="";
  document.registro.nacimiento.value="";
  document.registro.email.value="";
  document.registro.contrasena.value="";
  document.registro.nombre.focus();
}