// helpers.test.js
const { CheckSpellName } = require("../../helpers/endpointSpells.js");

test("check spell name", () => {
  // Invalid spell names
  expect(CheckSpellName("")).toBe(false);
  expect(CheckSpellName(null)).toBe(false);
  expect(CheckSpellName("i")).toBe(false);
  expect(CheckSpellName(1)).toBe(false);
  expect(CheckSpellName("gdfhiljknlmkqmsiiuhgtifuhifsoihsfhssudh")).toBe(false);

  // Valid spell names
  expect(CheckSpellName("Jens")).toBe(true);
  expect(CheckSpellName("Jens Wil")).toBe(true);
  expect(CheckSpellName("Fireball")).toBe(true);
  expect(CheckSpellName("Lightning Bolt")).toBe(true);
});
