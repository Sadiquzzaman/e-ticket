import { ArgumentMetadata, PipeTransform, ValidationPipeOptions } from '@nestjs/common';
export declare class DtoValidationPipe implements PipeTransform<any> {
    options: ValidationPipeOptions;
    constructor(options?: ValidationPipeOptions);
    private static toValidate;
    transform(value: any, { metatype }: ArgumentMetadata): Promise<any>;
}
