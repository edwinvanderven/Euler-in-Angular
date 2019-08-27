import { TwelfthProblem } from './12';

describe('TwelfthProblem', () => {
  let problem: TwelfthProblem;

  beforeEach(() => {
    problem = new TwelfthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('76576500');
  });
});
