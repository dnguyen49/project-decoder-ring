// Write your tests here!
let substitution = require("../src/substitution.js").substitution;
let expect = require("chai").expect;

describe("substitution", () => {
  it("should encode as described in the passing requirements in the previous lesson", () => {
    const test1 = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
    expect(test1).to.equal("ykrrpik");
  });
});
