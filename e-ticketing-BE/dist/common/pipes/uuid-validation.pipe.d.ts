import { ArgumentMetadata, ParseUUIDPipeOptions, PipeTransform } from '@nestjs/common';
export declare class UuidValidationPipe implements PipeTransform<string> {
    private readonly version;
    constructor(options?: ParseUUIDPipeOptions);
    transform(value: string, metadata: ArgumentMetadata): Promise<string>;
}
