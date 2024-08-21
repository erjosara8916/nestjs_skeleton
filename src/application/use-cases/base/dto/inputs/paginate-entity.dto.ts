export abstract class PaginateEntityDTO<T> {
	filter?: T;
	page?: number;
	limit?: number;
	order?: string;
}
