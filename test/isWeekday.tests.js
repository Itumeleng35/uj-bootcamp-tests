function isWeekday (dayOfTheWeek) {
    return !dayOfTheWeek.startsWith('S');
  };

  describe('Test my isWeekday function' , function(){
    it("it should return False if the parameter passed in is not a day of the week." , function(){
        assert.equal(isWeekday('Saturday'), false);
    });

    it("it should return False if the parameter passed in is not a day of the week." , function(){
        assert.equal(isWeekday('Sunday'), false);
    });

    it("it should return True if the parameter passed in is a day of the week." , function(){
        assert.equal(isWeekday('Monday'), true);
    });

    it("it should return True if the parameter passed in is a day of the week." , function(){
        assert.equal(isWeekday('Tuesday'), true);
    });

    it("it should return True if the parameter passed in is a day of the week." , function(){
        assert.equal(isWeekday('Wednesday'), true);
    });

    it("it should return True if the parameter passed in is a day of the week." , function(){
        assert.equal(isWeekday('Thursday'), true);
    });

    it("it should return True if the parameter passed in is a day of the week." , function(){
        assert.equal(isWeekday('Friday'), true);
    });
  });
