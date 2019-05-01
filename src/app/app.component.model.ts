import { FirstProblem } from './problems/first-problem';
import { SecondProblem } from './problems/second-problem';
import { ThirdProblem } from './problems/third-problem';
import { FourthProblem } from './problems/fourth-problem';

export interface IProblem {
  title: string;
  description: string;
  getAnswer(): string;
}

export const PROBLEMS: IProblem[] = [
  new FourthProblem(),
  new ThirdProblem(),
  new SecondProblem(),
  new FirstProblem()
];
