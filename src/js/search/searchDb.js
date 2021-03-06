import Dexie from 'dexie';

const db = new Dexie('searchDb');
db.version(1).stores({
  metadata: 'fileId, address, available',
  subscription: 'address, blocked, daysLoaded',
});

export default db;
