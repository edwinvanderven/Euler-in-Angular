import { ThirtyEighthProblem } from './38';

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
