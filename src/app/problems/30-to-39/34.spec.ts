import { ThirtyFourthProblem } from './34';

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
