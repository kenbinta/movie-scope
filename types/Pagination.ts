export interface UsePaginationProps {
  itemsPerPage: number;
  totalResults: number;
}
export interface UsePaginationResult {
  jumpToPage: (page: number) => void;
  currentPage: number;
  maxPage: number;
}
