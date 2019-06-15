import { EighteenthProblem } from './eighteenth-problem';

describe('EighteenthProblem', () => {
  let problem: EighteenthProblem;

  beforeEach(() => {
    problem = new EighteenthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('1074');
  });
});
