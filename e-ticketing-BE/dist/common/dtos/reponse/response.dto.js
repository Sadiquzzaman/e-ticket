"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseDto = void 0;
class ResponseDto {
    constructor(nonce, status, message, error, payload, page) {
        this.nonce = nonce;
        this.status = status;
        this.message = message;
        this.error = error;
        this.payload = payload;
        this.page = page;
    }
}
exports.ResponseDto = ResponseDto;
//# sourceMappingURL=response.dto.js.map