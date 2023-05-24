import { BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { ValidationType } from './validation-type.enum';
export declare class DtoValidationException extends BadRequestException {
    errors: ValidationError[];
    message: string;
    validationType: ValidationType;
    constructor(errors: ValidationError[], message: string, validationType?: ValidationType);
}
