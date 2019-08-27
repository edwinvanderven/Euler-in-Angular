import { IProblem } from '../../app.component.model';

export class ThirtyNinthProblem implements IProblem {
  public title = 'Problem 39';
  public description = 'If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.' +
                        '\n{20,48,52}, {24,45,51}, {30,40,50}' +
                        '\nFor which value of p ≤ 1000, is the number of solutions maximised?';

  getAnswer(): string {
    let result = 0;
    let highestNumberOfSolutions = 1;
    for (let p = 1; p <= 1000; p++) {
      const numberOfSolutions = this.numberOfSolutions(p);
      if (numberOfSolutions > highestNumberOfSolutions) {
        highestNumberOfSolutions = numberOfSolutions;
        result = p;
      }
    }
    return result.toString();
  }

  private numberOfSolutions(n: number): number {
    let count = 0;
    for (let a = 1; a <= n; a++) {
      for (let b = a; b <= n; b++) {
        const c = n - a - b;
        if (b <= c && (a * a) + (b * b) === (c * c)) count++;
      }
    }
    return count;
  }
}
