import { P17 } from './17';

describe('P17', () => {
  let problem: P17;

  beforeEach(() => {
    problem = new P17();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('21124');
  });
});
