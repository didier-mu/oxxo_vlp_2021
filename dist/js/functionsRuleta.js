$(function(){

  //// GIRO

  var urlCupon;

  function randomCupon() {
    $("#ala").addClass("giroActivo");

    var x = Math.floor(Math.random() * 3 + 1);
    // var x = 3;

    console.log(x);

    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    function initLogin() {
      if (window.jQuery) {
        if ($("#logout_btn").length == 1) {
          // $(".linkLogin").hide();
          // $(".linkContinuar").show();
          if (getCookie("feria") == 1) {
            // document.location.href="/concursos/sombrero-cuponero/registro";

            $(".linkCupon").on("click", function () {
              $(".modal-felicidades").hide(1);
              $(".modal-cupon").show(1);
            });
          }
        } else {
          // $(".linkLogin").show();
          // $(".linkContinuar").attr("style", "display: none !important");

          $(".linkCupon").on("click", function () {
            $(".modal-felicidades").hide(1);
            $(".modal-sesion").show(1);
          });
        }
      } else {
        setTimeout(function () {
          initLogin();
        }, 2);
      }
    }

    var resp = initLogin();

    setTimeout(function () {
      switch (x) {
       
        /// CUPON NORMAL
        case 1:
          $("#ala").addClass("giro4");
          $("#cupon").attr("src", "../img/cupon.jpeg");
          urlCupon = "/promoxxo/getcoupon/3e0026ae6abc5fc982ec1100678d7588";

          setTimeout(function () {
            $("#modalCupon").modal("show");
          }, 5500);

          break;

        default:
          $("#ala").addClass("giro1");
          setTimeout(function () {
            $("#modalDefault").modal("show");
          }, 5500);

          break;
      }
    }, 0);
  }

  $("#botonGirar").on("click", function () {
    randomCupon();
  });



  $("#modalDefault .btnOn, .closeModal").on("click", function () {
    $("#ala").attr("class", "img-fluid");
    $(".modal-felicidades").show(1);
    $(".modal-cupon").hide();
    $(".modal-sesion").hide(0);
  });
});
