import { P15 } from './15';

describe('P15', () => {
    let problem: P15;

    beforeEach(() => {
        problem = new P15();
    });

    it('should exist', () => {
        expect(problem).toBeDefined();
    });

    it('should return the correct answer', () => {
        expect(problem.getAnswer()).toEqual('137846528820');
    });
});
