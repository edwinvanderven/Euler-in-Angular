import { IProblem } from '../../app.component.model';
import * as bigInt from 'big-integer';
import { Helper } from 'src/app/utils/helper';

export class TwentyFifthProblem implements IProblem {
  public title = 'Problem 25';
  public description = 'The Fibonacci sequence is defined by the recurrence relation:' +
                        '\nFn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.' +
                        '\nHence the first 12 terms will be:' +
                        '\nF1 = 1' +
                        '\nF2 = 1' +
                        '\nF3 = 2' +
                        '\nF4 = 3' +
                        '\nF5 = 5' +
                        '\nF6 = 8' +
                        '\nF7 = 13' +
                        '\nF8 = 21' +
                        '\nF9 = 34' +
                        '\nF10 = 55' +
                        '\nF11 = 89' +
                        '\nF12 = 144' +
                        '\nThe 12th term, F12, is the first term to contain three digits.' +
                        '\nWhat is the index of the first term in the Fibonacci sequence to contain 1000 digits?';

  getAnswer(): string {
    let result = '';
    let i = 1;
    let arr = [bigInt(0), bigInt(1)];
    while (result.length < 1000) {
      i++;
      Helper.fibonacci_changeme(i, arr);
      const big: bigInt.BaseArray = arr[i].toArray(10);
      result = big.value.join().replace(/,/g, '');
    }

    return i.toString();
  }
}
