"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntValidationException = void 0;
const common_1 = require("@nestjs/common");
const validation_type_enum_1 = require("./validation-type.enum");
class IntValidationException extends common_1.BadRequestException {
    constructor(field, value, message, validationType = validation_type_enum_1.ValidationType.INT) {
        super();
        this.field = field;
        this.value = value;
        this.message = message;
        this.validationType = validationType;
    }
}
exports.IntValidationException = IntValidationException;
//# sourceMappingURL=int-validation.exception.js.map