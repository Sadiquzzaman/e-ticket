import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { LoginDto } from '../../common/dtos/user/create/login.dto';
import { UserEntity } from '../../common/entities/user.entity';
import { UserResponseDto } from './../../common/dtos/reponse/user-response.dto';
import { UserDto } from './../../common/dtos/user/user.dto';
import { BcryptService } from './../../common/services/bcrypt.service';
import { ConversionService } from './../../common/services/conversion.service';
import { RequestService } from './../../common/services/request.service';
export declare class AuthService {
    private readonly configService;
    private readonly bcryptService;
    private readonly requestService;
    private readonly conversionService;
    private readonly userRepository;
    private salts;
    private secrets;
    private redis;
    constructor(configService: ConfigService, bcryptService: BcryptService, requestService: RequestService, conversionService: ConversionService, userRepository: Repository<UserEntity>);
    create: (usersDto: UserDto) => Promise<any>;
    login: (loginDto: LoginDto) => Promise<UserResponseDto>;
    private createUser;
    private validateUser;
    private generateToken;
}
