import { IProblem } from '../../app.component.model';
import { Helper } from 'src/app/utils/helper';

export class TwentySeventhProblem implements IProblem {
  public title = 'Problem 27';
  public description = 'Euler discovered the remarkable quadratic formula:' +
                        '\nn2+n+41' +
                        '\nIt turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤39. However, when n=40,402+40+41=40(40+1)+41 is divisible by 41, ' +
                        '\nand certainly when n=41,412+41+41 is clearly divisible by 41.' +
                        '\nThe incredible formula n2−79n+1601 was discovered, which produces 80 primes for the consecutive values 0≤n≤79. The product of the coefficients, −79 and 1601, is −126479.' +
                        '\nConsidering quadratics of the form:' +
                        '\nn2+an+b, where |a|<1000 and |b|≤1000' +
                        '\nwhere |n| is the modulus/absolute value of n' +
                        '\ne.g. |11|=11 and |−4|=4' +
                        '\nFind the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0.';

  getAnswer(): string {
    let result = 0;
    let bestNum = 0;
    for (let a = -1000; a <= 1000; a++) {
      for (let b = -1000; b <= 1000; b++) {
        const num = this.numberOfConsecutivePrimesGenerated(a, b);
        if (num > bestNum) {
          bestNum = num;
          result = a * b;
        }
      }
    }

    return result.toString();
  }

  private numberOfConsecutivePrimesGenerated(a: number, b: number): number {
    for (let i = 0; ; i++) {
      const n = i * i + i * a + b;
      if (n < 0 || !Helper.isPrime(n)) return i;
    }
  }
}
