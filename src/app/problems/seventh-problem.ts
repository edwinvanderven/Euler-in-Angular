import { IProblem } from '../app.component.model';
import { Helper } from '../utils/helper';

export class SeventhProblem implements IProblem {
  public title = 'Problem 7';
  public description = 'By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.\nWhat is the 10 001st prime number?';

  getAnswer(): string {
    let result = 1;
    let primesFound = 0;
    while (primesFound < 10001) {
      result++;
      primesFound = Helper.isPrime(result) ? primesFound + 1 : primesFound;
    }
    return result.toString();
  }
}

