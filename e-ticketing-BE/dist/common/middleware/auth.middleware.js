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
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const configure_enum_1 = require("../enums/configure.enum");
const Redis = require("ioredis");
let AuthMiddleware = class AuthMiddleware {
    constructor(configService) {
        this.configService = configService;
        this.redis = {};
        this.redis[configure_enum_1.ConfigureEnum.REDIS_SESSION] = new Redis(configService.get(configure_enum_1.ConfigureEnum.REDIS_SESSION));
    }
    async use(req, res, next) {
        var _a;
        try {
            const token = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split('Bearer ')[1];
            if (token) {
                const _user = await this.redis[configure_enum_1.ConfigureEnum.REDIS_SESSION].get(token);
                if (_user)
                    req['_user'] = JSON.parse(_user);
            }
            next();
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Authorization is denied');
        }
    }
};
AuthMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map