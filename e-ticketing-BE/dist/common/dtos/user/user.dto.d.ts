import { RoleNameEnum } from './../../enums/role-name.enum';
import { BaseDto } from '../core/base.dto';
import { ApiQueryPaginationBaseDTO } from '../pagination/api-query-pagination-base.dto';
export declare class UserDto extends BaseDto {
    name: string;
    email: string;
    phone: string;
    password: string;
    roleName: RoleNameEnum;
}
export declare class UserSearchDto extends ApiQueryPaginationBaseDTO {
    name: string;
    email: string;
    phone: string;
    address: string;
    roleName: RoleNameEnum;
}
