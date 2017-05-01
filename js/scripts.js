$(function() {
  $("#form-group").submit(function(event) {
    $("#form-group").hide();
      var item = ["itemOne", "itemTwo"];
      var upperItems = item.map(function(item) {
        return $("input#" +item).val().toUpperCase();
      });

      upperItems.sort();
      upperItems.forEach(function(upperItem) {
        $("ul").append("<li>" + upperItem + "</li>");
      });

  event.preventDefault();
  });
});
