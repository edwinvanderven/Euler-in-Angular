import { ThirtyNinthProblem } from './39';

describe('ThirtyNinthProblem', () => {
  let problem: ThirtyNinthProblem;

  beforeEach(() => {
    problem = new ThirtyNinthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('840');
  });
});
