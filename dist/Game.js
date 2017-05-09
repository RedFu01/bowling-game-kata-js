"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class Game {
    constructor() {
        this._frames = [[]];
    }

    frameIsFull(frame) {
        return frame.reduce((count, value) => count += value, 0) == 10 || frame.length >= 2;
    }

    roll(pins = 0) {
        const lastFrame = this._frames[this._frames.length - 1];
        if (this.frameIsFull(lastFrame)) {
            this._frames.push([pins]);
        } else {
            lastFrame.push(pins);
        }
    }

    score() {
        return this._frames.reduce((total, frame) => total += frame.reduce((count, value) => count += value, 0), 0);
    }
}
exports.default = Game;