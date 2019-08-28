import { P24 } from './24';

describe('P24', () => {
  let problem: P24;

  beforeEach(() => {
    problem = new P24();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('2783915460');
  });
});
