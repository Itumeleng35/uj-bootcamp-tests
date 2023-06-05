function countAllFromTown(regNos, town) {
    var regNoList = regNos.split(',');
    var count = 0;
    
    for (var i = 0; i < regNoList.length; i++) {
      var regNo = regNoList[i].trim();
      if (regNo.startsWith(town)) {
        count++;
      }
    }
    return count;
}