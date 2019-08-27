import { NineteenthProblem } from './19';

describe('NineteenthProblem', () => {
  let problem: NineteenthProblem;

  beforeEach(() => {
    problem = new NineteenthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('171');
  });
});
