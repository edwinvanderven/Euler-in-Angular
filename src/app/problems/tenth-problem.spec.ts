import { TenthProblem } from './tenth-problem';

describe('TenthProblem', () => {
  let problem: TenthProblem;

  beforeEach(() => {
    problem = new TenthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('142913828922');
  });
});
