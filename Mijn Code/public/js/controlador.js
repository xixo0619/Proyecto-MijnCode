function modalLoginModal() {
    $("#loginModal").modal("show");
  }



/*$("btn-login").click(function() {

$("btn-login").click(function() {

    $.ajax({
        url:"/login",
        data:"usuario="+$("#login-usuario").val()+"&contrasena="+$("#login-contrasena").val(),
        method:"POST",
        dataType:"json",
        success:function(res){
            if (res.estatus == 1)
                //alert("Credenciales correctas");    
                window.location.href ="panel.html";
            else
                alert("Credenciales incorrectas");
            console.log(res);
        }
    });
});*/


$("#btn-login").click(function () {
    console.log($("#formulario").serialize());
    $.ajax({
        url:"/login",
        method:"POST",
        data:$("#formulario").serialize(),
        dataType:"json",
        success:function(res){
            console.log(res);
            if (res.length == 1)
                window.location.href = "/panel.html";
            else 
                alert("Credenciales invalidas");
        },
        error:function(err){
            console.error(err);
        }
    });

    
});


$("#btn-registro-usuario").click(function(){

    var parametros = "nombre"+$("#txt-nombre").val() + "&" + 
                     "apellido="+$("#txt-apellido").val() + "&" +
                     "correo="+$("#txt-correo").val() + "&" +
                     "nombre_usuario="+$("#txt-usuario").val() + "&" +

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