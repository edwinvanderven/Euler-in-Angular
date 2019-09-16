import { IProblem } from '../../app.component.model';
import { Helper } from 'src/app/utils/helper';

export class P41 implements IProblem {
  public title = 'Problem 41';
  public description = 'We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once.' +
                        '\nFor example, 2143 is a 4-digit pandigital and is also prime.' +
                        '\nWhat is the largest n-digit pandigital prime that exists?';

  getAnswer(): string {
    // see https://en.wikipedia.org/wiki/Divisibility_rule#Divisibility_by_3_or_9
    // since we can only have a pandigital number between 4 and 7 it saves us some time iterating
    let result = 0;
    // 7654321 is the highest number where 1234 is the lowest
    // so as soon as we find an answer we can stop iterating
    for (let i = 7654321; i > 1234; i--) {
      if (Helper.isPrime(i) && Helper.isPandigital(i.toString())) {
        result = i;
        break;
      }
    }

    return result.toString();
  }
}
