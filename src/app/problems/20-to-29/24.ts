import { IProblem } from '../../app.component.model';

export class P24 implements IProblem {
    public title = 'Problem 24';
    public description =
        'A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. ' +
        '\nIf all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:' +
        '\n012   021   102   120   201   210' +
        '\nWhat is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?.';

    getAnswer(): string {
        const permutation = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < 999999; i++) {
            this.nextPermutation(permutation);
        }
        return permutation.join().replace(/,/g, '');
    }

    // courtesy of https://www.nayuki.io/page/next-lexicographical-permutation-algorithm who explained it very well
    private nextPermutation(array) {
        // Find non-increasing suffix
        let i = array.length - 1;
        while (i > 0 && array[i - 1] >= array[i]) i--;
        if (i <= 0) return false;

        // Find successor to pivot
        let j = array.length - 1;
        while (array[j] <= array[i - 1]) j--;
        let temp = array[i - 1];
        array[i - 1] = array[j];
        array[j] = temp;

        // Reverse suffix
        j = array.length - 1;
        while (i < j) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j--;
        }
        return true;
    }
}
