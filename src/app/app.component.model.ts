import { FirstProblem } from './problems/first-problem';
import { SecondProblem } from './problems/second-problem';
import { ThirdProblem } from './problems/third-problem';
import { FourthProblem } from './problems/fourth-problem';
import { FifthProblem } from './problems/fifth-problem';
import { SixthProblem } from './problems/sixth-problem';
import { SeventhProblem } from './problems/seventh-problem';
import { EighthProblem } from './problems/eighth-problem';
import { NinethProblem } from './problems/nineth-problem';

export interface IProblem {
  title: string;
  description: string;
  getAnswer(): string;
}

export const PROBLEMS: IProblem[] = [
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
