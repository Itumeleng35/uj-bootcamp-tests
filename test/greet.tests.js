console.log(greet("Tumi"));
console.log(greet("Xoli"));
console.log(greet("Santorini"));

describe('Test my greet function' , function(){
    it("it should return 'Hello, Tumi' when called with 'Tumi'" , function(){
       
        assert.equal("Hello, Tumi",greet("Tumi"));

        // assert.deepEqual([2,2],[2,2]);
    });



it("it should return 'Hello, Xoli' when called with 'Xoli'" , function(){
       
    assert.equal("Hello, Xoli",greet("Xoli"));
});

});

