import { BadRequestException } from '@nestjs/common';
import { ValidationType } from './validation-type.enum';
export declare class IntValidationException extends BadRequestException {
    field: string;
    value: string;
    message: string;
    validationType: ValidationType;
    constructor(field: string, value: string, message: string, validationType?: ValidationType);
}
