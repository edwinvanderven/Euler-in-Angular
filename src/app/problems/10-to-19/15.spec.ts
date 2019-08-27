import { FifteenthProblem } from './15';

describe('FifteenthProblem', () => {
  let problem: FifteenthProblem;

  beforeEach(() => {
    problem = new FifteenthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('137846528820');
  });
});
