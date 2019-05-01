import { FourthProblem } from './fourth-problem';

describe('FourthProblem', () => {
  let problem: FourthProblem;

  beforeEach(() => {
    problem = new FourthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('906609');
  });
});
