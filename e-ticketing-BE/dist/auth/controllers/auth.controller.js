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
exports.AuthController = void 0;
const user_dto_1 = require("./../../common/dtos/user/user.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const login_dto_1 = require("../../common/dtos/user/create/login.dto");
const auth_service_1 = require("../services/auth.service");
const dto_validation_pipe_1 = require("./../../common/pipes/dto-validation.pipe");
const response_service_1 = require("./../../common/services/response.service");
let AuthController = class AuthController {
    constructor(authService, responseService) {
        this.authService = authService;
        this.responseService = responseService;
    }
    create(usersDto) {
        const userDto = this.authService.create(usersDto);
        return this.responseService.toDtoResponse(common_1.HttpStatus.CREATED, 'Registration Successfully Completed', userDto);
    }
    async login(loginDto) {
        const payload = this.authService.login(loginDto);
        return await this.responseService.toDtoResponse(common_1.HttpStatus.OK, 'Login is successful', payload);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({ type: user_dto_1.UserDto }),
    (0, swagger_1.ApiCreatedResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Registration Successfully Completed',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)('registration'),
    __param(0, (0, common_1.Body)(new dto_validation_pipe_1.DtoValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Login is successful',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)(new dto_validation_pipe_1.DtoValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        response_service_1.ResponseService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map