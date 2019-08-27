import { FifthProblem } from './5';

describe('FifthProblem', () => {
  let problem: FifthProblem;

  beforeEach(() => {
    problem = new FifthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('232792560');
  });
});
