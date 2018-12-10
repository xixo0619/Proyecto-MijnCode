function modalLoginModal() {
    $("#loginModal").modal("show");
  }


$("btn-login").click(function() {
    $.ajax({
        url:"/login",
        data:"usuario="+$("#login-usuario").val()+"&contrasena="+$("#login-contrasena").val(),
        method:"POST",
        dataType:"json",
        success:function(respuesta){
            if (respuesta.estatus == 0)
                //alert("Credenciales correctas");    
                window.location.href ="panel.html";
            else
                alert("Credenciales incorrectas");
            console.log(respuesta);
        }
    });
});


$("#btn-registro-usuario").click(function(){
    var parametros = "nombre_usuario"+$("#txt-usuario").val() + "&" + 
                     "nombre="+$("#txt-nombre").val() + "&" +
                     "apellido="+$("#txt-apellido").val() + "&" +
                     "correo="+$("#txt-correo").val() + "&" +
                     "contrasena="+$("#txt-contrasena").val();
    $.ajax({
        url: "/registro",
        method: "POST",
        data: parametros,
        datatype:"json",
        success: function(res){
            console.log($("#txt-usuario").val());
            $("#txt-nombre").val("");
            $("#txt-apellido").val("");
            $("#txt-correo").val("");
            $("#txt-usuario").val("");
            $("#txt-contrasena").val(""); 
        }   
    })       
    alert("Registrado exitosamente");             
});