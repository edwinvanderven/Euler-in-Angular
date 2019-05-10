import { Helper } from './helper';

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

  describe('sum', () => {
    it('should return the sum for the provided arguments', () => {
      expect(Helper.sum(1, 2, 3)).toEqual(6);
      expect(Helper.sum(66, 55, 44, 33, 22, 11)).toEqual(231);
      expect(Helper.sum(999, 999)).toEqual(1998);
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
});
