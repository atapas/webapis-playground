//@ts-ignore
export const hasSupport = (): boolean => (Boolean(window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB))

function run() {
  //@ts-ignore
  const idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB
  const dbName = "todo-db"
  const tableName = "todoList"

  const insertDataInIndexedDb = () => {
    const request = idb.open(dbName, 1);

    request.onerror = function (event) {
      console.error("An error occurred with IndexedDB");
      console.error(event);
    };

    request.onupgradeneeded = function (event) {
      console.log(event);
      const db = request.result;

      if (!db.objectStoreNames.contains(tableName)) {
        db.createObjectStore(tableName, { keyPath: "id" });

      }
    };
    request.onsuccess = function () {
      console.log("Database opened successfully");
    };

  }

  const addTask = (data: { id: string; task: string }) => {
    const request = idb.open(dbName, 1);

    request.onsuccess = function () {
      console.log("Database opened successfully");

      const db = request.result;

      var tx = db.transaction(tableName, "readwrite");
      var taskData = tx.objectStore(tableName);
      taskData.add(data);
    };
  }
  const deleteDB = () => {
    var req = idb.deleteDatabase(dbName);
    req.onsuccess = function () {
      console.log("Deleted database successfully");
    };
  }

  return { idb, insertDataInIndexedDb, dbName, tableName, addTask, deleteDB }
}


export default run;
