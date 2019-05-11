import { FirstProblem } from './first-problem';

describe('FirstProblem', () => {
  let problem: FirstProblem;

  beforeEach(() => {
    problem = new FirstProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('233168');
  });
});
