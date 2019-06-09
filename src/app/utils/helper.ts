export class Helper {

  static isPrime(x: number): boolean {
    if (x === 0 || x === 1) { return false; }
    if (x === 2 || x === 3) { return true; }
    if (x % 2 === 0 || x % 3 === 0) { return false; }
    const length = Math.sqrt(x);
    for (let i = 5; i <= length; i += 2) { if (x % i === 0) { return false; } }
    return true;
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
}
