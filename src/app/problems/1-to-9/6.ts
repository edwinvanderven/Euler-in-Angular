import { IProblem } from '../../app.component.model';

export class P6 implements IProblem {
    public title = 'Problem 6';
    public description =
        'The sum of the squares of the first ten natural numbers is, \n12 + 22 + ... + 102 = 385 \nThe square of the sum of the first ten natural numbers is,' +
        '\n(1 + 2 + ... + 10)2 = 552 = 3025' +
        '\nHence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.' +
        '\nFind the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.';

    getAnswer(): string {
        let result = 0;
        const length = 100;

        let sumOfSquares = 0;
        let squareOfSum = 0;
        for (let i = 1; i <= length; i++) {
            sumOfSquares += Math.pow(i, 2);
            squareOfSum += i;
        }
        squareOfSum = Math.pow(squareOfSum, 2);

        result = squareOfSum - sumOfSquares;
        return result.toString();
    }
}
