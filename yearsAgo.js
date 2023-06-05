function yearsAgo(howManyYearsAgo) {
    var date = new Date();
     console.log(date)
      date = date.getFullYear();
      var newFullYear = date - howManyYearsAgo;
      console.log(newFullYear);
      return newFullYear;
      console.log(yearsAgo);
    };