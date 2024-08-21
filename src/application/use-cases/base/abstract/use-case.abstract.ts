export abstract class UseCase<T, R> {
	abstract execute(params: T): Promise<R>;
}
