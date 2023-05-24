"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseService = void 0;
const common_1 = require("@nestjs/common");
const page_response_dto_1 = require("../dtos/pagination/page-response.dto");
const error_dto_1 = require("../dtos/reponse/error.dto");
const field_error_dto_1 = require("../dtos/reponse/field-error.dto");
const payload_dto_1 = require("../dtos/reponse/payload.dto");
const response_dto_1 = require("../dtos/reponse/response.dto");
const system_error_dto_1 = require("../dtos/reponse/system-error.dto");
let ResponseService = class ResponseService {
    async toResponse(status, message, data) {
        const apiData = await data;
        const available = apiData ? 1 : 0;
        const payload = new payload_dto_1.PayloadDto(available, apiData);
        return new response_dto_1.ResponseDto(new Date().getTime(), status, message, null, payload);
    }
    async toDtoResponse(status, message, data) {
        const apiData = await data;
        const available = apiData ? 1 : 0;
        const payload = new payload_dto_1.PayloadDto(available, apiData);
        return new response_dto_1.ResponseDto(new Date().getTime(), status, message, null, payload);
    }
    async toDtosResponse(status, message, data) {
        const apiData = await data;
        const count = apiData instanceof Array ? apiData.length : 0;
        const payload = new payload_dto_1.PayloadDto(count, apiData);
        return new response_dto_1.ResponseDto(new Date().getTime(), status, message, null, payload);
    }
    async toPaginationResponse(status, message, page, limit, data) {
        const [apiData, total] = await data;
        const pageResponseDto = new page_response_dto_1.PageResponseDto(page, limit, total, apiData);
        return new response_dto_1.ResponseDto(new Date().getTime(), status, message, null, null, pageResponseDto);
    }
    async toErrorResponse(status, message, error) {
        const fieldErrors = [];
        if (error.errors) {
            Object.keys(error.errors).forEach((key) => {
                fieldErrors.push(new field_error_dto_1.FieldErrorDto(`${key}`, error.errors[key].value, error.errors[key].message));
            });
        }
        message = error.message ? error.message : message;
        let errorDto;
        if (fieldErrors.length > 0) {
            errorDto = new error_dto_1.ErrorDto(fieldErrors, null);
        }
        else {
            const systemErrorDto = new system_error_dto_1.SystemErrorDto('System', 'Error', message);
            errorDto = new error_dto_1.ErrorDto(null, systemErrorDto);
        }
        const now = new Date().getTime();
        return new response_dto_1.ResponseDto(now, status, message, errorDto, null);
    }
};
ResponseService = __decorate([
    (0, common_1.Injectable)()
], ResponseService);
exports.ResponseService = ResponseService;
//# sourceMappingURL=response.service.js.map