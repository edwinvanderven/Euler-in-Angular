import { IProblem } from '../../app.component.model';

export class ThirtiethProblem implements IProblem {
  public title = 'Problem 30';
  public description = 'Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:' +
                        '\n1634 = 14 + 64 + 34 + 44' +
                        '\n8208 = 84 + 24 + 04 + 84' +
                        '\n9474 = 94 + 44 + 74 + 44' +
                        '\nAs 1 = 14 is not a sum it is not included.' +
                        '\nThe sum of these numbers is 1634 + 8208 + 9474 = 19316.' +
                        '\nFind the sum of all the numbers that can be written as the sum of fifth powers of their digits.';

  getAnswer(): string {
    let result = 0;

    for (let i = 2; i <= 999999; i++) {
      if (this.isFifthPower(i)) result += i;
    }

    return result.toString();
  }

  private isFifthPower(x: number) : boolean {
    return this.getSum(x) === x;
  }

  private getSum(x: number) : number {
    let sum = 0;
    while (x !== 0) {
      sum += Math.pow(x % 10, 5);
      x = Math.floor(x / 10);
    }
    return sum;
  }
}
