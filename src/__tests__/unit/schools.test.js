// schools.test.js
const { CheckSchoolName } = require("../../helpers/endpointSchools.js");

test("check school name", () => {
  // Invalid school names
  expect(CheckSchoolName("")).toBe(false);
  expect(CheckSchoolName(null)).toBe(false);
  expect(CheckSchoolName("i")).toBe(false);
  expect(CheckSchoolName(1)).toBe(false);
  expect(CheckSchoolName("gdfhiljknlmkqmsiiuhgtifuhifsoihsfhssudh")).toBe(false);

  // Valid school names
  expect(CheckSchoolName("Evocation")).toBe(true);
  expect(CheckSchoolName("Abjuration")).toBe(true);
  expect(CheckSchoolName("Necromancy")).toBe(true);
  expect(CheckSchoolName("Divination")).toBe(true);
});