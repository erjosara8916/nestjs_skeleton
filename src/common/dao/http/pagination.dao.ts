import { PaginationResponseInterface } from "src/common/interfaces/pagination-response.interface";
export class PaginationDao<T> implements PaginationResponseInterface<T> {
  data: T[];
  meta: {
    total_items: number;
    current_page: number;
    page_size: number;
    total_pages: number;
  };

  links?: {
    first: string;
    previous: string | null;
    next: string | null;
    last: string;
  };

  constructor(
    items: T[],
    page: number,
    limit: number,
    totalItems: number,
  ) {
    this.data = items;
    this.meta = {
      total_items: totalItems,
      current_page: page,
      page_size: limit,
      total_pages: Math.ceil(totalItems / limit),
    };

    this.links = {
        first: `/users?page=1&limit=${limit}`,
        previous: page > 1 ? `/users?page=${page - 1}&limit=${limit}` : null,
        next: page < this.meta.total_pages ? `/users?page=${page + 1}&limit=${limit}` : null,
        last: `/users?page=${this.meta.total_pages}&limit=${limit}`,
    }
  }
}