"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiQueryPaginationBaseDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const pagination_enum_1 = require("./../../enums/pagination.enum");
class ApiQueryPaginationBaseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'page number',
        minimum: 1,
        default: 1,
        required: false,
        type: Number,
    }),
    __metadata("design:type", Number)
], ApiQueryPaginationBaseDTO.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'data limit',
        minimum: 1,
        default: 10,
        required: false,
        type: Number,
    }),
    __metadata("design:type", Number)
], ApiQueryPaginationBaseDTO.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'sort field',
        default: 'createAt',
        required: false,
    }),
    __metadata("design:type", String)
], ApiQueryPaginationBaseDTO.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'order sort',
        required: false,
        default: 'DESC',
        enum: pagination_enum_1.PaginationOrderEnum,
    }),
    __metadata("design:type", Number)
], ApiQueryPaginationBaseDTO.prototype, "order", void 0);
exports.ApiQueryPaginationBaseDTO = ApiQueryPaginationBaseDTO;
//# sourceMappingURL=api-query-pagination-base.dto.js.map