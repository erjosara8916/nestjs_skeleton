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
    base_path_links: string
  ) {
    this.data = items;
    this.meta = {
      total_items: totalItems,
      current_page: Number(page),
      page_size: Number(page),
      total_pages: Math.ceil(totalItems / limit),
    };

    this.setLinks(base_path_links, page, limit)
  }

  setLinks(base_path, page, limit) {
    this.links = {
      first: `${base_path}?page=1&limit=${limit}`,
      previous: page > 1 ? `${base_path}?page=${page - 1}&limit=${limit}` : null,
      next: page < this.meta.total_pages ? `${base_path}?page=${page + 1}&limit=${limit}` : null,
      last: `${base_path}?page=${this.meta.total_pages}&limit=${limit}`,
    }
  }
}