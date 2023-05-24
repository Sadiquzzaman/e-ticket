import { ActiveStatus } from './../../enums/active.enum';
export declare abstract class BaseDto {
    id: string;
    version: number;
    isActive: ActiveStatus;
    createdBy: string | null;
    updatedBy: string | null;
    createAt: Date | null;
    updatedAt: Date | null;
}
