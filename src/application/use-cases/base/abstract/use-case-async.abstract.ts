export abstract class UseCaseAsync<T, R> {
	abstract execute(params: T): Promise<R>;
}
