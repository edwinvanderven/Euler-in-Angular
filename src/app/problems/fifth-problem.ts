import { IProblem } from '../app.component.model';
import { Helper } from '../utils/helper';

export class FifthProblem implements IProblem {
  public title = 'Problem 5';
  public description = '2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. ' + 
                        '\nWhat is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?';

  getAnswer(): string {
    let result: number = 10;
    let i = 1;
    const length: number = 20;

    while (i <= length) {
      const isFraction = Helper.isFraction(result, i);
      result = isFraction ? result + 1 : result;
      i = isFraction ? 1 : i + 1;
    }

    return result.toString();
  }
}
