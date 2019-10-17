import { IProblem } from '../../app.component.model';
import { Helper } from 'src/app/utils/helper';

export class P46 implements IProblem {
  public title = 'Problem 46';
  public description = 'It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.' +
                        '\n9 = 7 + 2×12' +
                        '\n15 = 7 + 2×22' +
                        '\n21 = 3 + 2×32' +
                        '\n25 = 7 + 2×32' +
                        '\n27 = 19 + 2×22' +
                        '\n33 = 31 + 2×12' +
                        '\nIt turns out that the conjecture was false.' +
                        '\nWhat is the smallest odd composite that cannot be written as the sum of a prime and twice a square?';

  getAnswer(): string {
    let result = 9;
    while (this.isConjecture(result)) {
      result += 2;
    }
    return result.toString();
  }

  private isConjecture(x: number): boolean {
    if (x % 2 === 0 || Helper.isPrime(x)) return true;

    for (let i = 1; i * (i * 2) <= x; i++) {
      const sum = x - i * (i * 2);
      if (Helper.isPrime(sum)) return true;
    }

    return false;
  }
}
