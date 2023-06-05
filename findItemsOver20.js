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