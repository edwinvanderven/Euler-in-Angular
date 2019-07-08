import { TwentyFourthProblem } from './twenty-fourth-problem';

describe('TwentyFourthProblem', () => {
  let problem: TwentyFourthProblem;

  beforeEach(() => {
    problem = new TwentyFourthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('2783915460');
  });
});
