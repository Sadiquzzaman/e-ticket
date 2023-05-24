"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidValidationException = void 0;
const common_1 = require("@nestjs/common");
const validation_type_enum_1 = require("./validation-type.enum");
class UuidValidationException extends common_1.BadRequestException {
    constructor(field, value, version, message, validationType = validation_type_enum_1.ValidationType.UUID) {
        super();
        this.field = field;
        this.value = value;
        this.version = version;
        this.message = message;
        this.validationType = validationType;
    }
}
exports.UuidValidationException = UuidValidationException;
//# sourceMappingURL=uuid-validation.exception.js.map