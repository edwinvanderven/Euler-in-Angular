import { IProblem } from '../../app.component.model';

export class TwentyEighthProblem implements IProblem {
  public title = 'Problem 28';
  public description = 'Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows: ' +
                        '\n21 22 23 24 25' +
                        '\n20  7  8  9 10' +
                        '\n19  6  1  2 11' +
                        '\n18  5  4  3 12' +
                        '\n17 16 15 14 13' +
                        '\nIt can be verified that the sum of the numbers on the diagonals is 101.' +
                        '\nWhat is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?';

  getAnswer(): string {
    let result = 1;
    let d = 1;
    const size = 1001;

    for (let i = 2; i <= size; i += 2) {
      result += 4 * d + 10 * i;
      d += i * 4;
    }

    return result.toString();
  }
}
