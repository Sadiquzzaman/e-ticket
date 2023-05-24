import { BaseDto } from '../dtos/core/base.dto';
import { CustomBaseEntity } from '../entities/custom-base.entity';
export declare class ConversionService {
    toDto<T extends CustomBaseEntity, U extends BaseDto>(entity: T): Promise<U>;
    toDtos<T extends CustomBaseEntity, U extends BaseDto>(entities: T[]): Promise<U[]>;
    toEntity<T extends CustomBaseEntity, U extends BaseDto>(dto: U): Promise<T>;
    toEntities<T extends CustomBaseEntity, U extends BaseDto>(dtos: U[]): Promise<T[]>;
    toPagination<T extends CustomBaseEntity, U extends BaseDto>(rawData: [T[], number]): Promise<[U[], number]>;
}
