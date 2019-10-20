import { P48 } from './48';

describe('P48', () => {
  let problem: P48;

  beforeEach(() => {
    problem = new P48();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('9110846700');
  });
});
