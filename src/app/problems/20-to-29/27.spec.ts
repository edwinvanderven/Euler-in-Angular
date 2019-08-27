import { TwentySeventhProblem } from './27';

describe('TwentySeventhProblem', () => {
  let problem: TwentySeventhProblem;

  beforeEach(() => {
    problem = new TwentySeventhProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('-59231');
  });
});
