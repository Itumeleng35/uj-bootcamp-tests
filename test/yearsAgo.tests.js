function yearsAgo(howManyYearsAgo) {
    var date = new Date();
     console.log(date)
      date = date.getFullYear();
      var newFullYear = date - howManyYearsAgo;
      console.log(newFullYear);
      return newFullYear;
      console.log(yearsAgo);
    };

    describe('Test my yearsAgo function' , function(){
      it("it should take in a year and return how many years ago that year is from the current year." , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
      });

      it("it should take in a year and return how many years ago that year is from the current year." , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
      });
    });
