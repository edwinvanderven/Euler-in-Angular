import { SeventhProblem } from './7';

describe('SeventhProblem', () => {
  let problem: SeventhProblem;

  beforeEach(() => {
    problem = new SeventhProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('104743');
  });
});
