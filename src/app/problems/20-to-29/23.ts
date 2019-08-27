import { IProblem } from '../../app.component.model';
import { Helper } from 'src/app/utils/helper';

const LIMIT = 28123;

export class TwentyThirdProblem implements IProblem {
  public title = 'Problem 23';
  public description = 'A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. ' +
                        '\nFor example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.' +
                        '\nA number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.' +
                        '\nAs 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. ' +
                        '\nBy mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. ' +
                        '\nHowever, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.' +
                        '\nFind the sum of all the positive integers which cannot be written as the sum of two abundant numbers.';


  private abundantLookup = {};

  getAnswer(): string {
    let result = 0;
    for (let i = 1; i <= LIMIT; i++) this.abundantLookup[i] = Helper.isAbundant(i);
    for (let j = 1; j <= LIMIT; j++) if (!this.isSumOfTwoAbundants(j)) result += j;

    return result.toString();
  }

  private isSumOfTwoAbundants(x: number): boolean {
    for (let i = 0; i <= x; i++) if (this.abundantLookup[i] && this.abundantLookup[x - i]) return true;
    return false;
  }
}
