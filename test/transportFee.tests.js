function transportFee(rightPrice) {
    switch(rightPrice) {
      case "morning":
        return "R20";
        break;
      case "afternoon":
        return "R10";
        break;
      case "nightshift":
        return "free";
        break;
                     }
  };
  //console.log(transportFee(R20));

  describe('Test my transportFee function' , function(){
    it("it should return the right price based on the shift you are working." , function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it("it should return the right price based on the shift you are working." , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it("it should return the right price based on the shift you are working." , function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});

