/// <reference path="../typings/jasmine/jasmine.d.ts" />
import personModule = require("../src/Person");

describe("Person test", () => {

  it("should have a name", () => {
    console.log("I expect to see this message in console.");
    var person = new personModule.unitTestExample.Person("Joe");
    expect(person.name).toBe("Joe");
  });

});
