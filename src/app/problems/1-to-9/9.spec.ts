import { P9 } from './9';

describe('P9', () => {
  let problem: P9;

  beforeEach(() => {
    problem = new P9();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('31875000');
  });
});
