import { IProblem } from '../app.component.model';

export class ThirdProblem implements IProblem {
  public title = 'Problem 3';
  public description = 'The prime factors of 13195 are 5, 7, 13 and 29. \nWhat is the largest prime factor of the number 600851475143 ?';

  getAnswer(): string {
    let result = 600851475143;

    while (!this.isPrime(result)) {
      result = this.getFraction(result);
    }

    return result.toString();
  }

  private getFraction(n: number) : number {
    let start = 2;
    let result = 0;
    while (start < n && result === 0) {
      if (this.isPrime(start) && n % start === 0) {
        result = n / start;
      }
      start++;
    }
    return result;
  }

  private isPrime(s: number) : boolean {
    for (let start = 2; start < s; start++) {
      if (s % start === 0) {
        return false;
      }
    }
    return true;
  }
}
