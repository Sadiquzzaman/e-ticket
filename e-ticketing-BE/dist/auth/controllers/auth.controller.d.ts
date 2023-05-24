import { ResponseDto } from './../../common/dtos/reponse/response.dto';
import { UserDto } from './../../common/dtos/user/user.dto';
import { LoginDto } from '../../common/dtos/user/create/login.dto';
import { AuthService } from '../services/auth.service';
import { ResponseService } from './../../common/services/response.service';
export declare class AuthController {
    private readonly authService;
    private readonly responseService;
    constructor(authService: AuthService, responseService: ResponseService);
    create(usersDto: UserDto): Promise<ResponseDto>;
    login(loginDto: LoginDto): Promise<ResponseDto>;
}
