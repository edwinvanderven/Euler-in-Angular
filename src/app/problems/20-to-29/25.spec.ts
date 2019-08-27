import { TwentyFifthProblem } from './25';

describe('TwentyFifthProblem', () => {
  let problem: TwentyFifthProblem;

  beforeEach(() => {
    problem = new TwentyFifthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('4782');
  });
});
