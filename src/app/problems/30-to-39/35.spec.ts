import { P35 } from './35';

describe('P35', () => {
    let problem: P35;

    beforeEach(() => {
        problem = new P35();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('55');
    });
});
