"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoValidationException = void 0;
const common_1 = require("@nestjs/common");
const validation_type_enum_1 = require("./validation-type.enum");
class DtoValidationException extends common_1.BadRequestException {
    constructor(errors, message, validationType = validation_type_enum_1.ValidationType.DTO) {
        super();
        this.errors = errors;
        this.message = message;
        this.validationType = validationType;
    }
}
exports.DtoValidationException = DtoValidationException;
//# sourceMappingURL=dto-validation.exception.js.map