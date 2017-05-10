export default class Game {
    constructor() {
        this._frames = [
            []
        ]
    }

    frameIsFull(frame, index) {
        if (index == 10) {
            return frame.length === 3;
        }
        return frame.reduce((count, value) => count += value, 0) == 10 || frame.length >= 2;
    }

    frameIsSpare(frame) {
        if (!frame) {
            return false;
        }
        return frame.reduce((count, value) => count += value, 0) == 10 && frame.length == 2;
    }

    frameIsStrike(frame) {
        if (!frame) {
            return false;
        }
        return frame.reduce((count, value) => count += value, 0) == 10 && frame.length == 1;
    }

    roll(pins = 0) {
        const lastFrame = this._frames[this._frames.length - 1];
        if (this.frameIsFull(lastFrame, this._frames.length)) {
            this._frames.push([pins])
        } else {
            lastFrame.push(pins)
        }
    }

    score() {
        return this._frames.reduce(
            (total, frame, frameIndex) => total += frame.reduce(
                (count, value, rollIndex) => {
                    const prevFrame = this._frames[frameIndex - 1];
                    const secondPrevFrame = this._frames[frameIndex - 1];
                    count += value;
                    if (this.frameIsSpare(prevFrame) && rollIndex == 0) {
                        count += value;
                    }
                    if (this.frameIsStrike(prevFrame)) {
                        count += value;
                    }
                    return count;
                },
                0),
            0)
    }
}