import { Transaction } from './transaction.interface'

export interface Store {
    set(key: string, value: any, cb?: Function): Promise<any>;
    add(value: any, cb?: Function): Promise<any>;
    add(key: string, value: any, cb?: Function): Promise<any>;
    get(key: string, cb?: Function): Promise<any>;
    getMultiple(keys: string[], cb?: Function): Promise<any>;
    remove(key: string, cb?: Function): Promise<any>;
    clear(cb?: Function): Promise<any>;
    keys(range?: string[], cb?: Function): Promise<any>;
    values(range?: string[], cb?: Function): Promise<any>;
    json(range?: string[], cb?: Function): Promise<any>;
    count(range?: string[], cb?: Function): Promise<any>;
    iterator(cb: Function): Promise<any>;
    iterator(range: string[], cb: Function): Promise<any>;
    transaction(mode?: string, cb?: Function): Transaction;
}