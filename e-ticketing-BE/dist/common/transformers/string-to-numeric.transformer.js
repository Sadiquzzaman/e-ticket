"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringToNumericTransformer = void 0;
function isNullOrUndefined(obj) {
    return typeof obj === 'undefined' || obj === null;
}
class StringToNumericTransformer {
    to(data) {
        if (!isNullOrUndefined(data)) {
            return data;
        }
        return null;
    }
    from(data) {
        if (!isNullOrUndefined(data)) {
            const res = parseFloat(data);
            if (isNaN(res)) {
                return null;
            }
            else {
                return res;
            }
        }
        return null;
    }
}
exports.StringToNumericTransformer = StringToNumericTransformer;
//# sourceMappingURL=string-to-numeric.transformer.js.map