var icecream = [];
var flavor = [];

$(document).ready(function() {
  $("form#ice").submit(function(event) {
    icecream.push($("input#name").val());
    alert (icecream);
    flavor.push($("input#flavor").val());
    icecream.forEach(function(name1) {
      alert("Your name" + name1);

    flavor.forEach(function(flavor1) {
      alert("Your flavor " +flavor1);
    });

    });
    event.preventDefault();
  });


});
