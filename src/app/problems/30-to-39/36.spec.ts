import { P36 } from './36';

describe('P36', () => {
    let problem: P36;

    beforeEach(() => {
        problem = new P36();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('872187');
    });
});
