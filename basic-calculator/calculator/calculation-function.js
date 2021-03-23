$(document).ready(function () {
  // Set by default on page load
  $("#reset").attr("checked",true);
  var defOperation = "+";
  $reset=true;
  $(".result").val("0");

  // Calculate the two numbers with the given operator
  function evaluate() {
    $num1 = $.trim($(".num1").val()) != "" && !isNaN($(".num1").val()) ? parseFloat($(".num1").val()) : 0;
    $num2 = $.trim($(".num2").val()) != "" && !isNaN($(".num2").val()) ? parseFloat($(".num2").val()): 0;
    $(".result").val(defOperation=="/" && $num1==0 && $num2==0 ? 0 : eval($num1 + defOperation + $num2));
  }

  // Call evaluate funtion when keyup
  $(".holder").keyup(function () {
    evaluate();
  });

//   Checkbox for resetting the fields
  $("#reset").click(function () {
    if ($("#reset").is(":checked")) {
      $reset = true;
    } else {
      $reset = false;
    }
  });

  $("label .clear").click(function () {
    $("#reset").click()
  });


  // Making a function for operator selector
  window.operation = function (operation) {
    switch (operation) {
      case "+":
        defOperation = "+";
        $("#opTitle").html("Addition");
        $(".card-header").css({ "background-color": "rgb(11, 0, 114)" });
        reset();
        break;
      case "-":
        defOperation = "-";
        $("#opTitle").html("Subtraction");
        $(".card-header").css({ "background-color": "rgb(187, 75, 1)" });
        reset();
        break;
      case "*":
        defOperation = "*";
        $("#opTitle").html("Multiplication");
        $(".card-header").css({ "background-color": "rgb(29, 112, 1)" });
        reset();
        break;
      case "/":
        defOperation = "/";
        $("#opTitle").html("Division");
        $(".card-header").css({ "background-color": "rgb(114, 0, 114)" });
        reset();
        break;
    }
    evaluate();
  };


  // Reset all fields
  function reset() {
    if ($reset){
        $(".num1").val("")
        $(".num2").val("");
        $(".result").val("0");
    }
   
  }
});

// For floating button
$(document).ready(function () {
  $(".floatingButton").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("open");
    if ($(this).children(".fa").hasClass("fa-plus")) {
      $(this).children(".fa").removeClass("fa-plus");
      $(this).children(".fa").addClass("fa-close");
    } else if ($(this).children(".fa").hasClass("fa-close")) {
      $(this).children(".fa").removeClass("fa-close");
      $(this).children(".fa").addClass("fa-plus");
    }
    $(".floatingMenu").stop().slideToggle();
  });

  $(".floatingMenu a").on("click", function () {
    $(".floatingMenu").stop().slideToggle();
  });

  $(this).on("click", function (e) {
    var container = $(".floatingButton");
    if (
      !container.is(e.target) &&
      $(".floatingButtonWrap").has(e.target).length === 0
    ) {
      if (container.hasClass("open")) {
        container.removeClass("open");
      }
      if (container.children(".fa").hasClass("fa-close")) {
        container.children(".fa").removeClass("fa-close");
        container.children(".fa").addClass("fa-plus");
      }
      $(".floatingMenu").hide();
    }
  });
});
