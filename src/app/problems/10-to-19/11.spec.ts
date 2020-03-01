import { P11 } from './11';

describe('P11', () => {
    let problem: P11;

    beforeEach(() => {
        problem = new P11();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('70600674');
    });
});
