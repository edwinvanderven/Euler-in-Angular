import { FirstProblem } from './first-problem';

describe('FirstProblem', () => {
  let first: FirstProblem;

  beforeEach(() => {
    first = new FirstProblem();
  });

  it('should exist', () => {
    expect(first).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(first.getAnswer()).toEqual('233168');
  });
});
