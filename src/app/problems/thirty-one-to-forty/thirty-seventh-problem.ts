import { IProblem } from '../../app.component.model';
import { Helper } from 'src/app/utils/helper';

export class ThirtySeventhProblem implements IProblem {
  public title = 'Problem 37';
  public description = 'The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. ' +
                        '\nSimilarly we can work from right to left: 3797, 379, 37, and 3.' +
                        '\nFind the sum of the only eleven primes that are both truncatable from left to right and right to left.' +
                        '\nNOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.';

  getAnswer(): string {
    let result = 0;
    const length = 11;
    for (let count = 0, i = 11; count < length; i += 2) {
      if (this.isTruncatablePrime(i)) {
        count++;
        result += i;
      } 
    }
    return result.toString();
  }

  private isTruncatablePrime(x: number) : boolean {
    return this.isPrimeLeftToRight(x) && this.isPrimeRightToLeft(x);
  }

  private isPrimeLeftToRight(x: number) : boolean {
    for (let i = 10; i <= x; i *= 10) {
      if (!Helper.isPrime(x % i)) return false;
    }
    return true;
  }
  private isPrimeRightToLeft(x: number) : boolean {
    while (x != 0) {
      if (!Helper.isPrime(x)) return false;
      x = Math.floor(x / 10);
    }
    return true;
  }
}
