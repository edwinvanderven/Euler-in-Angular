import { ThirtySixthProblem } from './thirty-sixth-problem';

describe('ThirtySixthProblem', () => {
  let problem: ThirtySixthProblem;

  beforeEach(() => {
    problem = new ThirtySixthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('872187');
  });
});
