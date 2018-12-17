$("#btn-cerrar-dos").click(function () {
    $.ajax({
      url:"/sign-out",
      datatype:"json",
      success:function (res) {
        }
    });
    
    window.location.href = "index.html";
  })
 
 //Modales
 function modalCarpeta(){
     $("#modalNuevaCarpeta").modal("show");
 }

$("#btn-carpeta").click(function () {
    var parametros = "nombre_carpeta="+$("txt-nombre-carpeta").val();
    var parametros = "nombre_carpeta"+$("txt-nombre-carpeta").val();

    $.ajax({
        url: "/carpeta",
        method: "POST",
        data: parametros,
        datatype:"json",
        success: function(res){
            console.log(res);
        }

    });
    $("#modalNuevaCarpeta").modal("hide");
    location.reload();
});

 function modalArchivo(){
     $("#modalNuevoArchivo").modal("show");
 }

$("#btn-archivo").click(function() {

    var parametros = "nombre_archivo="+$("#txt-nombre-archivo").val();
                     "$id_lenguajes="+$("#slc-lenguaje").val();
                     "$id_carpetas="+carpetaId;

    var parametros = "nombre_archivo"+$("#txt-nombre-archivo").val();
                     "$id_lenguajes"+$("#slc-lenguaje").val();
                     "$id_carpetas"+carpetaId;

    $.ajax({
        url: "/archivo",
        method:"POST",
        data: parametros,
        datatype:"json",
        success: function(res) {
            console.log(res);
        }
    });                 
    $("#modalNuevoArchivo").modal("hide");
});