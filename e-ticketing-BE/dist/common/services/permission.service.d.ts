import { Request } from 'express';
import { UserResponseDto } from '../dtos/reponse/user-response.dto';
export declare class PermissionService {
    private readonly request;
    constructor(request: Request);
    returnRequest: () => UserResponseDto;
}
