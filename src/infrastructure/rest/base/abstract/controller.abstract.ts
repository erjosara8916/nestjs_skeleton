export abstract class Controller<T> {
	abstract handler(...params: any): T;
}
