import { P4 } from './4';

describe('P4', () => {
  let problem: P4;

  beforeEach(() => {
    problem = new P4();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('906609');
  });
});
