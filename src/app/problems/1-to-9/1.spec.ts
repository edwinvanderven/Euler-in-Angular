import { P1 } from './1';

describe('P1', () => {
    let problem: P1;

    beforeEach(() => {
        problem = new P1();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('233168');
    });
});
