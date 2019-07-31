import { ThirtiethProblem } from './thirtieth-problem';

describe('ThirtiethProblem', () => {
  let problem: ThirtiethProblem;

  beforeEach(() => {
    problem = new ThirtiethProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('443839');
  });
});
