import { P7 } from './7';

describe('P7', () => {
    let problem: P7;

    beforeEach(() => {
        problem = new P7();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('104743');
    });
});
