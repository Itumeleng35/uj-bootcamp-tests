function regCheck(registration_number, regArea) {
    return registration_number.endsWith(regArea)
};

console.log(regCheck);

describe('Test my regCheck function', function(){
    it("it should return 'True, when registration number ends with GP, L, EC, MP registration plates.'", function () {

        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);

    });

    
        it("it should return 'False, when registration number does not end with GP, L, EC, MP registration plates.'", function () {
            
            assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
        
        });
    
    
    
    
        it("it should return 'True, when registration number ends with GP, L, EC, MP registration plates.'", function () {

            assert.equal(regCheck('5566 L', 'L'), true);

        });
    
            

       
            it("it should return 'False, when registration number does not end with GP, L, EC, MP registration plates.'", function () {
                assert.equal(regCheck('5566 L', 'M'), false); 
    
            });

            it("it should return 'True, when registration number ends with GP, L, EC, MP registration plates.'", function () {

                assert.equal(regCheck('ERT 123 EC', 'EC'), true);
       
            });
        
            it("it should return 'False, when registration number does not end with GP, L, EC, MP registration plates.'", function () {
            
            assert.equal(regCheck('ERT 123 EC', 'GP'), false);
        });

        it("it should return 'False, when registration number does not end with GP, L, EC, MP registration plates.'", function () {

            assert.equal(regCheck('FGT 123 MP', 'MP'), true);
});

it("it should return 'False, when registration number does not end with GP, L, EC, MP registration plates.'", function () {
    assert.equal(regCheck('FGT 123 MM', 'MP'), false);
});
});
        
    
