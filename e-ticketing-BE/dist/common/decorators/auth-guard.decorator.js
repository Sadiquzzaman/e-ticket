"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthWithRoles = exports.ROLES_KEY = exports.AuthUser = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_guard_1 = require("../guards/roles-guard");
exports.AuthUser = (0, common_1.createParamDecorator)((data, ctx) => {
    var _a;
    const request = ctx.switchToHttp().getRequest();
    return (_a = request['_user']) !== null && _a !== void 0 ? _a : undefined;
});
exports.ROLES_KEY = 'roles';
function AuthWithRoles(roles) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(exports.ROLES_KEY, roles), (0, common_1.UseGuards)(roles_guard_1.RolesGuard), (0, swagger_1.ApiBearerAuth)());
}
exports.AuthWithRoles = AuthWithRoles;
//# sourceMappingURL=auth-guard.decorator.js.map