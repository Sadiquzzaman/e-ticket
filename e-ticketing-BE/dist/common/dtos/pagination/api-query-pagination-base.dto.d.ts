import { PaginationOrderEnum } from './../../enums/pagination.enum';
export declare abstract class ApiQueryPaginationBaseDTO {
    page: number;
    limit: number;
    sort: string;
    order: PaginationOrderEnum;
}
