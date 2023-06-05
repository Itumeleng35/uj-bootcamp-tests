function totalPhoneBill(data) {
    var callsAndSms = data.split(', ');
    var callCost = 2.75;
    var smsCost = 0.65;
    var totalCost = 0;
    
    for (var i = 0; i < callsAndSms.length; i++) {
      var current = callsAndSms[i];
      if (current === 'call') {
        totalCost += callCost;
      } else if (current === 'sms') {
        totalCost += smsCost;
      }
    }
    
    return 'R' + totalCost.toFixed(2);
  }

  describe('Test my totalPhoneBill function' , function(){
    it("it should return a string calls made and sms's sent." , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it("it should return a string calls made and sms's sent." , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    it("it should return a string calls made and sms's sent." , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
  });