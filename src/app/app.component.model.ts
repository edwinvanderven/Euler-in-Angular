import { FirstProblem } from './problems/first-problem';
import { SecondProblem } from './problems/second-problem';

export interface IProblem {
  title: string;
  description: string;
  getAnswer(): string;
}

export const PROBLEMS: IProblem[] = [
  new FirstProblem(),
  new SecondProblem()
];
