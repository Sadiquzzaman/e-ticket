"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SALESMAN = exports.SUPERADMIN = exports.ADMIN = exports.EDITOR = exports.ADMIN_EDITOR = exports.SUPERADMIN_ADMIN = exports.SUPERADMIN_ADMIN_EDITOR = exports.RoleNameEnum = void 0;
var RoleNameEnum;
(function (RoleNameEnum) {
    RoleNameEnum["SUPER_ADMIN_ROLE"] = "SUPER_ADMIN_ROLE";
    RoleNameEnum["ADMIN_ROLE"] = "ADMIN_ROLE";
    RoleNameEnum["EDITOR_ROLE"] = "EDITOR_ROLE";
    RoleNameEnum["SALES_ROLE"] = "SALES_ROLE";
})(RoleNameEnum = exports.RoleNameEnum || (exports.RoleNameEnum = {}));
exports.SUPERADMIN_ADMIN_EDITOR = [
    RoleNameEnum.SUPER_ADMIN_ROLE,
    RoleNameEnum.ADMIN_ROLE,
    RoleNameEnum.EDITOR_ROLE,
];
exports.SUPERADMIN_ADMIN = [
    RoleNameEnum.SUPER_ADMIN_ROLE,
    RoleNameEnum.ADMIN_ROLE,
];
exports.ADMIN_EDITOR = [
    RoleNameEnum.EDITOR_ROLE,
    RoleNameEnum.ADMIN_ROLE,
];
exports.EDITOR = [RoleNameEnum.EDITOR_ROLE];
exports.ADMIN = [RoleNameEnum.ADMIN_ROLE];
exports.SUPERADMIN = [RoleNameEnum.SUPER_ADMIN_ROLE];
exports.SALESMAN = [RoleNameEnum.SALES_ROLE];
//# sourceMappingURL=role-name.enum.js.map