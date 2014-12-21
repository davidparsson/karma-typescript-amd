/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../src/Person.ts" />

describe("Person test", () => {

  it("should have a name", () => {
    console.log("I expect to see this message in console.");
    var person = new unitTestExample.Person("Joe");
    expect(person.name).toBe("Joe");
  });

});
