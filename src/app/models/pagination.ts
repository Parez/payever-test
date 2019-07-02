export interface Pagination<T> {
    total_pages: number;
    per_page: number;
    total: number;
    page: number;
    data: T[];
}
