import { IProblem } from '../../app.component.model';

export class P14 implements IProblem {
    public title = 'Problem 14';
    public description =
        'The following iterative sequence is defined for the set of positive integers:' +
        '\nn → n/2 (n is even)' +
        '\nn → 3n + 1 (n is odd)' +
        '\nUsing the rule above and starting with 13, we generate the following sequence:' +
        '\n13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1' +
        '\nIt can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.' +
        '\nWhich starting number, under one million, produces the longest chain?' +
        '\nNOTE: Once the chain starts the terms are allowed to go above one million.';

    getAnswer(): string {
        let result = 1;
        let highestChain = 2;
        const length = 1000000;
        for (let i = 2; i < length; i++) {
            const n = this.getCollatzConjectureLength(i);
            if (n > highestChain) {
                highestChain = n;
                result = i;
            }
        }

        return result.toString();
    }

    private getCollatzConjectureLength(x: number): number {
        let result = 1;
        while (x > 1) {
            x = this.isEven(x) ? this.doEven(x) : this.doOdd(x);
            result++;
        }
        return result;
    }

    private isEven = (x: number): boolean => x % 2 === 0;
    private doEven = (x: number): number => x / 2;
    private doOdd = (x: number): number => x * 3 + 1;
}
