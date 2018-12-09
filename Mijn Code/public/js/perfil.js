$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

function modalNombreUsuario() {
  $("#modalNombre").modal("show");
}

function modalPlan() {
  $("#modalCuenta").modal("show");
}

function modalImagenPerfil() {
  $("#modalImagen").modal("show");
}