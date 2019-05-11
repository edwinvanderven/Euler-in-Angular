export class Helper {

  static isPrime(x: number) : boolean {
    if (x === 0 || x === 1) return false;
    if (x === 2 || x === 3) return true;
    if (x % 2 === 0 || x % 3 === 0) return false;
    const length = Math.sqrt(x);
    for (let i = 5; i <= length; i += 2) if (x % i === 0) return false;
    return true;
  }

  static sum = (...args: number[]) => args.reduce((a, b) => a + b);
  static prod = (...args: number[]) => args.reduce((a, b) => a * b);
  static isNaturalNumber = (num: number) => num > -1 && num % 1 === 0; // 0 is considered a natural number
  static isFraction = (num: number, divider: number) => num % divider !== 0;
}
