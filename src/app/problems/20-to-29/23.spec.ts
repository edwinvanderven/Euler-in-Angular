import { P23 } from './23';

describe('P23', () => {
  let problem: P23;

  beforeEach(() => {
    problem = new P23();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('4179871');
  });
});
