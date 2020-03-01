import { P50 } from './50';

describe('P50', () => {
    let problem: P50;

    beforeEach(() => {
        problem = new P50();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('997651');
    });
});
