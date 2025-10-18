export default class PartFactory {
    static getClassDescription(className) {
        const cls = PartFactory.anomalyClasses[className];
        if (!cls) {
            throw new Error(`Unknown anomaly class: ${className}`);
        }

        const lines = [];

        // RGB (фотонный спектр)
        if (className === 'Alpha') {
            lines.push('Цвет (RGB): [100–155, 100–155, 100–155]');
        } else if (className === 'Beta') {
            lines.push('Цвет (RGB): [50–200, 20–230, 30–220]');
        } else if (className === 'Gamma') {
            lines.push('Цвет (RGB): [0–255, 0–255, 0–255]');
        } else if (className === 'Delta') {
            lines.push('Цвет (RGB): [120–135, 120–135, 120–135]');
        } else if (className === 'Omega') {
            lines.push('Цвет (RGB): любые значения, сумма > 600');
        }

        // True/False (логический потенциал)
        if (className === 'Alpha') {
            lines.push('Логика (T/F): все пары [100–150 / 100–150]');
        } else if (className === 'Beta') {
            lines.push('Логика (T/F): 2 пары сбалансированы, 1 — дисбаланс (T≥200/F≤50 или наоборот)');
        } else if (className === 'Gamma') {
            lines.push('Логика (T/F): все 3 пары в сильном дисбалансе');
        } else if (className === 'Delta') {
            lines.push('Логика (T/F): 2 пары почти сбалансированы, 1 — скрытый дисбаланс (разница 5–10)');
        } else if (className === 'Omega') {
            lines.push('Логика (T/F): 2 пары в дисбалансе, 1 — инвертирована');
        }

        // Double (двойной импульс)
        if (className === 'Alpha') {
            lines.push('Импульс: [80–120, 200–300]');
        } else if (className === 'Beta') {
            lines.push('Импульс: [150–255, 350–511]');
        } else if (className === 'Gamma') {
            lines.push('Импульс: [1–255, 1–511]');
        } else if (className === 'Delta') {
            lines.push('Импульс: [95–105, 250–260]');
        } else if (className === 'Omega') {
            lines.push('Импульс: [240–255, 490–511]');
        }

        // Динамические требования
        if (className === 'Alpha') {
            lines.push('Динамика: d1 ≥ 70, d2 ≥ 70, diff ≤ 10');
        } else if (className === 'Beta') {
            lines.push('Динамика: d1 ≥ 50, d2 ≥ 50, diff ≤ 15');
        } else if (className === 'Gamma') {
            lines.push('Динамика: d1 ≥ 30, d2 ≥ 30, diff ≤ 5');
        } else if (className === 'Delta') {
            lines.push('Динамика: d1 ≥ 80, d2 ≥ 80, diff ≤ 3');
        } else if (className === 'Omega') {
            lines.push('Динамика: d1 ≥ 40, d2 ≥ 40, diff = 0');
        }

        return lines;
    }

    static defectChance = 0;

    static getRandomAnomalyClassName() { return Object.keys(PartFactory.anomalyClasses)[PartFactory.randInt(0, Object.keys(PartFactory.anomalyClasses).length - 1)]; }

    static setDefectChance(value) { PartFactory.defectChance = value; }

    static randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static getRandomRgbValue() {
        return Math.floor(Math.random() * 256);
    }

    static getRandomTrueFalseValue() {
        return Math.floor(Math.random() * 255 + 1);
    }

    static getRandomDoubleValue(index) {
        return index === 0 
            ? Math.floor(Math.random() * 255 + 1)
            : Math.floor(Math.random() * 511 + 1);
    }

    static anomalyClasses = {
        'Alpha': {
            rgb: () => [PartFactory.randInt(100, 155), PartFactory.randInt(100, 155), PartFactory.randInt(100, 155)],
            truefalse: () => [
                { true: PartFactory.randInt(100, 150), false: PartFactory.randInt(100, 150) },
                { true: PartFactory.randInt(100, 150), false: PartFactory.randInt(100, 150) },
                { true: PartFactory.randInt(100, 150), false: PartFactory.randInt(100, 150) }
            ],
            double: () => [PartFactory.randInt(80, 120), PartFactory.randInt(200, 300)],
            validateDynamics: (d1, d2, diff) => d1 >= 70 && d2 >= 70 && diff <= 10
        },
        'Beta': {
            rgb: () => [PartFactory.randInt(50, 200), PartFactory.randInt(20, 230), PartFactory.randInt(30, 220)],
            truefalse: () => {
                const balanced = () => ({ true: PartFactory.randInt(100, 150), false: PartFactory.randInt(100, 150) });
                const imbalanced = () => {
                    if (Math.random() < 0.5) {
                        return { true: PartFactory.randInt(200, 255), false: PartFactory.randInt(1, 50) };
                    } else {
                        return { true: PartFactory.randInt(1, 50), false: PartFactory.randInt(200, 255) };
                    }
                };
                const arr = [balanced(), balanced(), imbalanced()];
                return arr.sort(() => Math.random() - 0.5);
            },
            double: () => [PartFactory.randInt(150, 255), PartFactory.randInt(350, 511)],
            validateDynamics: (d1, d2, diff) => d1 >= 50 && d2 >= 50 && diff <= 15
        },
        'Gamma': {
            rgb: () => [PartFactory.randInt(0, 255), PartFactory.randInt(0, 255), PartFactory.randInt(0, 255)],
            truefalse: () => {
                return Array(3).fill(null).map(() => {
                    if (Math.random() < 0.5) {
                        return { true: PartFactory.randInt(200, 255), false: PartFactory.randInt(1, 50) };
                    } else {
                        return { true: PartFactory.randInt(1, 50), false: PartFactory.randInt(200, 255) };
                    }
                });
            },
            double: () => [PartFactory.randInt(1, 255), PartFactory.randInt(1, 511)],
            validateDynamics: (d1, d2, diff) => d1 >= 30 && d2 >= 30 && diff <= 5
        },
        'Delta': {
            rgb: () => [PartFactory.randInt(120, 135), PartFactory.randInt(120, 135), PartFactory.randInt(120, 135)],
            truefalse: () => {
                const nearBalanced = () => {
                    const base = PartFactory.randInt(120, 135);
                    return { true: base, false: base + PartFactory.randInt(-5, 5) };
                };
                const hiddenImbalance = () => {
                    const t = PartFactory.randInt(125, 135);
                    const f = t + (Math.random() < 0.5 ? PartFactory.randInt(-10, -5) : PartFactory.randInt(5, 10));
                    return { true: t, false: Math.max(1, Math.min(255, f)) };
                };
                const arr = [nearBalanced(), nearBalanced(), hiddenImbalance()];
                return arr.sort(() => Math.random() - 0.5);
            },
            double: () => [PartFactory.randInt(95, 105), PartFactory.randInt(250, 260)],
            validateDynamics: (d1, d2, diff) => d1 >= 80 && d2 >= 80 && diff <= 3
        },
        'Omega': {
            rgb: () => {
                let r, g, b;
                do {
                    r = PartFactory.randInt(0, 255);
                    g = PartFactory.randInt(0, 255);
                    b = PartFactory.randInt(0, 255);
                } while (r + g + b <= 600);
                return [r, g, b];
            },
            truefalse: () => {
                const imbalanced = () => {
                    if (Math.random() < 0.5) {
                        return { true: PartFactory.randInt(240, 255), false: PartFactory.randInt(1, 15) };
                    } else {
                        return { true: PartFactory.randInt(1, 15), false: PartFactory.randInt(240, 255) };
                    }
                };
                const inverted = () => {
                    if (Math.random() < 0.5) {
                        return { true: PartFactory.randInt(1, 15), false: PartFactory.randInt(240, 255) };
                    } else {
                        return { true: PartFactory.randInt(240, 255), false: PartFactory.randInt(1, 15) };
                    }
                };
                return [imbalanced(), imbalanced(), inverted()];
            },
            double: () => [PartFactory.randInt(240, 255), PartFactory.randInt(490, 511)],
            validateDynamics: (d1, d2, diff) => d1 >= 40 && d2 >= 40 && diff === 0
        }
    };

    static _applyDefectToRgbWithCount(correctRgb, defectChance) {
        let defectCount = 0;
        const rgb = correctRgb.map(val => {
            if (Math.random() < defectChance) {
                defectCount++;
                return PartFactory.getRandomRgbValue();
            }
            return val;
        });
        return { rgb, defectCount };
    }

    static _applyDefectToTruefalseWithCount(correctTf, defectChance) {
        let defectCount = 0;
        const truefalse = correctTf.map(pair => ({
            true: Math.random() < defectChance ? (defectCount++, PartFactory.getRandomTrueFalseValue()) : pair.true,
            false: Math.random() < defectChance ? (defectCount++, PartFactory.getRandomTrueFalseValue()) : pair.false
        }));
        return { truefalse, defectCount };
    }

    static _applyDefectToDoubleWithCount(correctDouble, defectChance) {
        let defectCount = 0;
        const double = correctDouble.map((val, i) =>
            Math.random() < defectChance ? (defectCount++, PartFactory.getRandomDoubleValue(i)) : val
        );
        return { double, defectCount };
    }

    static generateAnomaly(className, defectChance = this.defectChance) {
        const cls = PartFactory.anomalyClasses[className];
        if (!cls) {
            throw new Error(`Unknown anomaly class: ${className}`);
        }

        const correctRgb = cls.rgb();
        const correctTruefalse = cls.truefalse();
        const correctDouble = cls.double();

        const { rgb, defectCount: rgbDefects } = PartFactory._applyDefectToRgbWithCount(correctRgb, defectChance);
        const { truefalse, defectCount: tfDefects } = PartFactory._applyDefectToTruefalseWithCount(correctTruefalse, defectChance);
        const { double, defectCount: doubleDefects } = PartFactory._applyDefectToDoubleWithCount(correctDouble, defectChance);

        const totalDefects = rgbDefects + tfDefects + doubleDefects;

        const anomaly = {
            className,
            rgb,
            truefalse,
            double,
            dynamic1: 100,
            dynamic2: 100,
            dynamicDiff: 0,
            defectCount: totalDefects, 

            validateDynamics(dynamic1, dynamic2, dynamicDiff) {
                return cls.validateDynamics(dynamic1, dynamic2, dynamicDiff);
            }
        };

        return anomaly;
    }
}