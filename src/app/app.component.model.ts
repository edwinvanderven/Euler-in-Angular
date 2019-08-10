import { FirstProblem, SecondProblem, ThirdProblem, FourthProblem, FifthProblem, SixthProblem, SeventhProblem, EighthProblem, NinethProblem, TenthProblem } from './problems/one-to-ten/index';
import { EleventhProblem, TwelfthProblem, ThirteenthProblem, FourteenthProblem, FifteenthProblem, SixteenthProblem, SeventeenthProblem, EighteenthProblem, NineteenthProblem, TwentiethProblem } from './problems/eleven-to-twenty/index';
import { TwentyFirstProblem, TwentySecondProblem, TwentyThirdProblem, TwentyFourthProblem, TwentyFifthProblem, TwentySixthProblem, TwentySeventhProblem, TwentyEighthProblem, TwentyNinthProblem, ThirtiethProblem } from './problems/twenty-first-to-thirty/index';
import { ThirtyFirstProblem } from './problems/thirty-one-to-forty/thirty-first-problem';
import { ThirtySecondProblem } from './problems/thirty-one-to-forty/thirty-second-problem';

export interface IProblem {
  title: string;
  description: string;
  getAnswer(): string;
}

export const PROBLEMS: IProblem[] = [
  new ThirtySecondProblem(), new ThirtyFirstProblem(),
  new ThirtiethProblem(), new TwentyNinthProblem(), new TwentyEighthProblem(), new TwentySeventhProblem(), new TwentySixthProblem(),
  new TwentyFifthProblem(), new TwentyFourthProblem(), new TwentyThirdProblem(), new TwentySecondProblem(), new TwentyFirstProblem(),
  new TwentiethProblem(), new NineteenthProblem(), new EighteenthProblem(), new SeventeenthProblem(), new SixteenthProblem(),
  new FifteenthProblem(), new FourteenthProblem(), new ThirteenthProblem(), new TwelfthProblem(), new EleventhProblem(),
  new TenthProblem(), new NinethProblem(), new EighthProblem(), new SeventhProblem(), new SixthProblem(),
  new FifthProblem(), new FourthProblem(), new ThirdProblem(), new SecondProblem(), new FirstProblem()
];
