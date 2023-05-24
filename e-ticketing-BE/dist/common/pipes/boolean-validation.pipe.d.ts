import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class BooleanValidationPipe implements PipeTransform<string | boolean, Promise<boolean>> {
    constructor();
    transform(value: string | boolean, metadata: ArgumentMetadata): Promise<boolean>;
}
