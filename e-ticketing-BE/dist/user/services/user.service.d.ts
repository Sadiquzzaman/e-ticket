import { UserDto, UserSearchDto } from 'src/common/dtos/user/user.dto';
import { UserEntity } from 'src/common/entities/user.entity';
import { BcryptService } from 'src/common/services/bcrypt.service';
import { Repository } from 'typeorm';
import { DeleteDto } from '../../common/dtos/reponse/delete.dto';
import { ConversionService } from '../../common/services/conversion.service';
import { ExceptionService } from '../../common/services/exception.service';
export declare class UserService {
    private readonly userRepository;
    private readonly bcryptService;
    private readonly conversionService;
    private readonly exceptionService;
    constructor(userRepository: Repository<UserEntity>, bcryptService: BcryptService, conversionService: ConversionService, exceptionService: ExceptionService);
    findAll(): Promise<UserDto[]>;
    pagination(page: number, limit: number, sort: 'DESC' | 'ASC', order: string, userSearchDto: UserSearchDto): Promise<[UserDto[], number]>;
    create(dto: UserDto): Promise<UserDto>;
    update(id: string, dto: UserDto): Promise<UserDto>;
    remove(id: string): Promise<DeleteDto>;
    findById(id: string): Promise<UserDto>;
    getUserById(id: string): Promise<UserEntity>;
}
