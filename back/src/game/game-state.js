import GameConstants from "./game-constants.js";
import PartFactory from "./part-factory.js";

class GameState {
    constructor() {
        this.currentPart = PartFactory.createPart();
        this.score = 0;
    }
    getCurrentPart() {
        return this.currentPart;
    }
    getNextPart(analysData) {
        this.score += analysData.score;
        console.log(analysData, this.score);
        this.currentPart = PartFactory.createPart();
        return this.currentPart;
    }
}

export default new GameState();