import { ThirteenthProblem } from './thirteenth-problem';

describe('ThirteenthProblem', () => {
  let problem: ThirteenthProblem;

  beforeEach(() => {
    problem = new ThirteenthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('5537376230');
  });
});
