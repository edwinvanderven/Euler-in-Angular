import { TwentyNinthProblem } from './29';

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
