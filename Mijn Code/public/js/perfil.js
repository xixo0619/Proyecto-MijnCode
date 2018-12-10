$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

//Obtener el usuario logeado
var idUsuario="";
var nombrePerfil="";
var apellidoPErfil="";
var nombreUsuario="";
var imagenPerfil= "";
var tipoPlan= "";

$(document).ready(function (){
  $.ajax({
    url:"/obtener-usuario",
    method:"POST",
    success:function (res) {
      for (var i = 0; i<res.length; i++ ) {
        idUsuario = res[i].id_usuarios;
        nombrePerfil = res[i].nombre;
        apellidoPErfil = res[i].apellido;
        nombreUsuario = res[i].nombre_usuario;
        imagenPerfil = res[i].imagen_perfil;
        tipoPlan = res[i].tipo_planes;
        console.log(
                  idUsuario+", "+
        					nombrePerfil+", "+
        					apellidoPErfil+", "+
        					nombreUsuario+", "+
        					imagenPerfil+", "+
        					tipoPlan
        );
        $("#lbl-usuario").html(nombreUsuario);
        		$("#lbl-datos").html(nombrePerfil+" "+apellidoPErfil);
        		$("#lbl-correo").html(respuesta[i].correo);
        		$("#imagen-card").attr("src",imagenPerfil);
        		if (tipoPlan == 1) {
        			$("#lbl-tipo").html("Gratis");
        		}else if (tipoPlan ==2) {
              $("lbl-tipo").html("Profesional");
            }else{
        			$("#lbl-tipo").html("Enterprise");
        		}
      }
    }
       
  });
  
});



//Cerrar Sesión
$("#btn-cerrar").click(function () {
  $.ajax({
    url:"/sign-out",
    datatype:"json",
    success:function (res) {
      }
  });
  alert("Se cerro sesion")
  window.location.href = "index.html";
})

//Modal Nombre Usuario
function modalNombreUsuario() {
  $("#modalNombre").modal("show");
}

$("#btn-nombre").click(function () {
  var parametros = "nombre_usuario="+ $("txt-nombre-usuario").val();
  $.ajax({
    url: "/actualizar-usuario",
    method: "GET",
    data:parametros,
    datatype:"json",
    success: function (res) {
      console.log(res);
      }
    });
  $("modalNombre").modal("hide");
  location.reload();
})

//Modal Plam de Pago
function modalPlan() {
  $("#modalPlan").modal("show");
}

$("btn-plan").click(function () {
  var parametros = "id_planes="+$("#slc-tipo").val();

  $.ajax({
    url:"/actualizar-plan",
    method: "POST",
    data: parametros,
    datatype: "json",
    success: function (res) {
      console.log(res);
      
    }
  });
  $("#modalPlan").modal("hide");
  location.reload();
});


//Modal Imagen
function modalImagenPerfil() {
  $("#modalImagen").modal("show");
}

$("#btn-imagen").click(function() {
  var parametros = "imagen_perfil="+$("#txt-imagen").val();

  $.ajax({
    url: "/actualizar-imagen",
    method: "POST", 
    data:parametros,
    datatype:"json",
    success: function (res) {
      console.log(res);
    } 
  });
  $("#modalImagen").modal("hide");
    location.reload();
});