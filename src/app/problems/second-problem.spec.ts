import { SecondProblem } from './second-problem';

describe('SecondProblem', () => {
  let problem: SecondProblem;

  beforeEach(() => {
    problem = new SecondProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('4613732');
  });
});
