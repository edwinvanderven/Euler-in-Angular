import { IProblem } from '../../app.component.model';
import { Helper } from 'src/app/utils/helper';

export class ThirtyFifthProblem implements IProblem {
  public title = 'Problem 35';
  public description = 'The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.' +
                        '\nThere are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.' +
                        '\nHow many circular primes are there below one million?';

  getAnswer(): string {
    let result = 0;
    const length = 1000000;
    for (let i = 1; i < length; i++) {
      if (this.isCircularPrime(i)) result++;
    }
    return result.toString();
  }

  private isCircularPrime(x: number) : boolean {
    let str = x.toString();
    for (let i = 0; i < str.length; i++) {
      if (!Helper.isPrime(parseInt(str.substring(i) + str.substring(0, i)))) {
        return false;
      }
    }
    return true;
  }
}
