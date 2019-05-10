export class Helper {

  static isPrime(s: number) : boolean {
    for (let start = 2; start < s; start++) if (s % start === 0) return false;
    return s > 1;
  }

  static sum = (...args: number[]) => args.reduce((a, b) => a + b);
  static prod = (...args: number[]) => args.reduce((a, b) => a * b);
  static isNaturalNumber = (num: number) => num > -1 && num % 1 === 0; // 0 is considered a natural number
  static isFraction = (num: number, divider: number) => num % divider !== 0;
}
