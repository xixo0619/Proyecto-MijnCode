function modalLoginModal() {
    $("#loginModal").modal("show");
  }

function modalRegistro() {
    $("#modalRegistro").modal("show");
    
}


//Registro de usuarios del modal login.html
$("#btn-registro-modal").click(function() {

$("#btn-registro-modal").click(function() {

    var parametros = "nombre="+$("#nombre").val() + "&" +
                     "apellido="+$("#apellido").val() + "&" +
                     "correo="+$("#correo").val()+ "&" +
                     "nombre_usuario="+$("#usuario").val()+ "&" +
                     "contrasena="+$("#contrasena").val();

    $.ajax({
        url: "/registro2",
        method:"GET",
        data: parametros,
        dataType: "json",
        success: function (res) {
            console.log();
            $("#nombre").val("");
            $("#apellido").val("");
            $("#correo").val("");
            $("#usuario").val("");
            $("#contrasena").val(""); 
            
        }
    })                 
    
})

//Login del modal de index.html
/*$("btn-login").click(function() {
    console.log($("#formulario"),serialize());
    $.ajax({


    var parametros = "nombre"+$("#nombre").val() + "&" +
                     "apellido"+$("#apellido").val() + "&" +
                     "correo"+$("#correo").val()+ "&" +
                     "nombre_usuario"+$("#usuario").val()+ "&" +
                     "contrasena"+$("#contrasena").val();

    $.ajax({
        url: "/registro2",
        method:"GET",
        data: parametros,
        dataType: "json",
        success: function (res) {
            console.log();
            $("#nombre").val("");
            $("#apellido").val("");
            $("#correo").val("");
            $("#usuario").val("");
            $("#contrasena").val(""); 
            
        }
    })                 
    
})


$("btn-login").click(function() {
    console.log($("#formulario"),serialize());

$("btn-login").click(function() {
    console.log($("#formulario"),serialize());



/*$("btn-login").click(function() {

$("btn-login").click(function() {



    $.ajax({

        url:"/login2",
        data:$("#formulario").serialize(),
        method:"POST",
        dataType:"json",
        success:function(res){

            if (res.estatus ==1)


            if (res.estatus ==1)


            if (res.estatus ==1)

            if (res.estatus == 1)



                //alert("Credenciales correctas");    
                window.location.href ="panel.html";
            else
                alert("Credenciales incorrectas");
            console.log(res);

        },
        error:function(err){
            console.error(err);
        }
    });

});*/

//Login del modla de login.hmtl
});

$("#btn-login-dos").click(function () {
    console.log($("#formulario-login").serialize());
    $.ajax({
        url:"/login2",
        method:"POST",
        data:$("#formulario-login").serialize(),
        dataType:"json",
        success:function(res){
            console.log(res);
            if (res.length == 1)
                window.location.href ="/panel.html";
            else 
                alert("Credenciales invalidas");

        },
        error:function(err){
            console.error(err);
        }
    });

    
});


$("#btn-login").click(function(){
    $.ajax({
        url:"/login2",
        data:"nombre_usuario="+$("#login-usuario").val()+"&contrasena="+$("#login-contrasena").val(),
        method:"POST",
        dataType:"json",
        success:function(respuesta){
            if (respuesta.estatus == 1)
                //alert("Credenciales correctas");    
                window.location.href ="Home.html";
            else
                alert("Credenciales incorrectas");
            console.log(respuesta);



/*$("#btn-registro-usuario").click(function(){

$("#btn-login-dos").click(function () {
    console.log($("#formulario-login").serialize());
    $.ajax({
        url:"/login2",
        method:"POST",
        data:$("#formulario-login").serialize(),
        dataType:"json",
        success:function(res){
            console.log(res);
            if (res.length == 1)
                window.location.href ="/panel.html";
            else 
                alert("Credenciales invalidas");
        },
        error:function(err){
            console.error(err);
        }
    });

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



/*$("#btn-registro-usuario").click(function(){

$("#btn-registro-usuario").click(function(){



    console.log($("#formulario-registro").serialize());
    /*var parametros = "nombre"+$("#txt-nombre").val() + "&" + 
                     "apellido="+$("#txt-apellido").val() + "&" +
                     "correo="+$("#txt-correo").val() + "&" +
                     "nombre_usuario="+$("#txt-usuario").val() + "&" +
                     "contrasena="+$("#txt-contrasena").val();*/


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
        method: "GET",
        data:$("#formulario-login").serialize(),
        datatype:"json",
        success: function(res){


            console.log(res)
            /*console.log($("#txt-usuario").val());


            console.log(res)
            /*console.log($("#txt-usuario").val());


            console.log(res)
            /*console.log($("#txt-usuario").val());

            console.log($("#txt-usuario").val());



            $("#txt-nombre").val("");
            $("#txt-apellido").val("");
            $("#txt-correo").val("");
            $("#txt-usuario").val("");

            $("#txt-contrasena").val("");
        }   
    })       
             
});*/


            $("#txt-contrasena").val("");
        }   
    })       
             
});*/

            $("#txt-contrasena").val("");*/ 
        }   
    })       

    alert("Registrado exitosamente");             

});


