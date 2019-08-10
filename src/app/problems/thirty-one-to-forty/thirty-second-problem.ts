import { IProblem } from '../../app.component.model';

export class ThirtySecondProblem implements IProblem {
  public title = 'Problem 32';
  public description = 'We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.' +
                        '\nThe product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.' +
                        '\nFind the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.' +
                        '\nHINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.';

  getAnswer(): string {
    let result = 0;
    for (let i = 1; i < 10000; i++) {
      if (this.hasPandigitalProduct(i)) result += i;
    }
    return result.toString();
  }

  private hasPandigitalProduct(n: number) : boolean {
    for (let i = 1; i <= n; i++) {
      if (n % i === 0 && this.isPandigital('' + n + i + n/i)) return true;
    }
    return false;
  }

  private isPandigital(s: string) : boolean {
    if (s.length !== 9) return false;
    return this.sortString(s) === '123456789';
  }

  private sortString = (s: string) : string => s.split('').sort().join('');
}
