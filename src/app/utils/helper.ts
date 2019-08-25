import * as bigInt from 'big-integer';


export class Helper {

  private static ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  private static tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  static isPrime(x: number): boolean {
    if (x === 0 || x === 1) return false;
    if (x === 2 || x === 3) return true;
    if (x % 2 === 0 || x % 3 === 0) return false;
    const length = Math.sqrt(x);
    for (let i = 5; i <= length; i += 2) if (x % i === 0) return false;
    return true;
  }

  static primeList(start: number, end: number): number[] {
    const primes: number[] = [];
    for (let i = start; i <= end; i++) {
      if (this.isPrime(i)) primes.push(i);
    }
    return primes;
  }

  static numberOfDivisors(x: number): number {
    let numDivisors = 1;
    let factor = 2;
    while (factor * factor <= x) {
      if (x % factor === 0) {
        let exponent = 0;
        while (x % factor === 0) {
          x /= factor;
          exponent++;
        }
        numDivisors *= exponent + 1;
      }
      factor = factor === 2 ? 3 : factor + 2;
    }

    if (x > 1) { numDivisors *= 2; }

    return numDivisors;
  }

  static sum = (args: number[]) => args.reduce((a, b) => a + b);
  static prod = (...args: number[]) => args.reduce((a, b) => a * b);
  static isNaturalNumber = (num: number) => num > -1 && num % 1 === 0; // 0 is considered a natural number
  static isFraction = (num: number, divider: number) => num % divider !== 0;


  static factorial (x: number): number {
    let product = 1;
    for (let i = 2; i <= x; i++) { product = product * i; }
    return product;
  }

  static binomial (n: number, k: number): number {
    let product = 1;
    for (let i = 0; i < k; i++) { product = product * (n - i); }
    // quotients could cause rounding errors
    return Math.round(product / this.factorial(k));
  }

  static numberToWord(num: number): string {
    if (num < 0) throw new Error('Negative numbers are not supported.');
    if (num === 0) return 'zero';

    // 1 to 20
    if (num < 20) return this.ones[num];

    // 20 to 99
    const numString = num.toString();
    if (numString.length === 2) return this.tens[numString[0]] + ' ' + this.ones[numString[1]];

    // 100 and more
    if (numString.length === 3) return this.numberInHunderds(numString);
    // 1000 and more
    if (numString.length === 4) return this.numberInThousands(numString);
  }

  private static numberInHunderds(numString: string): string {
    if (numString[1] === '0' && numString[2] === '0') return this.ones[numString[0]] + ' hundred';
    else return this.ones[numString[0]] + ' hundred and ' + this.numberToWord(+(numString[1] + numString[2]));
  }

  private static numberInThousands(numString: string): string {
    const end = +(numString[1] + numString[2] + numString[3]);
    if (end === 0) return this.ones[numString[0]] + ' thousand';
    if (end < 100) return this.ones[numString[0]] + ' thousand and ' + this.numberToWord(end);
    return this.ones[numString[0]] + ' thousand ' + this.numberToWord(end);
  }


  static isAmicable(x: number): boolean {
    const sum = this.divisorSum(x);
    return sum !== x && this.divisorSum(sum) === x;
  }

  static isAbundant(x: number): boolean {
    const sum = this.divisorSum(x);
    return sum > x;
  }

  private static divisorSum(n: number): number {
    let result = 0;
    for (let i = 1; i < n; i++) {
      if (n % i === 0) { result += i; }
    }
    return result;
  }

  static fibonacci(n: number): bigInt.BigInteger {
    const arr = [bigInt(0), bigInt(1)];
    for (let i = 2; i < n + 1; i++) {
      arr.push(bigInt(arr[i - 2]).add(bigInt(arr[i - 1])));
    }
    return arr[n];
  }

  static isPalindrome = (s: string): boolean => s === s.split('').reverse().join('');

  static isPandigital(s: string): boolean {
    if (s.length !== 9) return false;
    return this.sortString(s) === '123456789';
  }

  private static sortString = (s: string): string => s.split('').sort().join('');
}
