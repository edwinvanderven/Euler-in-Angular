import { IProblem } from '../../app.component.model';
import { Helper } from 'src/app/utils/helper';
import * as bigInt from 'big-integer';

export class TwentiethProblem implements IProblem {
  public title = 'Problem 20';
  public description = 'n! means n × (n − 1) × ... × 3 × 2 × 1' +
                        '\nFor example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,' +
                        '\nand the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.' +
                        '\nFind the sum of the digits in the number 100!';

  getAnswer(): string {
    const big: bigInt.BaseArray = bigInt(Helper.factorial(100)).toArray(10);
    const result: number = Helper.sum(big.value);
    return result.toString();
  }
}
