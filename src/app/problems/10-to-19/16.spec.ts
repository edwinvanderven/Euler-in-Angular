import { P16 } from './16';

describe('P16', () => {
    let problem: P16;

    beforeEach(() => {
        problem = new P16();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('1366');
    });
});
