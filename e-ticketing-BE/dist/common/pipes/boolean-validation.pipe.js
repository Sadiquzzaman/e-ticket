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
exports.BooleanValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const boolean_validation_exception_1 = require("../exceptions/validations/boolean-validation.exception");
let BooleanValidationPipe = class BooleanValidationPipe {
    constructor() { }
    async transform(value, metadata) {
        if (value === true || value === 'true') {
            return true;
        }
        if (value === false || value === 'false') {
            return false;
        }
        throw new boolean_validation_exception_1.BooleanValidationException(metadata.data, value, 'Boolean Validation Error');
    }
};
BooleanValidationPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], BooleanValidationPipe);
exports.BooleanValidationPipe = BooleanValidationPipe;
//# sourceMappingURL=boolean-validation.pipe.js.map