import { IProblem } from '../../app.component.model';
import { Helper } from 'src/app/utils/helper';

export class FifteenthProblem implements IProblem {
  public title = 'Problem 15';
  public description = 'Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.' +
                        '\nHow many such routes are there through a 20×20 grid?';

  getAnswer(): string {
    let result: number = Helper.binomial(40, 20);
    return result.toString();
  }
}
