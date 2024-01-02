const {CheckStudentName} = require("../helpers/endpointHelpers.js")

// test('adds 1 + 2 to equal 3', () => {
//     expect(1+2).toBe(3);
//   });

/**
table.uuid('UUID');
table.string('name');
table.integer('age');
table.string('classgroup');
table.double('grade');
 */

test("check name",() => {

expect(CheckStudentName("")).toBe(false);
expect(CheckStudentName(null)).toBe(false);
expect(CheckStudentName("i")).toBe(false);
expect(CheckStudentName(1)).toBe(false);
expect(CheckStudentName("gdfhiljknlmkqmsiiuhgtifuhifsoihsfhssudh")).toBe(false);

expect(CheckStudentName("Jens")).toBe(true);
expect(CheckStudentName("Jens Wil")).toBe(true);
})