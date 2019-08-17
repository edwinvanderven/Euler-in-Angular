import { ThirtyFifthProblem } from './thirty-fifth-problem';

describe('ThirtyFifthProblem', () => {
  let problem: ThirtyFifthProblem;

  beforeEach(() => {
    problem = new ThirtyFifthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('55');
  });
});
