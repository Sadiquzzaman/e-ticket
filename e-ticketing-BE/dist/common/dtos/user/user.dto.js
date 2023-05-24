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
exports.UserSearchDto = exports.UserDto = void 0;
const role_name_enum_1 = require("./../../enums/role-name.enum");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const base_dto_1 = require("../core/base.dto");
const api_query_pagination_base_dto_1 = require("../pagination/api-query-pagination-base.dto");
class UserDto extends base_dto_1.BaseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Shovon' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Must be non empty' }),
    (0, class_validator_1.IsString)({ message: 'Must be a string' }),
    (0, class_validator_1.MaxLength)(65, { message: 'Maximum 65 characters supported' }),
    __metadata("design:type", String)
], UserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'bh123@gmail.com' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Must be non empty' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(100, { message: 'Maximum 100 characters supported' }),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '01734911481' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Must be a string' }),
    (0, class_validator_1.MaxLength)(20, { message: 'Maximum 20 character supported' }),
    __metadata("design:type", String)
], UserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '12345678' }),
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Must be non empty' }),
    (0, class_validator_1.IsString)({ message: 'Must be a string' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Maximum 100 characters supported' }),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: role_name_enum_1.RoleNameEnum.EDITOR_ROLE }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Must be a string!' }),
    (0, class_validator_1.IsEnum)(role_name_enum_1.RoleNameEnum),
    __metadata("design:type", String)
], UserDto.prototype, "roleName", void 0);
exports.UserDto = UserDto;
class UserSearchDto extends api_query_pagination_base_dto_1.ApiQueryPaginationBaseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        default: 'Shovon',
        required: false,
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserSearchDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: 'bh123@gmail.com',
        required: false,
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserSearchDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: String,
        default: '01734911480',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Must be a string' }),
    __metadata("design:type", String)
], UserSearchDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: 'Team Lead',
        required: false,
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserSearchDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: role_name_enum_1.RoleNameEnum.EDITOR_ROLE,
        enum: role_name_enum_1.RoleNameEnum,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: `Must be one of those ${Object.entries(role_name_enum_1.RoleNameEnum).join('/')}`,
    }),
    (0, class_validator_1.IsEnum)(role_name_enum_1.RoleNameEnum),
    __metadata("design:type", String)
], UserSearchDto.prototype, "roleName", void 0);
exports.UserSearchDto = UserSearchDto;
//# sourceMappingURL=user.dto.js.map