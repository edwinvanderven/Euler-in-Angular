import { P42 } from './42';

describe('P42', () => {
  let problem: P42;

  beforeEach(() => {
    problem = new P42();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('162');
  });
});
