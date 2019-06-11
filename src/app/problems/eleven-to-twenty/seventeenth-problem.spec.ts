import { SeventeenthProblem } from './seventeenth-problem';

describe('SeventeenthProblem', () => {
  let problem: SeventeenthProblem;

  beforeEach(() => {
    problem = new SeventeenthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('21124');
  });
});
