export interface PaginatedResponseMetadataInterface {
  total_items: number,
  current_page: number,
  page_size: number,
  total_pages: number
}

export interface PaginatedResponseLinksInterface {
  first: string,
  previous: string,
  next: string,
  last: string
}

export interface PaginatedResponseInterface<T> {
  data: T[],
  meta?: PaginatedResponseMetadataInterface
  links?: PaginatedResponseLinksInterface
}