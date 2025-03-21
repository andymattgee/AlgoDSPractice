//will be where Mocha/Chai tests will go
// test/myFunctions.test.js

  describe('addTwo', function() {
    it('should add two numbers', function() {
      const result = addTwo(3);
      expect(result).to.equal(5);
    });
  
    it('should handle negative numbers', function() {
      const result = addTwo(-5);
      expect(result).to.equal(-3);
    });
  
    it('should handle zero', function() {
      const result = addTwo(0);
      expect(result).to.equal(2);
    });
  })

describe('printString', function() {
    it('should print a string', function() {
      const result = printString('hello');
      expect(result).to.equal('hello');
    })
    it('should print an empty string', function() {
      const result = printString('');
      expect(result).to.equal('');
    });
  })
  