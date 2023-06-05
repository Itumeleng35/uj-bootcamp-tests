function isFromBellville(registrationNumber) {
    return registrationNumber.startsWith('CY');
  }
  
 
 console.log(isFromBellville);

describe('Test my isFromBellville function' , function(){
    it("it should return 'True, when called with 'CY'" , function(){
       
        assert.equal(isFromBellville('CY 123'), true);
             
    });

    it("it should return 'False, when not called with 'CY'" , function(){

        assert.equal(isFromBellville('CJ 123'), false);
    });
});