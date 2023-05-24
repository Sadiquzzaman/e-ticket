import { RoleNameEnum } from '../enums/role-name.enum';
export declare const AuthUser: (...dataOrPipes: unknown[]) => ParameterDecorator;
export declare const ROLES_KEY = "roles";
export declare function AuthWithRoles(roles: RoleNameEnum[]): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
