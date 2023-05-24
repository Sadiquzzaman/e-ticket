"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const dto_validation_exception_1 = require("../exceptions/validations/dto-validation.exception");
const validation_type_enum_1 = require("../exceptions/validations/validation-type.enum");
const boolean_validation_exception_1 = require("../exceptions/validations/boolean-validation.exception");
const uuid_validation_exception_1 = require("../exceptions/validations/uuid-validation.exception");
const int_validation_exception_1 = require("../exceptions/validations/int-validation.exception");
const float_validation_exception_1 = require("../exceptions/validations/float-validation.exception");
const response_dto_1 = require("../dtos/reponse/response.dto");
const error_dto_1 = require("../dtos/reponse/error.dto");
const field_error_dto_1 = require("../dtos/reponse/field-error.dto");
let FieldExceptionFilter = class FieldExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let error = null;
        switch (exception.validationType) {
            case validation_type_enum_1.ValidationType.DTO:
                error = this.dtoValidationError(exception);
                break;
            case validation_type_enum_1.ValidationType.UUID:
                error = this.uuidValidationError(exception);
                break;
            case validation_type_enum_1.ValidationType.BOOLEAN:
                error = this.booleanValidationError(exception);
                break;
            case validation_type_enum_1.ValidationType.INT:
                error = this.intValidationError(exception);
                break;
            case validation_type_enum_1.ValidationType.FLOAT:
                error = this.floatValidationError(exception);
                break;
        }
        const responseDto = new response_dto_1.ResponseDto(new Date().getTime(), common_1.HttpStatus.BAD_REQUEST, exception.message, new error_dto_1.ErrorDto(error, null));
        return response.json(responseDto);
    }
    dtoValidationError(exception) {
        const validationErrors = [];
        if (exception.errors.length > 0) {
            for (const error of exception.errors) {
                const property = error.property;
                const errorCollection = [];
                if (!error.constraints || Object.keys(error.constraints).length === 0) {
                    this.findChildError(errorCollection, error.children, property);
                }
                else {
                    errorCollection.push({
                        field: error.property,
                        message: error.constraints[Object.keys(error.constraints)[0]],
                    });
                }
                validationErrors.push(...errorCollection);
            }
            return validationErrors;
        }
    }
    uuidValidationError(exception) {
        return [
            new field_error_dto_1.FieldErrorDto(exception.field, exception.value, `UUID ${exception.version ? 'v' + exception.version : ''} is expected`, []),
        ];
    }
    booleanValidationError(exception) {
        return [
            new field_error_dto_1.FieldErrorDto(exception.field, exception.value, `Boolean string is expected`, []),
        ];
    }
    intValidationError(exception) {
        return [
            new field_error_dto_1.FieldErrorDto(exception.field, exception.value, `Numeric string is expected`, []),
        ];
    }
    floatValidationError(exception) {
        return [
            new field_error_dto_1.FieldErrorDto(exception.field, exception.value, `Numeric string is expected`, []),
        ];
    }
    findChildError(errorCollection, errors, property) {
        for (const error of errors) {
            if (!error.constraints || Object.keys(error.constraints).length === 0) {
                const nProperty = '.' + error.property;
                const sProperty = '[' + error.property + ']';
                const newProperty = isNaN(error.property) ? nProperty : sProperty;
                this.findChildError(errorCollection, error.children, property + newProperty);
            }
            else {
                errorCollection.push({
                    field: property + '.' + error.property,
                    message: error.constraints[Object.keys(error.constraints)[0]],
                });
            }
        }
    }
};
FieldExceptionFilter = __decorate([
    (0, common_1.Catch)(dto_validation_exception_1.DtoValidationException, boolean_validation_exception_1.BooleanValidationException, uuid_validation_exception_1.UuidValidationException, int_validation_exception_1.IntValidationException, float_validation_exception_1.FloatValidationException)
], FieldExceptionFilter);
exports.FieldExceptionFilter = FieldExceptionFilter;
//# sourceMappingURL=field-exception.filter.js.map