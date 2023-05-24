"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationDTO = void 0;
class PaginationDTO {
    constructor(pagination) {
        this.page = pagination.page;
        this.limit = pagination.page;
        this.order = pagination.order;
        this.sort = `${pagination.sort}`;
    }
}
exports.PaginationDTO = PaginationDTO;
//# sourceMappingURL=pagination.dto.js.map