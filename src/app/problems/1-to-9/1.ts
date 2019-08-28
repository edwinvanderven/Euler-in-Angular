import { IProblem } from '../../app.component.model';

export class P1 implements IProblem {
  public title = 'Problem 1';
  public description = 'If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.' +
                        '\nFind the sum of all the multiples of 3 or 5 below 1000.';

  getAnswer(): string {
    let result = 0;
    const length = 1000;

    for (let i = 1; i < length; i++) { if (this.isMultipleOf(i, 3, 5)) { result += i; } }

    return result.toString();
  }

  private isMultipleOf = (num, ...args: number[]) => args.some((elm) => num % elm === 0);
}
