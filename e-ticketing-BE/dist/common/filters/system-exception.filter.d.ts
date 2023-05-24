import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class SystemExceptionFilter implements ExceptionFilter {
    private readonly logger;
    catch(exception: HttpException, host: ArgumentsHost): void;
}
