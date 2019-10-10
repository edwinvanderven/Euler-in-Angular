import { P45 } from './45';

describe('P45', () => {
  let problem: P45;

  beforeEach(() => {
    problem = new P45();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('1533776805');
  });
});
