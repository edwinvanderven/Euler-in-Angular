import { IProblem } from '../../app.component.model';
import { Helper } from 'src/app/utils/helper';

export class P50 implements IProblem {
  public title = 'Problem 50';
  public description = 'The prime 41, can be written as the sum of six consecutive primes:' +
                        '\n41 = 2 + 3 + 5 + 7 + 11 + 13' +
                        '\nThis is the longest sum of consecutive primes that adds to a prime below one-hundred.' +
                        '\nThe longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.' +
                        '\nWhich prime, below one-million, can be written as the sum of the most consecutive primes?';

  getAnswer(): string {
    let result = 0;
    let numberOfTerms = -1;

    const length = 1000000;
    const primes = Helper.primeList(0, length);

    for (let i = 0; i < primes.length; i++) {
      let sum = 0;
      for (let j = i; j < primes.length; j++) {
        sum += primes[j];
        if (sum > length) break;
        if (sum > result && j - i > numberOfTerms && Helper.isPrime(sum)) {
          result = sum;
          numberOfTerms = j - i;
        }
      }
    }

    return result.toString();
  }
}
