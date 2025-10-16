export default class PartFactory {
    static getRandomRgb() {
        return [
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
        ];
    }
    static getRandomTruefalse() {
        return [
            {
                true: Math.floor(Math.random() * 255 + 1),
                false: Math.floor(Math.random() * 255 + 1)
            },
            {
                true: Math.floor(Math.random() * 255 + 1),
                false: Math.floor(Math.random() * 255 + 1)
            },
            {
                true: Math.floor(Math.random() * 255 + 1),
                false: Math.floor(Math.random() * 255 + 1)
            }
        ]
    }
    static getRandomDouble() {
        return [
            Math.floor(Math.random() * 255 + 1),
            Math.floor(Math.random() * 511 + 1)
        ]; 
    }
    static createPart({
        rgb = PartFactory.getRandomRgb(),
        truefalse = PartFactory.getRandomTruefalse(),
        double = PartFactory.getRandomDouble()
    } = {}) {
        return { rgb, truefalse, double };
    }
}