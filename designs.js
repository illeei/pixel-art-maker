// stores and changes the color picker value

$("#pixelCanvas").on("click","td", function() {
  var color=$("#colorPicker").val();
  $(this).css("background-color",color);
});

//creates grid
function makeGrid(event) {
  event.preventDefault();
  $("tr").empty();
  var height=parseInt($('#inputHeight').val(), 10);
  var width=parseInt($('#inputWidth').val(), 10);
  for (var a = 0; a < height; a++) {
    $("#pixelCanvas").append("<tr></tr>");
    for (var b = 0; b < width; b++) {
        $("tr").eq(a).append("<td></td>");
  }
}
};

//calls the makeGrid function
$("#submit").click(makeGrid);
