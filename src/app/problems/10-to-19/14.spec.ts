import { FourteenthProblem } from './14';

describe('FourteenthProblem', () => {
  let problem: FourteenthProblem;

  beforeEach(() => {
    problem = new FourteenthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('837799');
  });
});
