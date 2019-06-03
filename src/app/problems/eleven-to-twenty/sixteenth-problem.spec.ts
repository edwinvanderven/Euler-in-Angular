import { SixteenthProblem } from './sixteenth-problem';

describe('SixteenthProblem', () => {
  let problem: SixteenthProblem;

  beforeEach(() => {
    problem = new SixteenthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('1366');
  });
});
