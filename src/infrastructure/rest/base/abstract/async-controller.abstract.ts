export abstract class AsyncController<T> {
	abstract handler(...params: any[]): Promise<T>;
}
