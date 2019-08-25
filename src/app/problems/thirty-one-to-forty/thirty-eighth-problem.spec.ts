import { ThirtyEighthProblem } from './thirty-eighth-problem';

describe('ThirtyEighthProblem', () => {
  let problem: ThirtyEighthProblem;

  beforeEach(() => {
    problem = new ThirtyEighthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('932718654');
  });
});
