import { TwentiethProblem } from './20';

describe('TwentiethProblem', () => {
  let problem: TwentiethProblem;

  beforeEach(() => {
    problem = new TwentiethProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('683');
  });
});
