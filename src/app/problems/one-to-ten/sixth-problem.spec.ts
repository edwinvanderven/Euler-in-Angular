import { SixthProblem } from './sixth-problem';

describe('SixthProblem', () => {
  let problem: SixthProblem;

  beforeEach(() => {
    problem = new SixthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('25164150');
  });
});
