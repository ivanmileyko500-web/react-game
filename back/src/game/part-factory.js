export default class PartFactory {
    static getRandomRgb() {
        return [
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
        ];
    }
    static createPart({
        rgb = PartFactory.getRandomRgb(),
    } = {}) {
        return {
            rgb
        };
    }
}