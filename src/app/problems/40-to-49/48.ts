import { IProblem } from '../../app.component.model';

export class P48 implements IProblem {
    public title = 'Problem 48';
    public description =
        'The series, 11 + 22 + 33 + ... + 1010 = 10405071317.' +
        '\nFind the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.';

    getAnswer(): string {
        let result = 0;
        const modulo = 10000000000;

        for (let i = 1; i <= 1000; i++) {
            let sum = i;
            for (let j = 1; j < i; j++) {
                sum *= i;
                sum %= modulo;
            }
            result += sum;
            result %= modulo;
        }

        return result.toString();
    }
}
