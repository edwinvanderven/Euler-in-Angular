import { ThirtySeventhProblem } from './thirty-seventh-problem';

describe('ThirtySeventhProblem', () => {
  let problem: ThirtySeventhProblem;

  beforeEach(() => {
    problem = new ThirtySeventhProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('748317');
  });
});
