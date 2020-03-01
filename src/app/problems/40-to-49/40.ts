import { IProblem } from '../../app.component.model';

export class P40 implements IProblem {
    public title = 'Problem 40';
    public description =
        'An irrational decimal fraction is created by concatenating the positive integers:' +
        '\n0.123456789101112131415161718192021...' +
        '\nIt can be seen that the 12th digit of the fractional part is 1.' +
        '\nIf dn represents the nth digit of the fractional part, find the value of the following expression.' +
        '\nd1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000';

    getAnswer(): string {
        const length = 1000002;
        let result = 0;
        let fraction = '0.';
        let i = 1;

        while (fraction.length < length) {
            fraction += i.toString();
            i++;
        }

        const locationsToCheck: number[] = [1, 10, 100, 1000, 10000, 100000, 1000000];
        const numbers: number[] = [];
        locationsToCheck.forEach((x: number) => {
            // add the +1 since we want to exclude the '0.' at the start
            numbers.push(parseInt(fraction.charAt(x + 1), 10));
        });

        result = numbers.reduce((a, b) => a * b);

        return result.toString();
    }
}
