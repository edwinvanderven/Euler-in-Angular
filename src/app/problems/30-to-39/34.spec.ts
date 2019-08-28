import { P34 } from './34';

describe('P34', () => {
  let problem: P34;

  beforeEach(() => {
    problem = new P34();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('40730');
  });
});
