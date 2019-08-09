import { IProblem } from '../../app.component.model';

export class ThirtyFirstProblem implements IProblem {
  public title = 'Problem 31';
  public description = 'In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:' +
                        '\n1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).' +
                        '\nIt is possible to make £2 in the following way:' +
                        '\n1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p' +
                        '\nHow many different ways can £2 be made using any number of coins?';

  getAnswer(): string {
    const total = 200;
    const coins: number[] = [1, 2, 5, 10, 20, 50, 100, 200];
    const ways: number[] = Array(total + 1).fill(0);
    ways[0] = 1;

    coins.forEach((coin: number) => {
      for (let i = coin; i <= total; i++) {
        ways[i] += ways[i-coin];
      }
    });

    return ways[total].toString();
  }
}
