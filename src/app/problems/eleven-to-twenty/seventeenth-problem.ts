import { IProblem } from '../../app.component.model';
import { Helper } from 'src/app/utils/helper';

export class SeventeenthProblem implements IProblem {
  public title = 'Problem 17';
  public description = 'If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.' +
                        '\nIf all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?' +
                        '\nNOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.' +
                        '\nThe use of "and" when writing out numbers is in compliance with British usage.';

  getAnswer(): string {
    let result = 0;
    const length = 1000;
    for (let i = 1; i <= length; i++) {
      const word = Helper.numberToWord(i).replace(/\s+/g, '');
      result += word.length;
    }
    return result.toString();
  }
}