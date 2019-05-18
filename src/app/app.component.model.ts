import { FirstProblem } from './problems/one-to-ten/first-problem';
import { SecondProblem } from './problems/one-to-ten/second-problem';
import { ThirdProblem } from './problems/one-to-ten/third-problem';
import { FourthProblem } from './problems/one-to-ten/fourth-problem';
import { FifthProblem } from './problems/one-to-ten/fifth-problem';
import { SixthProblem } from './problems/one-to-ten/sixth-problem';
import { SeventhProblem } from './problems/one-to-ten/seventh-problem';
import { EighthProblem } from './problems/one-to-ten/eighth-problem';
import { NinethProblem } from './problems/one-to-ten/nineth-problem';
import { TenthProblem } from './problems/one-to-ten/tenth-problem';
import { EleventhProblem } from './problems/eleven-to-twenty/eleventh-problem';
import { TwelfthProblem } from './problems/eleven-to-twenty/twelfth-problem';
import { ThirteenthProblem } from './problems/eleven-to-twenty/thirteenth-problem';
import { FourteenthProblem } from './problems/eleven-to-twenty/fourteenth-problem';

export interface IProblem {
  title: string;
  description: string;
  getAnswer(): string;
}

export const PROBLEMS: IProblem[] = [
  new FourteenthProblem(),
  new ThirteenthProblem(),
  new TwelfthProblem(),
  new EleventhProblem(),
  new TenthProblem(),
  new NinethProblem(),
  new EighthProblem(),
  new SeventhProblem(),
  new SixthProblem(),
  new FifthProblem(),
  new FourthProblem(),
  new ThirdProblem(),
  new SecondProblem(),
  new FirstProblem()
];
