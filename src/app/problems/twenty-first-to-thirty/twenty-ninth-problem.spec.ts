import { TwentyNinthProblem } from './twenty-ninth-problem';

describe('TwentyNinthProblem', () => {
  let problem: TwentyNinthProblem;

  beforeEach(() => {
    problem = new TwentyNinthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('9183');
  });
});
