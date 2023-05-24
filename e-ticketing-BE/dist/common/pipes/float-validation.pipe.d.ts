import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class FloatValidationPipe implements PipeTransform<string> {
    constructor();
    transform(value: string, metadata: ArgumentMetadata): Promise<number>;
}
