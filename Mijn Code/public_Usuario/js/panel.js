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
function modalSnipet() {
    $("#modalNuevoSnipet").modal("show");
    
}

function modalArea() {
    $("#modalArea").modal("show");
    
}

function cargarCarpetas() {
    $.ajax({
        url: "/obtener-carpetas",
        method:"GET",
        dataType:"json",
        success: function (res) {
            console.log(res);
            for (var i = 0; i < res.length; i++){
                $("#cargar-carpetas").append(
                    `<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div>
                      <img src="img/carpetas/carpeta.png" id="carpeta"><br>
                      <b>${res[i].nombre_carpeta}</b>
                    </div>
                  </div>`
                )
            }
            
        }

    });
}

function cargarArchivos() {
    $.ajax({
        url:"/obtener-archivos",
        method: "GET",
        dataType: "json",
        success: function (res) {
            for(var i = 0; i< res.length;i++){
                $("#cargar-carpetas").append(
                    `<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div>
                        <img src="img/carpetas/archivos.png" id="archivo"><br>
                        <b>${res[i].nombre_archivo}</b>
                      </div>
                    </div>`
                )

            }
        }
    })
    
}

$(document).ready(function() {
    cargarCarpetas();
});
    