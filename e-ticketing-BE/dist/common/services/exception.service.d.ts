import { CustomBaseEntity } from '../entities/custom-base.entity';
export declare class ExceptionService {
    notFound<T extends CustomBaseEntity>(entity: T | T[], message: string): void;
}
