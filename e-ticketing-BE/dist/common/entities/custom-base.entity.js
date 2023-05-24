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
exports.CustomBaseEntity = void 0;
const typeorm_1 = require("typeorm");
const active_enum_1 = require("../enums/active.enum");
class CustomBaseEntity extends typeorm_1.BaseEntity {
}
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CustomBaseEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.VersionColumn)(),
    __metadata("design:type", Number)
], CustomBaseEntity.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        name: 'isActive',
        enum: active_enum_1.ActiveStatus,
        default: `${active_enum_1.ActiveStatus.ACTIVE}`,
    }),
    __metadata("design:type", String)
], CustomBaseEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', name: 'createdBy', nullable: true }),
    __metadata("design:type", String)
], CustomBaseEntity.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', name: 'updatedBy', nullable: true }),
    __metadata("design:type", String)
], CustomBaseEntity.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'createAt',
        nullable: true,
    }),
    __metadata("design:type", Date)
], CustomBaseEntity.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updatedAt',
        nullable: true,
    }),
    __metadata("design:type", Date)
], CustomBaseEntity.prototype, "updatedAt", void 0);
exports.CustomBaseEntity = CustomBaseEntity;
//# sourceMappingURL=custom-base.entity.js.map