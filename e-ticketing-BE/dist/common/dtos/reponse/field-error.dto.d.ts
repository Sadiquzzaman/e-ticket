export declare class FieldErrorDto {
    field: string;
    value: string;
    message: string | string[];
    children?: FieldErrorDto[];
    constructor(field: string, value: string, message: string | string[], children?: FieldErrorDto[]);
}
