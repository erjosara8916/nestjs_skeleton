import { 
  PaginatedResponseInterface, 
  PaginatedResponseMetadataInterface,
  PaginatedResponseLinksInterface
} from "src/common/interfaces/http/paginated-response.interface";
import { ApiProperty } from "@nestjs/swagger";

export class PaginatedResponse<T> implements PaginatedResponseInterface<T> {
  @ApiProperty()
  data: T[];

  @ApiProperty()
  meta: PaginatedResponseMetadataInterface;

  @ApiProperty()
  links?: PaginatedResponseLinksInterface

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