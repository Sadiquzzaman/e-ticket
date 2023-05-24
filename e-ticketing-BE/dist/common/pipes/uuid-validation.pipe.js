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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const uuid_validation_exception_1 = require("../exceptions/validations/uuid-validation.exception");
const class_validator_1 = require("class-validator");
let UuidValidationPipe = class UuidValidationPipe {
    constructor(options) {
        options = options || {};
        const { version } = options;
        this.version = version;
    }
    async transform(value, metadata) {
        if (!(0, class_validator_1.isUUID)(value, this.version)) {
            throw new uuid_validation_exception_1.UuidValidationException(metadata.data, value, this.version, 'UUID Validation Error');
        }
        return value;
    }
};
UuidValidationPipe = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Optional)()),
    __metadata("design:paramtypes", [Object])
], UuidValidationPipe);
exports.UuidValidationPipe = UuidValidationPipe;
//# sourceMappingURL=uuid-validation.pipe.js.map