import { P19 } from './19';

describe('P19', () => {
  let problem: P19;

  beforeEach(() => {
    problem = new P19();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('171');
  });
});
