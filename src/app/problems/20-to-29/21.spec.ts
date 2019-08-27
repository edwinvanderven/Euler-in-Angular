import { TwentyFirstProblem } from './21';

describe('TwentyFirstProblem', () => {
  let problem: TwentyFirstProblem;

  beforeEach(() => {
    problem = new TwentyFirstProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('31626');
  });
});
