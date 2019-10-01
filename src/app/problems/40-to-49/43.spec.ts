import { P43 } from './43';

describe('P43', () => {
  let problem: P43;

  beforeEach(() => {
    problem = new P43();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('16695334890');
  });
});
