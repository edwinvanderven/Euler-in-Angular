import { FirstProblem, SecondProblem, ThirdProblem, FourthProblem, FifthProblem, SixthProblem, SeventhProblem, EighthProblem, NinethProblem, TenthProblem } from './problems/one-to-ten/index';
import { EleventhProblem, TwelfthProblem, ThirteenthProblem, FourteenthProblem, FifteenthProblem,
          SixteenthProblem, SeventeenthProblem, EighteenthProblem, NineteenthProblem, TwentiethProblem } from './problems/eleven-to-twenty/index';
import { TwentyFirstProblem, TwentySecondProblem, TwentyThirdProblem, TwentyFourthProblem, TwentyFifthProblem,
          TwentySixthProblem, TwentySeventhProblem, TwentyEighthProblem, TwentyNinthProblem, ThirtiethProblem } from './problems/twenty-first-to-thirty/index';
import { ThirtyFirstProblem } from './problems/thirty-one-to-forty/thirty-first-problem';
import { ThirtySecondProblem } from './problems/thirty-one-to-forty/thirty-second-problem';
import { ThirtyThirdProblem } from './problems/thirty-one-to-forty/thirty-third-problem';
import { ThirtyFourthProblem } from './problems/thirty-one-to-forty/thirty-fourth-problem';
import { ThirtyFifthProblem } from './problems/thirty-one-to-forty/thirty-fifth-problem';
import { ThirtySixthProblem } from './problems/thirty-one-to-forty/thirty-sixth-problem';
import { ThirtySeventhProblem } from './problems/thirty-one-to-forty/thirty-seventh-problem';
import { ThirtyEighthProblem } from './problems/thirty-one-to-forty/thirty-eighth-problem';

export interface IProblem {
  title: string;
  description: string;
  getAnswer(): string;
}

export const PROBLEMS: IProblem[] = [
  new ThirtyEighthProblem(), new ThirtySeventhProblem(), new ThirtySixthProblem(),
  new ThirtyFifthProblem(), new ThirtyFourthProblem(), new ThirtyThirdProblem(), new ThirtySecondProblem(), new ThirtyFirstProblem(),
  new ThirtiethProblem(), new TwentyNinthProblem(), new TwentyEighthProblem(), new TwentySeventhProblem(), new TwentySixthProblem(),
  new TwentyFifthProblem(), new TwentyFourthProblem(), new TwentyThirdProblem(), new TwentySecondProblem(), new TwentyFirstProblem(),
  new TwentiethProblem(), new NineteenthProblem(), new EighteenthProblem(), new SeventeenthProblem(), new SixteenthProblem(),
  new FifteenthProblem(), new FourteenthProblem(), new ThirteenthProblem(), new TwelfthProblem(), new EleventhProblem(),
  new TenthProblem(), new NinethProblem(), new EighthProblem(), new SeventhProblem(), new SixthProblem(),
  new FifthProblem(), new FourthProblem(), new ThirdProblem(), new SecondProblem(), new FirstProblem()
];
