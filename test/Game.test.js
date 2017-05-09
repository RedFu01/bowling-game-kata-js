import Game from '../dist/Game';

function rollSome(pins, repititions, game) {
    for (let i = 0; i < repititions; i++) {
        game.roll(pins)
    }
}

describe('Game', () => {
    it('should create a game', () => {
        const game = new Game();
    })

    it('should work if we roll (Let\'s roll!)', () => {
        const game = new Game();
        game.roll(0);
    })

    it('should return a score', () => {
        const game = new Game();

        game.roll(0);
        game.roll(0);

        const score = game.score();
        expect(typeof score).toBe('number');
        expect(score).toBe(0);
    })

    it('should count the score for an entire game', () => {
        const game = new Game();

        rollSome(1, 10, game);

        const score = game.score();
        expect(score).toBe(10);

    })

    it('should handle spares', () => {
        const game = new Game();

        game.roll(5)
        game.roll(5)
        game.roll(2)

        const score = game.score();
        expect(score).toBe(14);

    })

})