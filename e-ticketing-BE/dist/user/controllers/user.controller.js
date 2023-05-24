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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_response_dto_1 = require("../../common/dtos/reponse/user-response.dto");
const user_dto_1 = require("../../common/dtos/user/user.dto");
const role_name_enum_1 = require("../../common/enums/role-name.enum");
const auth_guard_decorator_1 = require("../../common/decorators/auth-guard.decorator");
const pagination_decorator_1 = require("../../common/decorators/pagination.decorator");
const pagination_dto_1 = require("../../common/dtos/pagination/pagination.dto");
const dto_validation_pipe_1 = require("../../common/pipes/dto-validation.pipe");
const uuid_validation_pipe_1 = require("../../common/pipes/uuid-validation.pipe");
const request_service_1 = require("../../common/services/request.service");
const response_service_1 = require("../../common/services/response.service");
const user_service_1 = require("../services/user.service");
let UserController = class UserController {
    constructor(userService, responseService, requestService) {
        this.userService = userService;
        this.responseService = responseService;
        this.requestService = requestService;
    }
    findAll() {
        const users = this.userService.findAll();
        return this.responseService.toDtosResponse(common_1.HttpStatus.OK, null, users);
    }
    pagination(pagination, userSearchDto) {
        const users = this.userService.pagination(pagination.page, pagination.limit, pagination.sort, pagination.order, userSearchDto);
        return this.responseService.toPaginationResponse(common_1.HttpStatus.OK, 'User list in pagination', pagination.page, pagination.limit, users);
    }
    create(userDto) {
        const modifiedDto = this.requestService.forCreate(userDto);
        const user = this.userService.create(modifiedDto);
        return this.responseService.toDtoResponse(common_1.HttpStatus.CREATED, 'A new user is created', user);
    }
    me(authUser) {
        const me = this.userService.findById(authUser.id);
        return this.responseService.toDtoResponse(common_1.HttpStatus.OK, null, me);
    }
    profileUpdate(userDto, authUser) {
        const modifiedDto = this.requestService.forUpdate(userDto);
        if (!!userDto.roleName)
            delete userDto.roleName;
        const user = this.userService.update(authUser.id, modifiedDto);
        return this.responseService.toDtoResponse(common_1.HttpStatus.OK, 'Own Profile has been updated', user);
    }
    update(id, userDto) {
        const modifiedDto = this.requestService.forUpdate(userDto);
        const user = this.userService.update(id, modifiedDto);
        return this.responseService.toDtoResponse(common_1.HttpStatus.OK, 'User has been updated', user);
    }
    remove(id) {
        const deleted = this.userService.remove(id);
        return this.responseService.toResponse(common_1.HttpStatus.OK, 'User successfully deleted!', deleted);
    }
    findById(id) {
        const user = this.userService.findById(id);
        return this.responseService.toDtoResponse(common_1.HttpStatus.OK, null, user);
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({
        status: common_1.HttpStatus.OK,
        description: '',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Users list in pagination',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, auth_guard_decorator_1.AuthWithRoles)([...role_name_enum_1.SUPERADMIN_ADMIN]),
    (0, common_1.Get)('pagination'),
    __param(0, (0, pagination_decorator_1.PaginationDecorator)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDTO,
        user_dto_1.UserSearchDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "pagination", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({
        description: 'A new user is created',
    }),
    (0, auth_guard_decorator_1.AuthWithRoles)([...role_name_enum_1.SUPERADMIN_ADMIN]),
    (0, swagger_1.ApiBody)({ type: user_dto_1.UserDto }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new dto_validation_pipe_1.DtoValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        description: 'User has been updated',
    }),
    (0, auth_guard_decorator_1.AuthWithRoles)([...role_name_enum_1.SUPERADMIN_ADMIN]),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('me'),
    __param(0, (0, auth_guard_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_response_dto_1.UserResponseDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "me", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        description: 'User has been updated',
    }),
    (0, swagger_1.ApiBody)({ type: user_dto_1.UserDto }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, auth_guard_decorator_1.AuthWithRoles)([...role_name_enum_1.SUPERADMIN_ADMIN]),
    (0, common_1.Put)('me'),
    __param(0, (0, common_1.Body)(new dto_validation_pipe_1.DtoValidationPipe({
        skipMissingProperties: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }))),
    __param(1, (0, auth_guard_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto,
        user_response_dto_1.UserResponseDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "profileUpdate", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        description: 'User has been updated',
    }),
    (0, swagger_1.ApiBody)({ type: user_dto_1.UserDto }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Put)(':id'),
    (0, auth_guard_decorator_1.AuthWithRoles)([...role_name_enum_1.SUPERADMIN_ADMIN]),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, common_1.Body)(new dto_validation_pipe_1.DtoValidationPipe({
        skipMissingProperties: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        status: common_1.HttpStatus.OK,
        description: 'User successfully deleted!',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, auth_guard_decorator_1.AuthWithRoles)([...role_name_enum_1.SUPERADMIN_ADMIN]),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({
        status: common_1.HttpStatus.OK,
        description: '',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, auth_guard_decorator_1.AuthWithRoles)([...role_name_enum_1.SUPERADMIN_ADMIN]),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findById", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        response_service_1.ResponseService,
        request_service_1.RequestService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map