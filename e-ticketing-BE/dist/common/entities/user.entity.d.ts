import { RoleNameEnum } from './../enums/role-name.enum';
import { CustomBaseEntity } from './custom-base.entity';
export declare class UserEntity extends CustomBaseEntity {
    name: string;
    email: string;
    phone: string;
    password: string;
    roleName: RoleNameEnum;
}
