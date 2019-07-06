import { TwentyThirdProblem } from './twenty-third-problem';

describe('TwentyThirdProblem', () => {
  let problem: TwentyThirdProblem;

  beforeEach(() => {
    problem = new TwentyThirdProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('4179871');
  });
});
