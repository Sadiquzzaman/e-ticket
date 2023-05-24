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
exports.UserEntity = void 0;
const role_name_enum_1 = require("./../enums/role-name.enum");
const typeorm_1 = require("typeorm");
const custom_base_entity_1 = require("./custom-base.entity");
const class_transformer_1 = require("class-transformer");
let UserEntity = class UserEntity extends custom_base_entity_1.CustomBaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'name', length: 65 }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'email', length: 100, nullable: true }),
    (0, typeorm_1.Index)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'phone', length: 20, nullable: true }),
    (0, typeorm_1.Index)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'password',
        length: 100,
        nullable: true,
    }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: role_name_enum_1.RoleNameEnum,
        name: 'roleName',
        default: `${role_name_enum_1.RoleNameEnum.EDITOR_ROLE}`,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "roleName", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'UserEntity' })
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map