import { P37 } from './37';

describe('P37', () => {
    let problem: P37;

    beforeEach(() => {
        problem = new P37();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('748317');
    });
});
