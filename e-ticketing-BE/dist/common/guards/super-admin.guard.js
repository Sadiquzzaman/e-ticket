"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperAdminGuard = void 0;
const common_1 = require("@nestjs/common");
const role_name_enum_1 = require("../enums/role-name.enum");
const system_exception_1 = require("../exceptions/system.exception");
let SuperAdminGuard = class SuperAdminGuard {
    async canActivate(context) {
        const error = { isGuard: true };
        const ctx = context.switchToHttp();
        const req = ctx.getRequest();
        const user = req['_user'];
        if (!user) {
            throw new system_exception_1.SystemException(error);
        }
        if (user.roles.role === role_name_enum_1.RoleNameEnum.SUPER_ADMIN_ROLE) {
            return true;
        }
        throw new system_exception_1.SystemException(error);
    }
};
SuperAdminGuard = __decorate([
    (0, common_1.Injectable)()
], SuperAdminGuard);
exports.SuperAdminGuard = SuperAdminGuard;
//# sourceMappingURL=super-admin.guard.js.map