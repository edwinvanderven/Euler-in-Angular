import { IProblem } from '../../app.component.model';
import { Helper } from '../../utils/helper';

export class FifthProblem implements IProblem {
  public title = 'Problem 5';
  public description = '2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. ' +
                        '\nWhat is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?';

  getAnswer(): string {
    let result = 1;
    const length = 20;
    const primes = Helper.primeList(1, 20);
    const lengthLog = Math.log(length);

    // with some help from https://en.wikipedia.org/wiki/Euclidean_algorithm
    primes.forEach((prime: number) => {
      const logPrime = Math.log(prime);
      const logResult = Math.floor(lengthLog / logPrime);

      result *= Math.pow(prime, logResult);
    });

    return result.toString();
  }
}
