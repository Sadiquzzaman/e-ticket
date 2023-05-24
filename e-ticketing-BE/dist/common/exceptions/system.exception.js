"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemException = void 0;
const common_1 = require("@nestjs/common");
const error_dto_1 = require("../dtos/reponse/error.dto");
const field_error_dto_1 = require("../dtos/reponse/field-error.dto");
const response_dto_1 = require("../dtos/reponse/response.dto");
const system_error_dto_1 = require("../dtos/reponse/system-error.dto");
class SystemException extends common_1.HttpException {
    constructor(error) {
        const fieldErrors = [];
        console.log({ error });
        if (error.errors) {
            Object.keys(error.errors).forEach((key) => {
                fieldErrors.push(new field_error_dto_1.FieldErrorDto(`${key}`, error.errors[key].value, error.errors[key].message));
            });
        }
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        if (error.status) {
            status = error.status;
        }
        let message = error.message ? error.message : 'Error';
        if (error.isGuard) {
            status = common_1.HttpStatus.UNAUTHORIZED;
            message = 'You are not authorized to access!';
        }
        let errorDto;
        if (fieldErrors.length > 0) {
            status = common_1.HttpStatus.BAD_REQUEST;
            errorDto = new error_dto_1.ErrorDto(fieldErrors, null);
        }
        else {
            const systemErrorDto = new system_error_dto_1.SystemErrorDto('System', 'Error', message);
            errorDto = new error_dto_1.ErrorDto(null, systemErrorDto);
        }
        const now = new Date().getTime();
        const responseDto = new response_dto_1.ResponseDto(now, status, message, errorDto, null);
        super(responseDto, status);
    }
}
exports.SystemException = SystemException;
//# sourceMappingURL=system.exception.js.map