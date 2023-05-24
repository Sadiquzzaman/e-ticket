"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatValidationException = void 0;
const common_1 = require("@nestjs/common");
const validation_type_enum_1 = require("./validation-type.enum");
class FloatValidationException extends common_1.BadRequestException {
    constructor(field, value, message, validationType = validation_type_enum_1.ValidationType.FLOAT) {
        super();
        this.field = field;
        this.value = value;
        this.message = message;
        this.validationType = validationType;
    }
}
exports.FloatValidationException = FloatValidationException;
//# sourceMappingURL=float-validation.exception.js.map