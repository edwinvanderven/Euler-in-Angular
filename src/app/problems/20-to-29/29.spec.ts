import { P29 } from './29';

describe('P29', () => {
  let problem: P29;

  beforeEach(() => {
    problem = new P29();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('9183');
  });
});
