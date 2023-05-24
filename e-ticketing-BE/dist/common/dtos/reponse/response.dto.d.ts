import { HttpStatus } from '@nestjs/common';
import { PageResponseDto } from '../pagination/page-response.dto';
import { ErrorDto } from './error.dto';
import { PayloadDto } from './payload.dto';
export declare class ResponseDto {
    nonce: number;
    status: HttpStatus;
    message: string;
    error?: ErrorDto;
    payload?: PayloadDto;
    page?: PageResponseDto;
    constructor(nonce: number, status: HttpStatus, message: string, error?: ErrorDto, payload?: PayloadDto, page?: PageResponseDto);
}
