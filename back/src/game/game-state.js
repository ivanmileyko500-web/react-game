import GameConstants from "./game-constants.js";
import PartFactory from "./part-factory.js";

class GameState {
    constructor() {
        PartFactory.setDefectChance(0.1);
        this.class = PartFactory.getRandomAnomalyClassName();
        this.currentPart = PartFactory.generateAnomaly(this.class);
        this.desc = PartFactory.getClassDescription(this.class);
        this.score = 0;
    }
    getCurrentPart() {
        console.log(this.desc.join('\n'));
        return this.currentPart;
    }
    validateDynamics(data) {
        console.log(data, this.currentPart.validateDynamics(...data));
        return this.currentPart.validateDynamics(...data);
    }
    validateDefectCount(data) {
        console.log(data, this.currentPart.defectCount);
        return this.currentPart.defectCount === data;
    }
    getNextPart(analysData) {
        if (this.validateDynamics(analysData.dynamics) && this.validateDefectCount(analysData.defectCount)) {
            this.score += GameConstants.SCORE_PER_PART;
        } else {
            this.score -= GameConstants.SCORE_PER_PART;
        }
        this.class = PartFactory.getRandomAnomalyClassName();
        this.currentPart = PartFactory.generateAnomaly(this.class);
        this.desc = PartFactory.getClassDescription(this.class);
        console.log(this.desc.join('\n'));
        return this.currentPart;
    }
}

export default new GameState();