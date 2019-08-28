import { P18 } from './18';

describe('P18', () => {
  let problem: P18;

  beforeEach(() => {
    problem = new P18();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('1074');
  });
});
