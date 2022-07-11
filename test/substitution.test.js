// Write your tests here!
let substitution = require("../src/substitution.js").substitution;
let expect = require("chai").expect;

describe("substitution", () => {
  it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
    const test1 = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
    expect(test1).to.equal("ykrrpik");
  });
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    const test2 = substitution("message", "plmoknijbuhvygctfxrdzesw");
    expect(test2).to.equal(false);
  });
  it("should return false if there are any duplicate characters in the given alphabet", () => {
    const test3 = substitution("message", "ppmoknijbuhvygctfxrdzeswaq");
    expect(test3).to.equal(false);
  });
  it("should maintain spaces in the message, before and after encoding or decoding", () => {
    const message = "my message";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const actual = substitution(message, alphabet);
    const expected = "yp ysii.rs";

    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const input1 = "A Message";
    const input2 = "a message";
    expect(substitution(input1)).to.equal(substitution(input2));
  });
});
