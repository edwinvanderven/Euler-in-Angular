import { ThirtySecondProblem } from './32';

describe('ThirtySecondProblem', () => {
  let problem: ThirtySecondProblem;

  beforeEach(() => {
    problem = new ThirtySecondProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('45228');
  });
});
