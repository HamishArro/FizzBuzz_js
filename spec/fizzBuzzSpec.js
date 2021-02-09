describe("FizzBuzz", function() {
  var subject;

  beforeEach(function() { subject = new FizzBuzz; });

  it("returns Fizz when 3 is entered", function() {
    expect(subject.input(3)).toEqual('Fizz');
  });

  it("returns Buzz when 5 is entered", function() {
    expect(subject.input(5)).toEqual('Buzz');
  });

  it("returns FizzBuzz when 15 is entered", function() {
    expect(subject.input(15)).toEqual('FizzBuzz');
  });

  it("returns 2 when 2 is entered", function() {
    expect(subject.input(2)).toEqual(2);
  });

});
