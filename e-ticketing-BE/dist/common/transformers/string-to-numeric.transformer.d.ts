import { ValueTransformer } from 'typeorm';
export declare class StringToNumericTransformer implements ValueTransformer {
    to(data?: number | null): number | null;
    from(data?: string | null): number | null;
}
