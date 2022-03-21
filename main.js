$(document).ready(function () {
    $("#yourOrder").hide();
    $("#orderBtn").click(function () {
      $("#yourOrder").show();
      $("#makeOrder").hide();
    });
  
    $("#backToOrderBtn").click(function () {
      $("#pizzaToppings").val("").trigger("change");
      $("#makeOrder").show();
      $("#yourOrder").hide();
    });
  
    //initialize select2 drop down menu
    $(".js-example-basic-multiple").select2();
  });