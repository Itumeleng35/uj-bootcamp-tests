function findItemsOver20(itemList, threshold) {
    const result = [];
    for (let i = 0; i < itemList.length; i++) {
      const item = itemList[i];
      if (item.qty > threshold) {
        result.push(item);
      }
    }
    return result;
  }

  function findItemsOver20(itemList) {
    const result = [];
    for (let i = 0; i < itemList.length; i++) {
      const item = itemList[i];
      if (item.qty > 20) {
        result.push(item);
      }
    }
    return result;
  }

  describe('Test my findItemsOver20 function' , function(){
    it("it should return a string  that takes a list of objects, each object having 2 attributes one called name and the other qty." , function(){
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
       
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        //
        assert.deepEqual(results, findItemsOver20(itemList));
    });

    it("it should return a string  that takes a list of objects, each object having 2 attributes one called name and the other qty." , function(){
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];

        var results2 = [];

        assert.deepEqual(results2, findItemsOver20(itemList2));
    });

    it("it should return a string  that takes a list of objects, each object having 2 attributes one called name and the other qty." , function(){

        var itemList3 = [
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];

        var results3 = [
            {name : 'apples', qty : 40},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];
        assert.deepEqual(results3, findItemsOver20(itemList3));
    });
  });