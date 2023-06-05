function countAllPaarl(regNumbers) {
    var regNumbersList = regNumbers.split(","); // Split the string into an array of registration numbers
    var count = 0; // Initialize the counter to 0
  
    for (var i = 0; i < regNumbersList.length; i++) {
      var currentRegNumber = regNumbersList[i].trim(); // Trim any leading or trailing spaces from the current registration number
      if (currentRegNumber.startsWith("CJ")) { // Check if the registration number belongs to Paarl
        count++; // Increment the counter if it does
      }
    }
    return count; // Return the final count
}
var regNumbers = "CA 182736,CY 523519,CJ 812328,CJ 246846,CJ 489753";
var count = countAllPaarl(regNumbers);
console.log(count); // This will output 3

describe('Test my countAllPaarl function' , function(){
    it("it should return a parameter string with registration numbers separated with commas and returns the number of registration numbers in the string for Paarl." , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });

   
        it("it should return a parameter string with registration numbers separated with commas and returns the number of registration numbers in the string for Paarl." , function(){
            assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
        });
    });
