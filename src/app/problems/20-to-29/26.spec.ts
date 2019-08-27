import { TwentySixthProblem } from './26';

describe('TwentySixthProblem', () => {
  let problem: TwentySixthProblem;

  beforeEach(() => {
    problem = new TwentySixthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('983');
  });
});
