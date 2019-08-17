import { IProblem } from '../../app.component.model';

export class ThirtyFourthProblem implements IProblem {
  public title = 'Problem 34';
  public description = '145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.' +
                        '\nFind the sum of all numbers which are equal to the sum of the factorial of their digits.' +
                        '\nNote: as 1! = 1 and 2! = 2 are not sums they are not included.';

  // have a predefined list of factorials saves the calculation in runtime
  private factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

  getAnswer(): string {
    let result = 0;
    const length = 1500000;
    for (let i = 10; i < length; i++) {
      if (this.getSum(i) === i) {
        result += i;
      }
    }
    return result.toString();
  }

  private getSum(x: number): number {
    let sum = 0;
    while (x != 0) {
      sum += this.factorials[x % 10];
      x = Math.floor(x / 10);
    }
    return sum;
  }
}
