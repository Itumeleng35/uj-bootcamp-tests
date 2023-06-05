var itemList = [
  {name : 'apples', qty : 10},
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
  {name : 'apples', qty : 3},
];

var results = findItemsOver(itemList, 25)
//results look like this now.
var results = [
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
];


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