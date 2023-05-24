"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SystemExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const error_dto_1 = require("../dtos/reponse/error.dto");
const response_dto_1 = require("../dtos/reponse/response.dto");
const system_error_dto_1 = require("../dtos/reponse/system-error.dto");
let SystemExceptionFilter = SystemExceptionFilter_1 = class SystemExceptionFilter {
    constructor() {
        this.logger = new common_1.Logger(SystemExceptionFilter_1.name);
    }
    catch(exception, host) {
        const now = Date.now();
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const processTime = exception['processTime'] || '0';
        const context = exception['context'] || '-/-';
        const { method, socket, url } = request;
        const { remoteAddress } = socket;
        const status = exception
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const message = exception.message || 'Internal error';
        this.logger.error({
            remoteIP: `${remoteAddress}`,
            method: `${method}`,
            processTime: `${processTime}`,
            statusCode: status,
            url: `${url}`,
            context: `${context}`,
            message: `${JSON.stringify(exception.getResponse())}`,
        });
        let responseDto = exception.getResponse();
        if (!responseDto) {
            const systemErrorDto = new system_error_dto_1.SystemErrorDto('url', `${url}`, `${message}`);
            const errorDto = new error_dto_1.ErrorDto(null, systemErrorDto);
            responseDto = new response_dto_1.ResponseDto(now, status, 'Error', errorDto, null);
        }
        response.status(status).json(responseDto);
    }
};
SystemExceptionFilter = SystemExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], SystemExceptionFilter);
exports.SystemExceptionFilter = SystemExceptionFilter;
//# sourceMappingURL=system-exception.filter.js.map