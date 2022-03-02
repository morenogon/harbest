import { createContext } from 'react';

export const PaginationContext = createContext({
    currentPage: 0 as number,
    updateCurrentPage: (type: string) => { },
});