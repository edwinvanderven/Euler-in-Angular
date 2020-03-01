import { IProblem } from '../../app.component.model';

export class P33 implements IProblem {
    public title = 'Problem 33';
    public description =
        'The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.' +
        '\nWe shall consider fractions like, 30/50 = 3/5, to be trivial examples.' +
        '\nThere are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.' +
        '\nIf the product of these four fractions is given in its lowest common terms, find the value of the denominator.';

    getAnswer(): string {
        let result = 1;
        for (let i = 1; i < 10; i++) {
            for (let j = 1; j < i; j++) {
                const a = 9 * j * i;
                const b = 10 * j - i;
                const quotient = Math.floor(a / b);
                const remainderExists = Boolean(a % b);

                if (!remainderExists && quotient <= 9) result *= i / j;
            }
        }
        return result.toString();
    }
}
