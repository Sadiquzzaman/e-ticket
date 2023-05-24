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
var DtoValidationPipe_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const dto_validation_exception_1 = require("../exceptions/validations/dto-validation.exception");
let DtoValidationPipe = DtoValidationPipe_1 = class DtoValidationPipe {
    constructor(options) {
        this.options = options || {};
    }
    static toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
    async transform(value, { metatype }) {
        if (!metatype || !DtoValidationPipe_1.toValidate(metatype)) {
            return value;
        }
        console.log(metatype);
        const object = (0, class_transformer_1.plainToClass)(metatype, value);
        const errors = await (0, class_validator_1.validate)(object, this.options);
        console.log({ errors, object });
        if (errors.length > 0) {
            throw new dto_validation_exception_1.DtoValidationException(errors, 'DTO Validation Error');
        }
        return value;
    }
};
DtoValidationPipe = DtoValidationPipe_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Optional)()),
    __metadata("design:paramtypes", [Object])
], DtoValidationPipe);
exports.DtoValidationPipe = DtoValidationPipe;
//# sourceMappingURL=dto-validation.pipe.js.map