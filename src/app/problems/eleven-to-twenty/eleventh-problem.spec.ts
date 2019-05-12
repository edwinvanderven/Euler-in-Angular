import { EleventhProblem } from './eleventh-problem';

describe('EleventhProblem', () => {
  let problem: EleventhProblem;

  beforeEach(() => {
    problem = new EleventhProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('70600674');
  });
});
