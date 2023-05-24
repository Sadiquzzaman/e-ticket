export declare class PaginationDTO {
    readonly page: number;
    readonly limit: number;
    readonly order: string;
    readonly sort: string;
    constructor(pagination: {
        page: number;
        limit: number;
        order: string;
        sort: string;
    });
}
