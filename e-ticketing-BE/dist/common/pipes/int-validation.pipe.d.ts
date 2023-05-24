import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class IntValidationPipe implements PipeTransform<string> {
    constructor();
    transform(value: string, metadata: ArgumentMetadata): Promise<number>;
}
