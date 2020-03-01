import { IProblem } from '../../app.component.model';
import { Helper } from 'src/app/utils/helper';

export class P36 implements IProblem {
    public title = 'Problem 36';
    public description =
        'The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.' +
        '\nFind the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.' +
        '\n(Please note that the palindromic number, in either base, may not include leading zeros.)';

    getAnswer(): string {
        let result = 0;
        const length = 1000000;
        for (let i = 0; i < length; i++) {
            if (Helper.isPalindrome(i.toString()) && Helper.isPalindrome(i.toString(2))) result += i;
        }
        return result.toString();
    }
}
