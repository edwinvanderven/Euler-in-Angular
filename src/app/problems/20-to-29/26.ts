import { IProblem } from '../../app.component.model';

export class P26 implements IProblem {
    public title = 'Problem 26';
    public description =
        'A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:' +
        '\n1/2	= 	0.5, 1/3	= 	0.(3), 1/4	= 	0.25, 1/5	= 	0.2, 1/6	= 	0.1(6), 1/7	= 	0.(142857), 1/8	= 	0.125, 1/9	= 	0.(1), 1/10	= 	0.1' +
        '\nWhere 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.' +
        '\nFind the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part..';

    getAnswer(): string {
        let result = 1000;
        let longestLength = 0;
        for (result; result > 1; result--) {
            longestLength = this.getCycleLength(result);
            if (longestLength >= result - 1) {
                break;
            }
        }

        return result.toString();
    }

    private getCycleLength(remainderCount: number) {
        const foundRemainders = [];
        foundRemainders.length = remainderCount;
        let value = 1;
        let position = 0;

        while (foundRemainders[value] === undefined && value !== 0) {
            foundRemainders[value] = position;
            value *= 10;
            value %= remainderCount;
            position++;
        }

        return position - foundRemainders[value];
    }
}
