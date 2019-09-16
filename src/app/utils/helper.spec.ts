import { Helper } from './helper';
import * as bigInt from 'big-integer';

describe('Helper', () => {
  it('should create an instance', () => {
    expect(new Helper()).toBeTruthy();
  });

  describe('isPrime', () => {
    it('should return true for the provided prime numbers', () => {
      const primes: number[] =
        [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
          43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
          101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
          151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];

      primes.forEach((prime: number) => {
        expect(Helper.isPrime(prime)).toBeTruthy();
      });
    });
    it('should return false for the provided none prime numbers', () => {
      const nonePrimes: number[] =
        [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21,
          22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35,
          36, 38, 39, 40, 42, 44, 45, 46, 48, 49, 50,
          51, 52, 54, 55, 56, 57, 58, 60, 62, 63];

      nonePrimes.forEach((prime: number) => {
        expect(Helper.isPrime(prime)).toBeFalsy();
      });
    });
  });

  describe('primeList', () => {
    it('should return the correct array of prime numbers', () => {
      expect(Helper.primeList(1, 20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
      expect(Helper.primeList(1, 30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
      expect(Helper.primeList(1, 40)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      expect(Helper.primeList(1, 50)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
      expect(Helper.primeList(1, 60)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]);
    });
  });

  describe('numberOfDivisors', () => {
    it('should return the correct number of divisors', () => {
      expect(Helper.numberOfDivisors(1)).toEqual(1);
      expect(Helper.numberOfDivisors(3)).toEqual(2);
      expect(Helper.numberOfDivisors(6)).toEqual(4);
      expect(Helper.numberOfDivisors(10)).toEqual(4);
      expect(Helper.numberOfDivisors(15)).toEqual(4);
      expect(Helper.numberOfDivisors(21)).toEqual(4);
      expect(Helper.numberOfDivisors(28)).toEqual(6);
      expect(Helper.numberOfDivisors(76576500)).toEqual(576);
    });
  });

  describe('sum', () => {
    it('should return the sum for the provided arguments', () => {
      expect(Helper.sum([1, 2, 3])).toEqual(6);
      expect(Helper.sum([66, 55, 44, 33, 22, 11])).toEqual(231);
      expect(Helper.sum([999, 999])).toEqual(1998);
    });
  });

  describe('prod', () => {
    it('should return the product for the provided arguments', () => {
      expect(Helper.prod(1, 2, 3)).toEqual(6);
      expect(Helper.prod(66, 55, 44, 33, 22, 11)).toEqual(1275523920);
      expect(Helper.prod(999, 999)).toEqual(998001);
    });
  });

  describe('isNaturalNumber', () => {
    it('should return true for a natural number', () => {
      [1, 95, 106, 8364].forEach((num: number) => expect(Helper.isNaturalNumber(num)).toBeTruthy());
    });
    it('should return false for a fraction or negative number', () => {
      [0.1, 13.89, -89].forEach((num: number) => expect(Helper.isNaturalNumber(num)).toBeFalsy());
    });
  });

  describe('isFraction', () => {
    it('should return true for a fraction', () => {
      expect(Helper.isFraction(10, 20)).toBeTruthy();
      expect(Helper.isFraction(5, 6)).toBeTruthy();
      expect(Helper.isFraction(7, 3)).toBeTruthy();
    });
    it('should return false for natural number', () => {
      expect(Helper.isFraction(6, 3)).toBeFalsy();
      expect(Helper.isFraction(9, 3)).toBeFalsy();
      expect(Helper.isFraction(100, 10)).toBeFalsy();
    });
  });

  describe('factorial', () => {
    it('should return the correct factorial', () => {
      expect(Helper.factorial(5)).toEqual(120);
      expect(Helper.factorial(10)).toEqual(3628800);
      expect(Helper.factorial(15)).toEqual(1307674368000);
    });
  });

  // See https://en.wikipedia.org/wiki/Binomial_coefficient
  describe('binomial', () => {
    it('should return the correct binomial values', () => {
      expect(Helper.binomial(2, 2)).toEqual(1);
      expect(Helper.binomial(4, 2)).toEqual(6);
      expect(Helper.binomial(4, 4)).toEqual(1);
      expect(Helper.binomial(40, 20)).toEqual(137846528820);
      expect(Helper.binomial(40, 40)).toEqual(1);
    });
  });

  describe('numberToWord', () => {
    it('should return the correct word', () => {
      expect(Helper.numberToWord(0)).toEqual('zero');
      expect(Helper.numberToWord(13)).toEqual('thirteen');
      expect(Helper.numberToWord(115)).toEqual('one hundred and fifteen');
      expect(Helper.numberToWord(342)).toEqual('three hundred and forty two');
      expect(Helper.numberToWord(9617)).toEqual('nine thousand six hundred and seventeen');
      expect(Helper.numberToWord(1095)).toEqual('one thousand and ninety five');
    });
    it('should return an error when an negative number is provided', () => {
      expect(() => { Helper.numberToWord(-1); }).toThrow(new Error('Negative numbers are not supported.'));
    });
  });

  describe('isAmicable', () => {
    it('should return true for the provided amicable numbers', () => {
      [220, 284, 1184, 1210, 2620, 2924, 5020, 5564, 6232, 6368, 10744, 10856, 12285, 14595, 17296, 18416, 63020, 76084].forEach((x: number) => {
        expect(Helper.isAmicable(x)).toBeTruthy();
      });
    });
    it('should return false for the none provided amicable numbers', () => {
      [221, 287, 1124, 1310, 2520, 2914, 5120, 5664, 6132, 6268, 10644, 10956, 12385, 14695, 17396, 18516, 63120, 76184].forEach((x: number) => {
        expect(Helper.isAmicable(x)).toBeFalsy();
      });
    });
  });

  describe('isAbundant', () => {
    it('should return true for abundant numbers', () => {
      [12, 18, 20, 24, 30, 36, 40, 42, 48, 54, 56, 60, 66, 70, 72, 78, 80, 84, 88, 90, 96, 100, 102, 104, 108, 112, 114, 120].forEach((x: number) => {
        expect(Helper.isAbundant(x)).toBeTruthy();
      });
    });
    it('should return false for none abundant numbers', () => {
      [13, 19, 22, 27, 31, 35, 43, 47, 49, 53, 57, 61, 67].forEach((x: number) => {
        expect(Helper.isAbundant(x)).toBeFalsy();
      });
    });
  });

  describe('fibonacci', () => {
    it('should return the correct fibonacci number', () => {
      expect(Helper.fibonacci(4).toJSNumber()).toEqual(3);
      expect(Helper.fibonacci(1).toJSNumber()).toEqual(1);
      expect(Helper.fibonacci(12).toJSNumber()).toEqual(144);
      expect(Helper.fibonacci(100).toJSNumber()).toEqual(354224848179261900000);
    });
  });

  describe('isPalindrome', () => {
    it('shold return true if the provided string is a palindrome', () => {
      expect(Helper.isPalindrome('111')).toBeTruthy();
      expect(Helper.isPalindrome('111222111')).toBeTruthy();
      expect(Helper.isPalindrome('abcdeffedcba')).toBeTruthy();
      expect(Helper.isPalindrome('step on no pets')).toBeTruthy();
      expect(Helper.isPalindrome('live on time,emit no evil')).toBeTruthy();
    });
    it('should return false if the provided string is not a palindrome', () => {
      expect(Helper.isPalindrome('1122111')).toBeFalsy();
      expect(Helper.isPalindrome('abcdedcbb')).toBeFalsy();
      expect(Helper.isPalindrome('334455667788 887766554433 ')).toBeFalsy();
    });
  });

  describe('isPandigital', () => {
    it('should return true if a string is pandigital', () => {
      expect(Helper.isPandigital('1234567890')).toBeTruthy();
      expect(Helper.isPandigital('0987654321')).toBeTruthy();
      expect(Helper.isPandigital('1237809456')).toBeTruthy();
      expect(Helper.isPandigital('0987123654')).toBeTruthy();
      expect(Helper.isPandigital('1928370465')).toBeTruthy();
      expect(Helper.isPandigital('5647308291')).toBeTruthy();
    });
    it('should return false if a string is not pandigital', () => {
      expect(Helper.isPandigital('1012')).toBeFalsy();
      expect(Helper.isPandigital('111111111')).toBeFalsy();
      expect(Helper.isPandigital('12345670')).toBeFalsy();
      expect(Helper.isPandigital('918270643')).toBeFalsy();
    });

    it('should return true if a string with less numbers than 9 is pandigital', () => {
      expect(Helper.isPandigital('1')).toBeTruthy();
      expect(Helper.isPandigital('12')).toBeTruthy();
      expect(Helper.isPandigital('123')).toBeTruthy();
      expect(Helper.isPandigital('1234')).toBeTruthy();
      expect(Helper.isPandigital('12345')).toBeTruthy();
      expect(Helper.isPandigital('123456')).toBeTruthy();
      expect(Helper.isPandigital('1234567')).toBeTruthy();
      expect(Helper.isPandigital('12345678')).toBeTruthy();
      expect(Helper.isPandigital('123456789')).toBeTruthy();
      expect(Helper.isPandigital('2431')).toBeTruthy();
      expect(Helper.isPandigital('2453617')).toBeTruthy();
      expect(Helper.isPandigital('7162534')).toBeTruthy();
      expect(Helper.isPandigital('15243')).toBeTruthy();
      expect(Helper.isPandigital('231')).toBeTruthy();
    });
    it('should return false if a string with less numbers than 9 is not pandigital', () => {
      expect(Helper.isPandigital('3456')).toBeFalsy();
      expect(Helper.isPandigital('789')).toBeFalsy();
      expect(Helper.isPandigital('11')).toBeFalsy();
      expect(Helper.isPandigital('12344')).toBeFalsy();
      expect(Helper.isPandigital('2356')).toBeFalsy();
      expect(Helper.isPandigital('172635')).toBeFalsy();
    });
  });
});
