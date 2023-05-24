import { PageDto } from './page.dto';
export declare class PageResponseDto extends PageDto {
    page: number;
    limit: number;
    count: number;
    data: Object;
    constructor(page?: number, limit?: number, count?: number, data?: Object);
}
