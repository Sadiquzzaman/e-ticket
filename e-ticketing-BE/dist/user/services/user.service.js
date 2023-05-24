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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../common/entities/user.entity");
const active_enum_1 = require("../../common/enums/active.enum");
const bcrypt_service_1 = require("../../common/services/bcrypt.service");
const typeorm_2 = require("typeorm");
const delete_dto_1 = require("../../common/dtos/reponse/delete.dto");
const system_exception_1 = require("../../common/exceptions/system.exception");
const conversion_service_1 = require("../../common/services/conversion.service");
const exception_service_1 = require("../../common/services/exception.service");
let UserService = class UserService {
    constructor(userRepository, bcryptService, conversionService, exceptionService) {
        this.userRepository = userRepository;
        this.bcryptService = bcryptService;
        this.conversionService = conversionService;
        this.exceptionService = exceptionService;
    }
    async findAll() {
        try {
            const allUsers = await this.userRepository.find({
                where: { isActive: active_enum_1.ActiveStatus.ACTIVE },
            });
            return this.conversionService.toDtos(allUsers);
        }
        catch (error) {
            throw new system_exception_1.SystemException(error);
        }
    }
    async pagination(page, limit, sort, order, userSearchDto) {
        try {
            const query = await this.userRepository.createQueryBuilder('users');
            query.where({ isActive: active_enum_1.ActiveStatus.ACTIVE });
            if (userSearchDto.name && userSearchDto.name.length > 0) {
                query.andWhere('lower(users.name) like :name', {
                    name: `%${userSearchDto.name.toLowerCase()}%`,
                });
            }
            if (userSearchDto.email && userSearchDto.email.length > 0) {
                query.andWhere('lower(users.email) like :email', {
                    email: `%${userSearchDto.email.toLowerCase()}%`,
                });
            }
            if (userSearchDto.roleName && userSearchDto.roleName.length > 0) {
                query.andWhere('lower(users.roleName) like :roleName', {
                    roleName: `%${userSearchDto.roleName.toLowerCase()}%`,
                });
            }
            sort = sort !== undefined ? (sort === 'ASC' ? 'ASC' : 'DESC') : 'DESC';
            const orderFields = [
                'name',
                'email',
                'phone',
                'roleName',
                'createAt',
                'updatedAt',
            ];
            order =
                orderFields.findIndex((o) => o === order) > -1 ? order : 'updatedAt';
            query
                .orderBy(`users.${order}`, sort)
                .skip((page - 1) * limit)
                .take(limit);
            const [allUsers, count] = await query.getManyAndCount();
            const users = await this.conversionService.toDtos(allUsers);
            return [users, count];
        }
        catch (error) {
            throw new system_exception_1.SystemException(error);
        }
    }
    async create(dto) {
        try {
            const dtoToEntity = await this.conversionService.toEntity(dto);
            const user = this.userRepository.create(dtoToEntity);
            await this.userRepository.save(user);
            return this.conversionService.toDto(user);
        }
        catch (error) {
            console.log(error);
            throw new system_exception_1.SystemException(error);
        }
    }
    async update(id, dto) {
        try {
            const saveDto = await this.getUserById(id);
            if (!!dto.password) {
                dto.password = await this.bcryptService.hashPassword(dto.password);
            }
            const dtoToEntity = await this.conversionService.toEntity(Object.assign(Object.assign({}, saveDto), dto));
            const updatedUser = await this.userRepository.save(dtoToEntity, {
                reload: true,
            });
            return this.conversionService.toDto(updatedUser);
        }
        catch (error) {
            throw new system_exception_1.SystemException(error);
        }
    }
    async remove(id) {
        try {
            const saveDto = await this.getUserById(id);
            const deleted = await this.userRepository.save(Object.assign(Object.assign({}, saveDto), { isActive: active_enum_1.ActiveStatus.INACTIVE }));
            return Promise.resolve(new delete_dto_1.DeleteDto(!!deleted));
        }
        catch (error) {
            throw new system_exception_1.SystemException(error);
        }
    }
    async findById(id) {
        try {
            const user = await this.getUserById(id);
            return this.conversionService.toDto(user);
        }
        catch (error) {
            throw new system_exception_1.SystemException(error);
        }
    }
    async getUserById(id) {
        const user = await this.userRepository.findOne({
            where: {
                id,
                isActive: active_enum_1.ActiveStatus.ACTIVE,
            },
        });
        this.exceptionService.notFound(user, 'User Not Found!!');
        return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        bcrypt_service_1.BcryptService,
        conversion_service_1.ConversionService,
        exception_service_1.ExceptionService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map