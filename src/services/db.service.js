import idbKvStore from 'idb-kv-store';

export default {
  dbName: '',
  store: null,
  setDbName(dbName) {
    this.dbName = dbName;
  },
  create() {
    this.store = new idbKvStore(this.dbName);
  },
  get(key) {
    this.create();
    return this.store.get(key);
  },
  add(value) {
    this.create();
    const transaction = this.store.transaction('readwrite');
    return transaction.add(value);
  },
  json() {
    this.create();
    return this.store.json();
  },
  set(key, value) {
    this.create();
    this.store.set(key, value);
  },
  clear() {
    this.create();
    this.store.clear();
  },
  remove(key) {
    this.create();
    this.store.remove(key);
  }
};
