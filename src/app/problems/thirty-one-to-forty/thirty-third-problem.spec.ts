import { ThirtyThirdProblem } from './thirty-third-problem';

describe('ThirtyThirdProblem', () => {
  let problem: ThirtyThirdProblem;

  beforeEach(() => {
    problem = new ThirtyThirdProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('100');
  });
});
