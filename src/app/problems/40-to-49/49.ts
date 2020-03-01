import { IProblem } from '../../app.component.model';
import { Helper } from 'src/app/utils/helper';

const MAX_LENGTH = 10000;
export class P49 implements IProblem {
    public title = 'Problem 49';
    public description =
        'The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, ' +
        'is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.' +
        '\nThere are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.' +
        '\nWhat 12-digit number do you form by concatenating the three terms in this sequence?';

    getAnswer(): string {
        for (let base = 1000; base < MAX_LENGTH; base++) {
            if (Helper.isPrime(base)) {
                for (let j = 1; j < MAX_LENGTH; j++) {
                    const firstPermutation = base + j;
                    const secondPermutation = firstPermutation + j;
                    const arePermutationsCorrect =
                        this.isPermutation(firstPermutation, base) && this.isPermutation(secondPermutation, base);

                    if (arePermutationsCorrect && (base !== 1487 || firstPermutation !== 4817)) {
                        return '' + base.toString() + firstPermutation.toString() + secondPermutation.toString();
                    }
                }
            }
        }

        return '0';
    }

    private isPermutation(x: number, base: number): boolean {
        return x < MAX_LENGTH && Helper.isPrime(x) && Helper.hasSameDigits(x, base);
    }
}
