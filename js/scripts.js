var bottleSong = function(number) {
  var song = [];
  var absoluteNumber = Math.abs(number);
  for (var i =absoluteNumber; i >= 0; i--) {

    if(i > 0){
      song.push( i + " bottles of beer on the wall,");
      song.push( i + " bottles of beer.");
      song.push( "Take one down and pass it around, ");

      song.push( (i-1) + " bottles on the wall.");
    }else{
      song.push("No more bottles on the wall,");
      song.push("no more bottles of beer. Go to store and but some more," + absoluteNumber + "bottles of beer on the wall.");
    }
  }
  return song.join("");
};

$(document).ready(function() {
  $("form#Bottles_of_Beer").submit(function(event) {
    var number= parseInt($("input#number").val());
    var result = bottleSong(number);

      $(".output").text(result);
      $("#result").show();
     event.preventDefault();
  });
});
