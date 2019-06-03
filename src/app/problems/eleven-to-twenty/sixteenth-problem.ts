import { IProblem } from '../../app.component.model';
import * as bigInt from 'big-integer';
import { Helper } from 'src/app/utils/helper';

export class SixteenthProblem implements IProblem {
  public title = 'Problem 16';
  public description = '215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.' +
                        '\nWhat is the sum of the digits of the number 2^1000?';

  getAnswer(): string {
    let big: bigInt.BaseArray = bigInt(Math.pow(2, 1000)).toArray(10);
    let result: number = Helper.sum(big.value);
    return result.toString();
  }
}
