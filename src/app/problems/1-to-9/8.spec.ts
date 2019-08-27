import { EighthProblem } from './8';

describe('EighthProblem', () => {
  let problem: EighthProblem;

  beforeEach(() => {
    problem = new EighthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('23514624000');
  });
});
