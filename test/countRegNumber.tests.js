function countRegNumber(regNo) {
    //var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
     let pass1 = regNo.split(",");
     console.log(pass1.length)
   return pass1.length  
   };

   //console.log(countRegNumber);

   describe('Test my countRegNumber function' , function(){
    it("it should return the number of registration numbers in the string." , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });

    it("it should return the number of registration numbers in the string." , function(){
        var regCount = countRegNumber('CA 182736')
    assert.equal(regCount, 1);
    });
});