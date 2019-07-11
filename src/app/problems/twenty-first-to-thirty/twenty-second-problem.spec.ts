import { TwentySecondProblem } from './twenty-second-problem';

describe('TwentySecondProblem', () => {
  let problem: TwentySecondProblem;

  beforeEach(() => {
    problem = new TwentySecondProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('871198282');
  });
});