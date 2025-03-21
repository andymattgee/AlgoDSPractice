describe('palindromeRecursive', function() {
    it('should return true for a palindrome', function() {
      const result = palindromeRecursive('racecar');
      expect(result).to.equal(true);
    });
  
    it('should return false for a non-palindrome', function() {
      const result = palindromeRecursive('hello');
      expect(result).to.equal(false);
    }); 
});



describe('reverseStringRecursive', function() {
    it('should reverse a simple string', function() {
      const result = reverseStringRecursive('hello');
      expect(result).to.equal('olleh');
    });
  
    it('should return an empty string if passed an empty string', function() {
      const result = reverseStringRecursive('');
      expect(result).to.equal('');
    });
  
    it('should handle single-character strings', function() {
      const result = reverseStringRecursive('a');
      expect(result).to.equal('a');
    });
  });

  describe('factorialRecursive', function() {
    it('should return the factorial of a number', function() {
      const result = factorialRecursive(5);
      expect(result).to.equal(120);
    });
  
    it('should return 1 for 0', function() {
      const result = factorialRecursive(0);
      expect(result).to.equal(1);
    });
  
    it('should return 1 for 1', function() {
      const result = factorialRecursive(1);
      expect(result).to.equal(1);
    });
  });