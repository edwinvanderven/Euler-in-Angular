import { TwentyThirdProblem } from './23';

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
