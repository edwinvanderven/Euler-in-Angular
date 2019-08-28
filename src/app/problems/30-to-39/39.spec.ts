import { P39 } from './39';

describe('P39', () => {
  let problem: P39;

  beforeEach(() => {
    problem = new P39();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('840');
  });
});
