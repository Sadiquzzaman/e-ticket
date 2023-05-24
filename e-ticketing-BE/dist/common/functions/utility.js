"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = exports.sfc32 = void 0;
const sfc32 = (a = new Date().getTime(), b = 581234, c = 564321, d = 147852) => {
    a >>>= 0;
    b >>>= 0;
    c >>>= 0;
    d >>>= 0;
    let t = (a + b) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    d = (d + 1) | 0;
    t = (t + d) | 0;
    c = (c + t) | 0;
    return (t >>> 0) / 4294967296;
};
exports.sfc32 = sfc32;
const shuffle = (arrayData, seed = new Date().getTime()) => {
    let currentIndex = arrayData.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor((0, exports.sfc32)(seed) * currentIndex);
        currentIndex--;
        [arrayData[currentIndex], arrayData[randomIndex]] = [
            arrayData[randomIndex],
            arrayData[currentIndex],
        ];
    }
    return arrayData;
};
exports.shuffle = shuffle;
//# sourceMappingURL=utility.js.map