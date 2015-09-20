
describe('bottleSong', function() {
  it("uses correct last line", function() {
    expect(bottleSong(1)).to.equal("1bottles of beer on the wall,1bottles of beer.Take one down and pass it around,No more bottles on the wall,no more bottles of beer.Go to store and but some more,1bottles of beer on the wall.");
  });

  it("converts the negative number to absolute number", function() {
    expect(bottleSong(-1)).to.equal("1bottles of beer on the wall,1bottles of beer.Take one down and pass it around,No more bottles on the wall,no more bottles of beer.Go to store and but some more,1bottles of beer on the wall.");
  });

  it("returns for 2 bottles", function() {
    expect(bottleSong(2)).to.equal("2bottles of beer on the wall,2bottles of beer.Take one down and pass it around,1bottles on the wall.1bottles of beer on the wall,1bottles of beer.Take one down and pass it around,No more bottles on the wall,no more bottles of beer.Go to store and but some more,2bottles of beer on the wall.");
  });
});
