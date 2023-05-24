"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../common/entities/user.entity");
const bcrypt_service_1 = require("../common/services/bcrypt.service");
const conversion_service_1 = require("../common/services/conversion.service");
const exception_service_1 = require("../common/services/exception.service");
const request_service_1 = require("../common/services/request.service");
const response_service_1 = require("../common/services/response.service");
const user_controller_1 = require("./controllers/user.controller");
const user_service_1 = require("./services/user.service");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity])],
        controllers: [user_controller_1.UserController],
        providers: [
            conversion_service_1.ConversionService,
            bcrypt_service_1.BcryptService,
            response_service_1.ResponseService,
            exception_service_1.ExceptionService,
            request_service_1.RequestService,
            user_service_1.UserService,
        ],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map