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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
let RequestService = class RequestService {
    constructor(request) {
        this.request = request;
    }
    forCreate(dto) {
        var _a;
        if (dto) {
            dto.createAt = new Date();
            dto.createdBy = ((_a = this.request['_user']) === null || _a === void 0 ? void 0 : _a.id) || null;
            dto.updatedAt = new Date();
            dto.updatedBy = dto.createdBy;
            return dto;
        }
        else {
            throw new common_1.NotFoundException('No data specified!');
        }
    }
    forCreateEntity(entity) {
        var _a;
        if (entity) {
            entity.createAt = new Date();
            entity.createdBy = ((_a = this.request['_user']) === null || _a === void 0 ? void 0 : _a.id) || null;
            entity.updatedAt = new Date();
            entity.updatedBy = entity.createdBy;
            return entity;
        }
        else {
            throw new common_1.NotFoundException('No data specified!');
        }
    }
    forUpdate(dto) {
        var _a;
        if (dto) {
            dto.updatedAt = new Date();
            dto.updatedBy = ((_a = this.request['_user']) === null || _a === void 0 ? void 0 : _a.id) || null;
            return dto;
        }
        else {
            throw new common_1.NotFoundException('No data specified!');
        }
    }
    forUpdateEntity(entity) {
        var _a;
        if (entity) {
            entity.updatedAt = new Date();
            entity.updatedBy = ((_a = this.request['_user']) === null || _a === void 0 ? void 0 : _a.id) || null;
            return entity;
        }
        else {
            throw new common_1.NotFoundException('No data specified!');
        }
    }
    userSession() {
        try {
            const user = this.request['_user'] || null;
            if (user) {
                return user;
            }
            else {
                throw new common_1.UnauthorizedException('You are not Loggin');
            }
        }
        catch (error) {
            throw new common_1.UnauthorizedException('You are not Loggin');
        }
    }
};
RequestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Object])
], RequestService);
exports.RequestService = RequestService;
//# sourceMappingURL=request.service.js.map