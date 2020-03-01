import { IProblem } from '../../app.component.model';

export class P47 implements IProblem {
    public title = 'Problem 47';
    public description =
        'The first two consecutive numbers to have two distinct prime factors are:' +
        '\n14 = 2 × 7' +
        '\n15 = 3 × 5' +
        '\nThe first three consecutive numbers to have three distinct prime factors are:' +
        '\n644 = 2² × 7 × 23' +
        '\n645 = 3 × 5 × 43' +
        '\n646 = 2 × 17 × 19.' +
        '\nFind the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?';

    getAnswer(): string {
        let result = 646;
        let keepSearching = true;

        while (keepSearching) {
            result++;
            if (this.isFourConsecutive(result)) keepSearching = false;
        }

        return result.toString();
    }

    private isFourConsecutive(x: number): boolean {
        if (!this.isConsecutive(x)) return false;
        if (!this.isConsecutive(x + 1)) return false;
        if (!this.isConsecutive(x + 2)) return false;
        if (!this.isConsecutive(x + 3)) return false;
        return true;
    }

    private isConsecutive(x: number): boolean {
        let count = 0;
        for (let i = 2, end = Math.floor(Math.sqrt(x)); i <= end; i++) {
            if (x % i === 0) {
                do x /= i;
                while (x % i === 0);
                count++;
                end = Math.floor(Math.sqrt(x));
            }
        }
        if (x > 1) count++;
        return count === 4;
    }
}
