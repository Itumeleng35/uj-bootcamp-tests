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