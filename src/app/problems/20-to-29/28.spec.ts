import { P28 } from './28';

describe('P28', () => {
  let problem: P28;

  beforeEach(() => {
    problem = new P28();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('669171001');
  });
});
