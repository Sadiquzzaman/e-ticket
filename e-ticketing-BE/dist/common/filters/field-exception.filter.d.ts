import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { FieldErrorDto } from '../dtos/reponse/field-error.dto';
export declare class FieldExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): any;
    dtoValidationError(exception: any): FieldErrorDto[];
    uuidValidationError(exception: any): FieldErrorDto[];
    booleanValidationError(exception: any): FieldErrorDto[];
    intValidationError(exception: any): FieldErrorDto[];
    floatValidationError(exception: any): FieldErrorDto[];
    private findChildError;
}
