import { NinethProblem } from './9';

describe('NinethProblem', () => {
  let problem: NinethProblem;

  beforeEach(() => {
    problem = new NinethProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('31875000');
  });
});
