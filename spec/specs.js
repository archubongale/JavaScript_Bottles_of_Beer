
describe('bottleSong', function() {
  it("returns for zero number", function() {
    expect(bottleSong(0)).to.equal("No more bottles on the wall,no more bottles of beer. Go to store and but some more,0bottles of beer on the wall.");
  });

  it("uses correct last line for number 1", function() {
    expect(bottleSong(1)).to.equal("1 bottles of beer on the wall,1 bottles of beer.Take one down and pass it around, 0 bottles on the wall.No more bottles on the wall,no more bottles of beer. Go to store and but some more,1bottles of beer on the wall.");
  });

  it("takes the absolute value of the number", function() {
    expect(bottleSong(-1)).to.equal("1 bottles of beer on the wall,1 bottles of beer.Take one down and pass it around, 0 bottles on the wall.No more bottles on the wall,no more bottles of beer. Go to store and but some more,1bottles of beer on the wall.");
  });

  it("returns for 2 bottles", function() {
    expect(bottleSong(2)).to.equal("2 bottles of beer on the wall,2 bottles of beer.Take one down and pass it around, 1 bottles on the wall.1 bottles of beer on the wall,1 bottles of beer.Take one down and pass it around, 0 bottles on the wall.No more bottles on the wall,no more bottles of beer. Go to store and but some more,2bottles of beer on the wall.");
  });
});
