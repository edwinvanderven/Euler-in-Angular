import { P27 } from './27';

describe('P27', () => {
  let problem: P27;

  beforeEach(() => {
    problem = new P27();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('-59231');
  });
});
