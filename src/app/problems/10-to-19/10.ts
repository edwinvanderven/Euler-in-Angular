import { IProblem } from '../../app.component.model';
import { Helper } from '../../utils/helper';

export class P10 implements IProblem {
  public title = 'Problem 10';
  public description = 'The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.' +
                        '\nFind the sum of all the primes below two million.';

  getAnswer(): string {
    let result = 0;
    const length = 2000000;

    for (let i = 1; i < length; i++) {
      if (Helper.isPrime(i)) { result += i; }
    }
    return result.toString();
  }
}

