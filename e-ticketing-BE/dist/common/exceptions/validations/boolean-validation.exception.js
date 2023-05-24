"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanValidationException = void 0;
const common_1 = require("@nestjs/common");
const validation_type_enum_1 = require("./validation-type.enum");
class BooleanValidationException extends common_1.BadRequestException {
    constructor(field, value, message, validationType = validation_type_enum_1.ValidationType.BOOLEAN) {
        super();
        this.field = field;
        this.value = value;
        this.message = message;
        this.validationType = validationType;
    }
}
exports.BooleanValidationException = BooleanValidationException;
//# sourceMappingURL=boolean-validation.exception.js.map