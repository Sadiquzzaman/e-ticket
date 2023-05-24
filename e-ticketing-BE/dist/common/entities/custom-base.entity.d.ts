import { BaseEntity } from 'typeorm';
import { ActiveStatus } from '../enums/active.enum';
export declare class CustomBaseEntity extends BaseEntity {
    id: string;
    version: number;
    isActive: ActiveStatus;
    createdBy: string | null;
    updatedBy: string | null;
    createAt: Date | null;
    updatedAt: Date | null;
}
