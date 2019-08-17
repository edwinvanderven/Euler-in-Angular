import { ThirtyFourthProblem } from './thirty-fourth-problem';

describe('ThirtyFourthProblem', () => {
  let problem: ThirtyFourthProblem;

  beforeEach(() => {
    problem = new ThirtyFourthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('40730');
  });
});
