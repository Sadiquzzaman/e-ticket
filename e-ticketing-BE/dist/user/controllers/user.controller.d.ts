import { UserResponseDto } from 'src/common/dtos/reponse/user-response.dto';
import { UserDto, UserSearchDto } from 'src/common/dtos/user/user.dto';
import { PaginationDTO } from '../../common/dtos/pagination/pagination.dto';
import { ResponseDto } from '../../common/dtos/reponse/response.dto';
import { RequestService } from '../../common/services/request.service';
import { ResponseService } from '../../common/services/response.service';
import { UserService } from '../services/user.service';
export declare class UserController {
    private userService;
    private readonly responseService;
    private readonly requestService;
    constructor(userService: UserService, responseService: ResponseService, requestService: RequestService);
    findAll(): Promise<ResponseDto>;
    pagination(pagination: PaginationDTO, userSearchDto: UserSearchDto): Promise<ResponseDto>;
    create(userDto: UserDto): Promise<ResponseDto>;
    me(authUser: UserResponseDto): Promise<ResponseDto>;
    profileUpdate(userDto: UserDto, authUser: UserResponseDto): Promise<ResponseDto>;
    update(id: string, userDto: UserDto): Promise<ResponseDto>;
    remove(id: string): Promise<ResponseDto>;
    findById(id: string): Promise<ResponseDto>;
}
