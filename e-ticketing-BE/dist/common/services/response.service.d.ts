import { HttpStatus } from '@nestjs/common';
import { BaseDto } from '../dtos/core/base.dto';
import { ResponseDto } from '../dtos/reponse/response.dto';
export declare class ResponseService {
    toResponse<T>(status: HttpStatus, message: string, data: Promise<T>): Promise<ResponseDto>;
    toDtoResponse<T extends BaseDto>(status: HttpStatus, message: string, data: Promise<T>): Promise<ResponseDto>;
    toDtosResponse<T extends BaseDto>(status: HttpStatus, message: string, data: Promise<T[]>): Promise<ResponseDto>;
    toPaginationResponse<T extends BaseDto>(status: HttpStatus, message: string, page: number, limit: number, data: Promise<[T[], number]>): Promise<ResponseDto>;
    toErrorResponse(status: HttpStatus, message: string, error: any): Promise<ResponseDto>;
}
