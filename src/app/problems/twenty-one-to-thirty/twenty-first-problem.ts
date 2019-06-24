import { IProblem } from '../../app.component.model';

export class TwentyFirstProblem implements IProblem {
  public title = 'Problem 21';
  public description = 'Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).' +
                        '\nIf d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.' +
                        '\nFor example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.' +
                        '\nEvaluate the sum of all the amicable numbers under 10000.';

  getAnswer(): string {
    let result = 0;
    for (let i = 1; i < 10000; i++) {
      if (this.isAmicable(i))
        result += i;
    }
    return result.toString();
  }

  private isAmicable(x: number) {
    let m = this.divisorSum(x);
		return m != x && this.divisorSum(m) == x;
  }

  private divisorSum(n: number) {
		let result = 0;
		for (let i = 1; i < n; i++) {
			if (n % i == 0)
				result += i;
		}
		return result;
	}
}
