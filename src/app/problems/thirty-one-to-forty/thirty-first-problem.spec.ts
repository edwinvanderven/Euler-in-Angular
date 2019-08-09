import { ThirtyFirstProblem } from './thirty-first-problem';

describe('ThirtyFirstProblem', () => {
  let problem: ThirtyFirstProblem;

  beforeEach(() => {
    problem = new ThirtyFirstProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('73682');
  });
});
