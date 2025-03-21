describe('countdown', function() {
  it('should count down from a number to 0', function() {
    const result = countdown(5);
    expect(result).to.deep.equal([5, 4, 3, 2, 1, 0]);
  });

  it('should return an array with 0', function() {
    const result = countdown(0);
    expect(result).to.deep.equal([0]);
  });


});

describe('palindromeChecker', function() {
    it('should return true for a palindrome', function() {
      expect(palindromeChecker('racecar')).to.equal(true);
      expect(palindromeChecker('radar')).to.equal(true);
      expect(palindromeChecker('rotator')).to.equal(true);
    });
  
    it('should return false for a non-palindrome', function() {
      const result = palindromeChecker('hello');
      expect(result).to.equal(false);
    }); 
});



describe('reverseString', function() {
    it('should reverse a simple string', function() {
      const result = reverseString('hello');
      expect(result).to.equal('olleh');
    });
  
    it('should return an empty string if passed an empty string', function() {
      const result = reverseString('');
      expect(result).to.equal('');
    });
  
    it('should handle single-character strings', function() {
      const result = reverseString('a');
      expect(result).to.equal('a');
    });
  });

  describe('factorial', function() {
    it('should return the factorial of a number', function() {
      const result = factorial(5);
      expect(result).to.equal(120);
    });
  
    it('should return 1 for 0', function() {
      const result = factorial(0);
      expect(result).to.equal(1);
    });
  
    it('should return 1 for 1', function() {
      const result = factorial(1);
      expect(result).to.equal(1);
    });
  });

  describe('sumDigits', function() {
    it('should return the sum of digits in a number', function() {
      const result = sumDigits(123);
      expect(result).to.equal(6);
    });
  
    it('should return 0 for 0', function() {
      const result = sumDigits(0);
      expect(result).to.equal(0);
    });
  
    it('should return 1 for 1', function() {
      const result = sumDigits(1);
      expect(result).to.equal(1);
    });
  });

  describe('arraySum', function() {
    it('should return the sum of an array of numbers', function() {
      const result = arraySum([1, 2, 3]);
      expect(result).to.equal(6);
    });
  
    it('should return 0 for an empty array', function() {
      const result = arraySum([]);
      expect(result).to.equal(0);
    });

    it('should return sum of an array of negative numbers', function() {
        const result = arraySum([-1, -2, -3]);
        expect(result).to.equal(-6);
      });

      it('should return sum of an array of positive and negative numbers', function() {
        const result = arraySum([1, -2, 3]);
        expect(result).to.equal(2);
      });

      it('should return single number if array has one element', function() {
        const result = arraySum([5]);
        expect(result).to.equal(5);
      });
  });

  describe('isPrime', function() {
    it('should return true for a prime number', function() {
      const result = isPrime(7);
      expect(result).to.equal(true);
    });
  
    it('should return false for a non-prime number', function() {
      const result = isPrime(6);
      expect(result).to.equal(false);
    });
  
    it('should return true for 2', function() {
      const result = isPrime(2);
      expect(result).to.equal(true);
    });

    it('should return false for 1', function() {
        const result = isPrime(1);
        expect(result).to.equal(false);
      });

      it('should return false for 0', function() {
        const result = isPrime(0);
        expect(result).to.equal(false);
      });
  });

  describe('fibonacci', function() {
    it('should return the nth fibonacci number', function() {
      const result = fibonacci(5);
      expect(result).to.equal(5);
    });
  
    it('should return 0 for 0', function() {
      const result = fibonacci(0);
      expect(result).to.equal(0);
    });
  
    it('should return 1 for 1', function() {
      const result = fibonacci(1);
      expect(result).to.equal(1);
    });

  });