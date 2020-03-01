import { P32 } from './32';

describe('P32', () => {
    let problem: P32;

    beforeEach(() => {
        problem = new P32();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('45228');
    });
});
