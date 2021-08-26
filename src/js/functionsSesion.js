
/// HOME

function validacionSesion2(nameCheck, mensaje){
    
    if($(nameCheck).prop("checked") == false){
        $(nameCheck).siblings(".error-input").remove();
        $(nameCheck).parents(".checkboxes").append('<span class="error-input">'+mensaje+'</span>');
    }
   
    else {
        $(nameCheck).siblings(".error-input").remove();
    }
    
    $(".checkmark").on("click", function () {
      if ($(this).siblings("input").prop("checked") == false) {
        $(this).siblings("input").prop("checked",true);
      } else {
        $(this).siblings("input").prop("checked", false);
        $(this).siblings(".error-input").remove();
      }
    });
}

$(function(){
    
    $("#modalDefault").modal().show;
    
    $('.botonera a').on("click", function () {
        var checkEdad = $("#checkEdad"),
            checkLegales = $("#checkLegale");
            
        validacionSesion2(checkEdad,"Debes ser mayor de edad");
        validacionSesion2(checkLegales,"Debes aceptar los términos y condiciones.");

    
         // VALIDATE ALL

        if ($(".modal-sesion .error-input").length == 0) {
          //console.log("hecho");
          return true;

        } else {
          //console.log("no hecho");
          return false;
        }
       
        
    });
     
//  $('.botonera a').on("click", function () {
        
//          if ($("#exampleCheck1").prop("checked") == false) {
//            $(".error-input").remove();
//            $(".privacy").append(
//              '<span class="error-input"> Debes aceptar los términos y condiciones. </span>'
//            );

//            return false;
//          }

//         else{
//             return true;
//         }
//  });
    
    
});

    

