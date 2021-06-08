export interface RequestUsersParams {
    currentPage: number,
    pageSize: number,
    term: string,
    friend: boolean | null,
}

export interface Filter {
    term: string;
    friend: null | boolean;
}