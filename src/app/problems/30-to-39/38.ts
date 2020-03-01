import { IProblem } from '../../app.component.model';
import { Helper } from 'src/app/utils/helper';

export class P38 implements IProblem {
    public title = 'Problem 38';
    public description =
        'Take the number 192 and multiply it by each of 1, 2, and 3:' +
        '\n192 × 1 = 192' +
        '\n192 × 2 = 384' +
        '\n192 × 3 = 576' +
        '\nBy concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)' +
        '\nThe same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).' +
        '\nWhat is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?';

    getAnswer(): string {
        const result = this.getPandigitalResult();
        return result;
    }

    private getPandigitalResult(): string {
        for (let n = 9876; n > 9123; n--) {
            const result = String(n * 1) + String(n * 2);
            if (Helper.isPandigital(result)) {
                return result;
            }
        }
    }
}
