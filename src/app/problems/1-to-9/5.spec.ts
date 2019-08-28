import { P5 } from './5';

describe('P5', () => {
  let problem: P5;

  beforeEach(() => {
    problem = new P5();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('232792560');
  });
});
