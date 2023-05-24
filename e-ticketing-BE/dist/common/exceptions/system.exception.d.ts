import { HttpException } from '@nestjs/common';
export declare class SystemException extends HttpException {
    constructor(error: any);
}
