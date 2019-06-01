export interface Transaction {
    done: Promise<any>,
    abort(): Promise<any>,
    add(value: any): Promise<any>,
}