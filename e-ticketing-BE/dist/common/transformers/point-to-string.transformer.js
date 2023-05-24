"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointToStringTransformer = void 0;
class PointToStringTransformer {
    constructor() {
        this.from = (v) => v;
        this.to = (v) => `${v.x},${v.y}`;
    }
}
exports.PointToStringTransformer = PointToStringTransformer;
//# sourceMappingURL=point-to-string.transformer.js.map