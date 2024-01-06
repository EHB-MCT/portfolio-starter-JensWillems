// endpointSchools.js
function CheckSchoolName(name) {
    if (
      name == null ||
      name.length <= 1 ||
      typeof name !== "string" ||
      name.length > 20
    ) {
      return false;
    }
    return true;
  }
  
  module.exports = {
    CheckSchoolName,
  };
  