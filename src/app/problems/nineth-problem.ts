import { IProblem } from '../app.component.model';
import { injectArgs } from '@angular/core/src/di/injector_compatibility';

export class NinethProblem implements IProblem {
  public title = 'Problem 9';
  public description = 'A Pythagorean triplet is a set of three natural numbers, a < b < c, for which' + 
                        '\na2 + b2 = c2' +
                        '\nFor example, 32 + 42 = 9 + 16 = 25 = 52.' +
                        '\nThere exists exactly one Pythagorean triplet for which a + b + c = 1000.' +
                        '\nFind the product abc.';

  getAnswer(): string {
    let result: number = 0;
    const length = 1000;

    let a = 1;
    while (a < length && result === 0) {
      let b = a + 1;
      while (b < length && result === 0) {
        const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        const isAnswer = this.isNaturalNumber(c) && this.sum(a, b, c) === length;
        result = isAnswer ? this.prod(a, b, c) : 0;
        b++;
      }
      a++;
    }

    return result.toString();
  }

  private sum = (...args: number[]) => args.reduce((a, b) => a + b);
  private prod = (...args: number[]) => args.reduce((a, b) => a * b);
  private isNaturalNumber = (num: number) => num % 1 === 0;
}
