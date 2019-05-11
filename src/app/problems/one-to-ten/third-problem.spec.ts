import { ThirdProblem } from './third-problem';

describe('ThirdProblem', () => {
  let problem: ThirdProblem;

  beforeEach(() => {
    problem = new ThirdProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('6857');
  });
});
