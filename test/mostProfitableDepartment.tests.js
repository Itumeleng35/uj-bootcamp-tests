function mostProfitableDepartment (profitDept) {
    const result = {}
    for (var i=0; i<profitDept.length; i++) {
      let sales1 = profitDept[i].sales //this is dot notation, because we want to access the value of sales
      const deptList = profitDept[i].department
      if (result[deptList]) {   //add keys to an object by using bracket notation, we use dot notation to access a key
        result[deptList] += sales1 
      }
      else{result[deptList] = sales1} //if the dept isn't there, we are instructing it to be there and it should be equal to sales
    }
      //console.log(result)
    let highDept = ''
    let highSales = 0
    for (let deptList in result) {
      if (result[deptList] > highSales) { //dept list in this context access the value of the key called department
      highSales = result[deptList] 
        highDept = deptList
      }
    }
    return highDept
   
  }
  //
   console.log(mostProfitableDepartment([
      {department : 'hardware', sales : 4500, day : 'Monday'},
      {department : 'outdoor', sales : 1500, day : 'Monday'},
      {department : 'carpentry', sales : 5500, day : 'Monday'},
      {department : 'hardware', sales : 7500, day : 'Tuesday'},
      {department : 'outdoor', sales : 2505, day : 'Tuesday'},
      {department : 'carpentry', sales : 1540, day : 'Tuesday'},
      {department : 'hardware', sales : 1500, day : 'Wednesday'},
      {department : 'outdoor', sales : 8507, day : 'Wednesday'},
      {department : 'carpentry', sales : 8009, day : 'Wednesday'},
      {department : 'hardware', sales : 12000, day : 'Thursday'},
      {department : 'outdoor', sales : 18007, day : 'Thursday'},
      {department : 'carpentry', sales : 6109, day : 'Thursday'},
      {department : 'hardware', sales : 7005, day : 'Friday'},
      {department : 'outdoor', sales : 12006, day : 'Friday'},
      {department : 'carpentry', sales : 16109, day : 'Friday'},
  ]));
  
  function mostProfitableDay (profitDay) {
    const result = {}
    for (var i=0; i<profitDay.length; i++) {
      let sales2 = profitDay[i].sales
      const daysList = profitDay[i].day
      if (result[daysList]) {
        result[daysList] += sales2
      }
      else{result[daysList] = sales2}
    }
    //console.log(result)
  let highDay = '' // we are looking for the DAY but we don't know which one it is at this point, so we create an empty string
  let highSales = 0
  for (let daysList in result) { //syntax for looping through objects(results)
    if (result[daysList] > highSales) {
      highSales = result[daysList]
      highDay = daysList
    }
  }
    return highDay
  }
  console.log(mostProfitableDay([{department : 'electronics', sales : 4500, day : 'Monday'},
      {department : 'outdoor', sales : 1500, day : 'Monday'},
      {department : 'carpentry', sales : 5500, day : 'Monday'},
      {department : 'steelwork', sales : 7500, day : 'Tuesday'},
      {department : 'outdoor', sales : 2505, day : 'Tuesday'},
      {department : 'carpentry', sales : 1540, day : 'Tuesday'},
      {department : 'hardware', sales : 1500, day : 'Wednesday'},
      {department : 'outdoor', sales : 8507, day : 'Wednesday'},
      {department : 'carpentry', sales : 8009, day : 'Wednesday'},
      {department : 'hardware', sales : 12000, day : 'Thursday'},
      {department : 'carpentry', sales : 6109, day : 'Thursday'},
      {department : 'hardware', sales : 7005, day : 'Friday'},
      {department : 'electronics', sales : 12006, day : 'Friday'},
      {department : 'electronics', sales : 16109, day : 'Saturday'},
      {department : 'steelwork', sales : 7500, day : 'Tuesday'},
      {department : 'outdoor', sales : 2505, day : 'Tuesday'},
      {department : 'carpentry', sales : 1540, day : 'Tuesday'},
      {department : 'steelwork', sales : 1500, day : 'Wednesday'},
      {department : 'carpentry', sales : 8009, day : 'Wednesday'},
  ]));

  describe('Test my mostProfitableDepartment function' , function(){
    it("it should  determine which of their departments are the most profitable and which day of the week is the most profitable." , function(){

        var salesData = [
            {department : 'hardware', sales : 4500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 5500, day : 'Monday'},
            {department : 'hardware', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'hardware', sales : 1500, day : 'Wednesday'},
            {department : 'outdoor', sales : 8507, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
            {department : 'hardware', sales : 12000, day : 'Thursday'},
            {department : 'outdoor', sales : 18007, day : 'Thursday'},
            {department : 'carpentry', sales : 6109, day : 'Thursday'},
            {department : 'hardware', sales : 7005, day : 'Friday'},
            {department : 'outdoor', sales : 12006, day : 'Friday'},
            {department : 'carpentry', sales : 16109, day : 'Friday'},
        ];
        
        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");
    });

    it("it should  determine which of their departments are the most profitable and which day of the week is the most profitable." , function(){
        var salesData2 = [
            {department : 'electronics', sales : 4500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 5500, day : 'Monday'},
            {department : 'steelwork', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'hardware', sales : 1500, day : 'Wednesday'},
            {department : 'outdoor', sales : 8507, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
            {department : 'hardware', sales : 12000, day : 'Thursday'},
            {department : 'carpentry', sales : 6109, day : 'Thursday'},
            {department : 'hardware', sales : 7005, day : 'Friday'},
            {department : 'electronics', sales : 12006, day : 'Friday'},
            {department : 'electronics', sales : 16109, day : 'Saturday'},
            {department : 'steelwork', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'steelwork', sales : 1500, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
        ];
        


        assert.equal('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");
    });
    
    it("it should  determine which of their departments are the most profitable and which day of the week is the most profitable." , function(){

        var salesData = [
            {department : 'hardware', sales : 4500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 5500, day : 'Monday'},
            {department : 'hardware', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'hardware', sales : 1500, day : 'Wednesday'},
            {department : 'outdoor', sales : 8507, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
            {department : 'hardware', sales : 12000, day : 'Thursday'},
            {department : 'outdoor', sales : 18007, day : 'Thursday'},
            {department : 'carpentry', sales : 6109, day : 'Thursday'},
            {department : 'hardware', sales : 7005, day : 'Friday'},
            {department : 'outdoor', sales : 12006, day : 'Friday'},
            {department : 'carpentry', sales : 16109, day : 'Friday'},
        ];
        

        assert.equal('Thursday', mostProfitableDay(salesData), "Most profitable day is 'Thursday' for dataset 1");
    });

    it("it should  determine which of their departments are the most profitable and which day of the week is the most profitable." , function(){

        var salesData2 = [
            {department : 'electronics', sales : 4500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 5500, day : 'Monday'},
            {department : 'steelwork', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'hardware', sales : 1500, day : 'Wednesday'},
            {department : 'outdoor', sales : 8507, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
            {department : 'hardware', sales : 12000, day : 'Thursday'},
            {department : 'carpentry', sales : 6109, day : 'Thursday'},
            {department : 'hardware', sales : 7005, day : 'Friday'},
            {department : 'electronics', sales : 12006, day : 'Friday'},
            {department : 'electronics', sales : 16109, day : 'Saturday'},
            {department : 'steelwork', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'steelwork', sales : 1500, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
        ];
        
        assert.equal('Wednesday', mostProfitableDay(salesData2), "Most profitable day is 'Wednesday' for dataset 2");
    });
  });

    
