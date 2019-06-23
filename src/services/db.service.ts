import idbKvStore from 'idb-kv-store';
import { Slide } from '@/interfaces/slide.interface';
import { Store } from '../interfaces/store.interface';
import { Transaction } from '../interfaces/transaction.interface';

export class DBService {
  private store: Store = null;

  constructor(dbName: string) {
    this.store = new idbKvStore(dbName);
  };
    
  get(key: string): Promise<Slide> {
    return this.store.get(key);
  };
  
  add(value: Slide): Promise<any> {
    const transaction: Transaction = this.store.transaction('readwrite');
    return transaction.add(value);
  };
  
  json(): Promise<object> {
    return this.store.json();
  };
  
  set(key: string, value: Slide): void {
    this.store.set(key, value);
  };
  
  clear(): void {
    this.store.clear();
  };

  remove(key: string): Promise<any> {
    return this.store.remove(key);
  };
};
