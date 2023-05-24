import { FieldErrorDto } from './field-error.dto';
import { SystemErrorDto } from './system-error.dto';
export declare class ErrorDto {
    fields?: FieldErrorDto[];
    system?: SystemErrorDto;
    constructor(fields?: FieldErrorDto[], system?: SystemErrorDto);
}
