import { P25 } from './25';

describe('P25', () => {
  let problem: P25;

  beforeEach(() => {
    problem = new P25();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('4782');
  });
});
