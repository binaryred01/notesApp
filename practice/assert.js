var assert = {
  isTrue: function(assertionToCheck, testName) {
    debugger; 
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + testName + " is not truthy");
    }
    console.log(testName + "Passed")
  }
};
