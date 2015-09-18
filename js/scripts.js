// var bottleBeer = function(number) {
//   var bottles;
//   var absoluteNumber = Math.abs(number);
//   for (var i=absoluteNumber; i >=1; i--){
//     if( i == 1){
//       bottles = 'bottle';
//     }else {
//       bottles = 'bottles';
//     }
//     console.log(i +" "+bottles+ "of beer on the wall" );
//     if (i<99){
//       console.log(i +" "+bottles+ "of beer on the wall");
//     }
//     console.log(i+" "+bottles+" of beer.");
//     console.log("Take one down.");
//     console.log("Pass it around.");
//     if(i == 1){
//       console.log("No bottles of beer on the wall")
//     }
//   }
//
// };

var bottleSong = function(number) {
  var song = [];
  var absoluteNumber = Math.abs(number);
  for (var i =absoluteNumber; i > 0; i--) {
    song.push(i+ "bottles on the wall,");
    song.push(i+ "bottles of beer.");
    song.push("Take one down and pass it around.");
    console.log(song);
    debugger;
    if(i > 1){
      song.push((i-1)+ "bottles on the wall")
    }else {
      song.push("No more bottles on the wall")
    }
  }
  return song;
};

$(document).ready(function() {
  $("form#Bottles_of_Beer").submit(function(event) {
    var number= parseInt($("input#number").val());
    var result = bottleSong(number);

      $(".result").append(song);
      $("#result").show();
     event.preventDefault();
  });
});
