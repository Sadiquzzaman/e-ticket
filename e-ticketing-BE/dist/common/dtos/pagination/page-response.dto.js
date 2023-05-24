"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageResponseDto = void 0;
const page_dto_1 = require("./page.dto");
class PageResponseDto extends page_dto_1.PageDto {
    constructor(page = 0, limit = 10, count = 0, data = []) {
        super(page, limit);
        this.page = page;
        this.limit = limit;
        this.count = count;
        this.data = data;
    }
}
exports.PageResponseDto = PageResponseDto;
//# sourceMappingURL=page-response.dto.js.map