import { BadRequestException } from '@nestjs/common';
import { ValidationType } from './validation-type.enum';
export declare class UuidValidationException extends BadRequestException {
    field: string;
    value: string;
    version: '3' | '4' | '5';
    message: string;
    validationType: ValidationType;
    constructor(field: string, value: string, version: '3' | '4' | '5', message: string, validationType?: ValidationType);
}
