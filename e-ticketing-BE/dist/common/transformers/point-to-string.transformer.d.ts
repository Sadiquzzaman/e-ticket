import { ValueTransformer } from 'typeorm';
export declare class PointToStringTransformer implements ValueTransformer {
    from: (v: any) => any;
    to: (v: any) => string;
}
