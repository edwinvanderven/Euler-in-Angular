import { P38 } from './38';

describe('P38', () => {
  let problem: P38;

  beforeEach(() => {
    problem = new P38();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('932718654');
  });
});
