import { ThirtyThirdProblem } from './33';

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
