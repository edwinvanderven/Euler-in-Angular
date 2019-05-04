import { IProblem } from '../app.component.model';

export class FifthProblem implements IProblem {
  public title = 'Problem 5';
  public description = '2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. ' + 
                        '\nWhat is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?';

  getAnswer(): string {
    let result: number = 10;
    let keepLooping: boolean = true;
    const length: number = 20;

    while (keepLooping) {
      for (let i = 1; i <= length; i++) {
        if (result % i !== 0) {
          // result has a remainder, keep looping
          result++;
          break;
        }

        if (i === length) {
          keepLooping = false;
        }
      }
    }

    return result.toString();
  }
}
