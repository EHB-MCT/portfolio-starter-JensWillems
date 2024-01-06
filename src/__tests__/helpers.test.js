const {CheckSpellName} = require("../helpers/endpointHelpers.js")

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

test("check sopell name",() => {

expect(CheckSpellName("")).toBe(false);
expect(CheckSpellName(null)).toBe(false);
expect(CheckSpellName("i")).toBe(false);
expect(CheckSpellName(1)).toBe(false);
expect(CheckSpellName("gdfhiljknlmkqmsiiuhgtifuhifsoihsfhssudh")).toBe(false);

expect(CheckSpellName("Jens")).toBe(true);
expect(CheckSpellName("Jens Wil")).toBe(true);
})