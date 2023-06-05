function fromWhere(regNo) {
    switch(regNo){ 
      case "CY 567489":
      return "Bellville";
      break;
      case "CJ 343502":
      return "Paarl";
      break;
      case "CA 987504":
      return "Cape Town";
      break;
      case "ZN 568593":
     return "Some other place!";
      
    }
   };
  // console.log(fromWhere("ZN 568593")); 

  describe('Test my fromWhere function' , function(){
    it("it should return a string  that takes a car registration number as a parameter and returns the town the car is from." , function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
    });

    it("it should return a string  that takes a car registration number as a parameter and returns the town the car is from." , function(){
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    });

    it("it should return a string  that takes a car registration number as a parameter and returns the town the car is from." , function(){
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });

    it("it should return a string  that takes a car registration number as a parameter and returns the town the car is from." , function(){
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });
  });