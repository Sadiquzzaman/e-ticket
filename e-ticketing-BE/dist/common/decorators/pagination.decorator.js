"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationDecorator = void 0;
const common_1 = require("@nestjs/common");
exports.PaginationDecorator = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const { page = 1, limit = 10, order = 'updatedAt', sort = 'desc', } = request.query;
    let pageNo = parseInt('' + page) || 1;
    if (pageNo < 1)
        pageNo = 1;
    let limitData = parseInt('' + limit) || 10;
    if (limitData > 50)
        limitData = 50;
    if (request.query['limit'])
        delete request.query['limit'];
    if (request.query['page'])
        delete request.query['page'];
    if (request.query['order'])
        delete request.query['order'];
    if (request.query['sort'])
        delete request.query['sort'];
    return {
        page: pageNo,
        limit: limitData,
        order: order,
        sort: sort,
    };
});
//# sourceMappingURL=pagination.decorator.js.map