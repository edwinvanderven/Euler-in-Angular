import { IProblem } from '../../app.component.model';

export class EighteenthProblem implements IProblem {
  public title = 'Problem 18';
  public description = 'By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.' +
                        '\nThat is, 3 + 7 + 4 + 9 = 23.' +
                        '\nFind the maximum total from top to bottom of the triangle below:' + 
                        '\nNOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)';

  private triangle = [
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
  ];

  getAnswer(): string {
    let result = 0;
    for (let i = this.triangle.length - 2; i >= 0; i--) {
      for (let j = 0; j < this.triangle[i].length; j++) {
        this.triangle[i][j] += Math.max(this.triangle[i + 1][j], this.triangle[i + 1][j + 1]);
      }
    }
    result = this.triangle[0][0];
    console.log(this.triangle);
    return result.toString();
  }
}
