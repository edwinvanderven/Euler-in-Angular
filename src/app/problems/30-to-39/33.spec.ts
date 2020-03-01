import { P33 } from './33';

describe('P33', () => {
    let problem: P33;

    beforeEach(() => {
        problem = new P33();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('100');
    });
});
