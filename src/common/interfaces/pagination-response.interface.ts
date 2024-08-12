export interface PaginationResponseInterface<T> {
  data: T[],
  meta: {
    total_items: number,
    current_page: number,
    page_size: number,
    total_pages: number
  }
  links?: {
    first: string,
    previous: string,
    next: string,
    last: string
  }
}