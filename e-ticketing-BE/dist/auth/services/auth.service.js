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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const crypto = require("crypto");
const Redis = require("ioredis");
const custom_user_role_dto_1 = require("../../common/dtos/user/custom-user-role.dto");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../common/entities/user.entity");
const configure_enum_1 = require("../../common/enums/configure.enum");
const user_response_dto_1 = require("./../../common/dtos/reponse/user-response.dto");
const active_enum_1 = require("./../../common/enums/active.enum");
const system_exception_1 = require("./../../common/exceptions/system.exception");
const bcrypt_service_1 = require("./../../common/services/bcrypt.service");
const conversion_service_1 = require("./../../common/services/conversion.service");
const request_service_1 = require("./../../common/services/request.service");
let AuthService = class AuthService {
    constructor(configService, bcryptService, requestService, conversionService, userRepository) {
        this.configService = configService;
        this.bcryptService = bcryptService;
        this.requestService = requestService;
        this.conversionService = conversionService;
        this.userRepository = userRepository;
        this.salts = [
            'e01d5ff573c96f085f496daecb25b91350a676ff555186a41024a9fa0dd05678ea9398f794e0db11e5ab219fdc426ad0afbf5663832d82c71c18f6341ba646bc',
        ];
        this.secrets = [
            '7b8dfee2268d116238b7977a87df037dbc360534884967c7b95cb43663e31c8fcfcae1d663f41a43a30f479dd7af24964e196a7ee6a0e00da5bb36e4a5ee3e5b',
        ];
        this.redis = {};
        this.create = async (usersDto) => {
            try {
                const user = await this.createUser(usersDto);
                return this.conversionService.toDto(user);
            }
            catch (error) {
                throw new system_exception_1.SystemException(error);
            }
        };
        this.login = async (loginDto) => {
            try {
                const user = await this.validateUser(loginDto);
                const accessToken = await this.generateToken(user);
                user.password = undefined;
                const userRoles = new custom_user_role_dto_1.CustomUserRoleDto();
                userRoles.role = user.roleName;
                const userRes = new user_response_dto_1.UserResponseDto();
                userRes.accessToken = accessToken;
                userRes.email = user.email;
                userRes.roles = userRoles;
                userRes.userName = user.name;
                userRes.id = user.id;
                if (!!loginDto.isChecked) {
                    this.redis[configure_enum_1.ConfigureEnum.REDIS_SESSION].set(accessToken, JSON.stringify(userRes));
                }
                else {
                    this.redis[configure_enum_1.ConfigureEnum.REDIS_SESSION].set(accessToken, JSON.stringify(userRes), 'ex', parseInt(`${this.configService.get(configure_enum_1.ConfigureEnum.TOKEN_EXPIRE_TIME)}`));
                }
                return userRes;
            }
            catch (error) {
                console.log(error);
                throw new system_exception_1.SystemException(error);
            }
            return undefined;
        };
        this.createUser = async (usersDto) => {
            const isEmailDupicate = await this.userRepository.findOne({
                email: usersDto.email,
            });
            if (isEmailDupicate) {
                throw new Error('Email address already is in use');
            }
            usersDto.password = await this.bcryptService.hashPassword(usersDto.password);
            let userDto = usersDto;
            userDto = this.requestService.forCreate(userDto);
            const dtoToEntity = await this.conversionService.toEntity(userDto);
            const user = this.userRepository.create(dtoToEntity);
            user.isActive = active_enum_1.ActiveStatus.ACTIVE;
            user.roleName = usersDto.roleName;
            await this.userRepository.save(user);
            console.log('ttttttttttttttttttttttttttttttttt', user);
            return user;
        };
        this.validateUser = async (loginDto) => {
            const userQuery = await this.userRepository
                .createQueryBuilder('user')
                .where(new typeorm_2.Brackets((subQ) => {
                subQ.where('user.email = :email', { email: loginDto.email });
            }))
                .andWhere('user.isActive = :isActive', { isActive: active_enum_1.ActiveStatus.ACTIVE });
            const user = await userQuery.getOne();
            console.log(user, loginDto);
            if (!user) {
                throw new Error('Login credentials not accepted');
            }
            if (!(await this.bcryptService.comparePassword(loginDto.password, user.password))) {
                throw new common_1.UnauthorizedException('Login credentials not accepted');
            }
            return this.conversionService.toDto(user);
        };
        this.generateToken = async (user) => {
            try {
                console.log(user);
                const rSecretIndex = Math.floor(Math.random() * Math.floor(this.secrets.length));
                const rSaltIndex = Math.floor(Math.random() * Math.floor(this.salts.length));
                const hmac = crypto.createHmac('sha512', this.secrets[rSecretIndex]);
                const token = hmac
                    .update(this.salts[rSaltIndex] +
                    crypto.randomBytes(19).toString('hex') +
                    JSON.stringify(user) +
                    Date.now())
                    .digest('hex');
                return token;
            }
            catch (error) {
                console.log(error);
                console.log(error);
                return 'asd';
            }
        };
        this.salts = `${configService.get(configure_enum_1.ConfigureEnum.CRYPTO_SOLT)}`.split(',');
        this.secrets = `${configService.get(configure_enum_1.ConfigureEnum.CRYPTO_SCERET)}`.split(',');
        this.redis[configure_enum_1.ConfigureEnum.REDIS_SESSION] = new Redis(configService.get(configure_enum_1.ConfigureEnum.REDIS_SESSION));
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(4, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        bcrypt_service_1.BcryptService,
        request_service_1.RequestService,
        conversion_service_1.ConversionService,
        typeorm_2.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map