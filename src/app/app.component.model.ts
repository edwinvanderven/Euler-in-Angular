import { FirstProblem, SecondProblem, ThirdProblem, FourthProblem, FifthProblem, SixthProblem, SeventhProblem, EighthProblem, NinethProblem,  } from './problems/1-to-9/index';
import { TenthProblem, EleventhProblem, TwelfthProblem, ThirteenthProblem, FourteenthProblem,
          FifteenthProblem, SixteenthProblem, SeventeenthProblem, EighteenthProblem, NineteenthProblem } from './problems/10-to-19/index';
import { TwentiethProblem, TwentyFirstProblem, TwentySecondProblem, TwentyThirdProblem, TwentyFourthProblem,
          TwentyFifthProblem, TwentySixthProblem, TwentySeventhProblem, TwentyEighthProblem, TwentyNinthProblem } from './problems/20-to-29/index';

import { ThirtiethProblem } from './problems/30-to-39/30';
import { ThirtyFirstProblem } from './problems/30-to-39/31';
import { ThirtySecondProblem } from './problems/30-to-39/32';
import { ThirtyThirdProblem } from './problems/30-to-39/33';
import { ThirtyFourthProblem } from './problems/30-to-39/34';
import { ThirtyFifthProblem } from './problems/30-to-39/35';
import { ThirtySixthProblem } from './problems/30-to-39/36';
import { ThirtySeventhProblem } from './problems/30-to-39/37';
import { ThirtyEighthProblem } from './problems/30-to-39/38';
import { ThirtyNinthProblem } from './problems/30-to-39/39';

export interface IProblem {
  title: string;
  description: string;
  getAnswer(): string;
}

export const PROBLEMS: IProblem[] = [
  new ThirtyNinthProblem(), new ThirtyEighthProblem(), new ThirtySeventhProblem(), new ThirtySixthProblem(),
  new ThirtyFifthProblem(), new ThirtyFourthProblem(), new ThirtyThirdProblem(), new ThirtySecondProblem(), new ThirtyFirstProblem(),
  new ThirtiethProblem(), new TwentyNinthProblem(), new TwentyEighthProblem(), new TwentySeventhProblem(), new TwentySixthProblem(),
  new TwentyFifthProblem(), new TwentyFourthProblem(), new TwentyThirdProblem(), new TwentySecondProblem(), new TwentyFirstProblem(),
  new TwentiethProblem(), new NineteenthProblem(), new EighteenthProblem(), new SeventeenthProblem(), new SixteenthProblem(),
  new FifteenthProblem(), new FourteenthProblem(), new ThirteenthProblem(), new TwelfthProblem(), new EleventhProblem(),
  new TenthProblem(), new NinethProblem(), new EighthProblem(), new SeventhProblem(), new SixthProblem(),
  new FifthProblem(), new FourthProblem(), new ThirdProblem(), new SecondProblem(), new FirstProblem()
];
