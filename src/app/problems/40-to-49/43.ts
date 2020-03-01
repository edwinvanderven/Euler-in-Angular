import { IProblem } from '../../app.component.model';

export class P43 implements IProblem {
    public title = 'Problem 43';
    public description =
        'The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.' +
        '\nLet d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:' +
        '\nd2d3d4=406 is divisible by 2' +
        '\nd3d4d5=063 is divisible by 3' +
        '\nd4d5d6=635 is divisible by 5' +
        '\nd5d6d7=357 is divisible by 7' +
        '\nd6d7d8=572 is divisible by 11' +
        '\nd7d8d9=728 is divisible by 13' +
        '\nd8d9d10=289 is divisible by 17' +
        '\nFind the sum of all 0 to 9 pandigital numbers with this property.';

    getAnswer(): string {
        let result = 0;

        // Explained on dreamshire: https://blog.dreamshire.com/project-euler-43-solution/
        // ----- ----- ----- -----
        // Some observations
        // Observation 1: d4d5d6 must be divisible by 5 then:
        // d6 = {0, 5}.

        // Observation 2: d6d7d8 must to be divisible by 11 and, according to Obs. 1, has to start with a {0, 5}. Well, it can’t start with 0 as that would yield non-unique digits, so it has to start with 5, i.e., d6 = 5.
        // d6d7d8 = {506, 517, 528, 539, 561, 572, 583, 594}

        // Observation 3: d7d8d9 must be divisible by 13, begin with {06, 17, 28, 39, 61, 72, 83, 94} by Obs. 2, contain no 5s and have only unique digits:
        // d7d8d9 = {286 390 728 832}

        // Observation 4: d8d9d10 must be divisible by 17, begin with {28, 32, 86, 90} by Obs. 3, contain no 5s and have only unique digits:
        // d8d9d10 = {289, 867, 901}

        // Observation 5: d5d6d7 must be divisible by 7, end with {52, 53, 57, 58} by Obs. 2 & 3 and have only unique digits:
        // d5d6d7 = {357, 952}

        // We have reduced our possibilities for the last 6 digits using our 5 observations to:
        // d5d6d7d8d9d10 = {357289, 952867}

        // Observation 6: d3d4d5 must be divisible by 3, not contain {2, 5, 7, 8} since they have been place, end in {3, 9}, have all unique digits and an even middle number:
        // d3d4d5 = {063, 309, 603}

        // This forces d1d2 to {14, 41}

        // Our final set is: {1406357289, 1430952867, 1460357289, 4106357289, 4130952867, 4160357289}

        const a = 1406357289;
        const b = 1430952867;
        const c = 1460357289;
        const d = 4106357289;
        const e = 4130952867;
        const f = 4160357289;

        result = a + b + c + d + e + f;
        return result.toString();
    }
}
