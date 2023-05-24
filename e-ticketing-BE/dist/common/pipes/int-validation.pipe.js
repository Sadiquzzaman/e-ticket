"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const int_validation_exception_1 = require("../exceptions/validations/int-validation.exception");
let IntValidationPipe = class IntValidationPipe {
    constructor() { }
    async transform(value, metadata) {
        const isNumeric = ['string', 'number'].includes(typeof value) &&
            !isNaN(parseFloat(value)) &&
            isFinite(value);
        if (!isNumeric) {
            throw new int_validation_exception_1.IntValidationException(metadata.data, value, 'Int Validation Error');
        }
        return parseInt(value, 10);
    }
};
IntValidationPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], IntValidationPipe);
exports.IntValidationPipe = IntValidationPipe;
//# sourceMappingURL=int-validation.pipe.js.map