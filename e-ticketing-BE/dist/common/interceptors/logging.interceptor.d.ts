import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class LoggingInterceptor implements NestInterceptor {
    private cliColor;
    constructor();
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
