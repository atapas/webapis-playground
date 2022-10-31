import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { useEffect, useState } from 'react';
import run, { hasSupport } from '../../apis/indexeddb-api';


function IndexeddbApi() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }
  const { idb, insertDataInIndexedDb, dbName, tableName, addTask, deleteDB } = run()

  const [tasks, setTasks] = useState<{ id: string; task: string }[] | null>([])

  const getAllData = () => {
    const arr: { id: string; task: string }[] = []
    const dbPromise = idb.open(dbName, 1);
    dbPromise.onsuccess = () => {
      const db = dbPromise.result;

      if (db.transaction) {
        var tx = db.transaction([tableName], "readonly");
        var taskData = tx.objectStore(tableName);

        const tasks: IDBRequest<{ id: string; task: string }[]>
          = taskData.getAll();

        tasks.onsuccess = () => {
          console.log(tasks.result, tasks.result.length)
          setTasks(tasks.result)
        };

        tx.oncomplete = function () {
          db.close();
        };
      }
    };
    return arr
  };

  useEffect(() => { insertDataInIndexedDb(); getAllData() }, [])

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //@ts-ignore
    const task = { id: String(Math.floor(Math.random() * 100)), task: String(e.target[0].value) }
    addTask(task)
    setTasks((prevState) => prevState && [...prevState, task])

  }
  const clearDB = () => {
    console.log('delete...')
    setTasks(null)
    deleteDB()
  }

  return (
    <div>
      <h5 className='tw-mb-2'>Todo List (using IndexedDB API)</h5>
      <form action="" onSubmit={handleOnSubmit}>
        <label htmlFor="taskInput">Enter Task:</label>
        <div className='tw-flex tw-items-center tw-gap-1'>
          <div style={{ flexGrow: 1 }}>
            <input type="text" className='tw-w-full
            tw-border-gray-200
            tw-rounded-md
            tw-placeholder-gray-400
            tw-transition
            tw-duration-200
            tw-ease-in
            tw-pl-4 tw-pr-4'
              id="taskInput"
              placeholder="Enter your task" />
          </div>

          <input type="submit" value="Add" className='tw-inline-flex
          tw-items-center
          tw-justify-center
          tw-px-4
          tw-h-10
          tw-text-base
          tw-font-semibold 
          tw-text-white
          tw-whitespace-nowrap
          tw-rounded-md 
          tw-bg-blue-500
          tw-transition
          tw-duration-100
          tw-ease-in
          tw-appearance-none
          tw-select-none
          tw-align-middle
          focus:tw-ring-4
          focus:tw-ring-blue-300
          focus:tw-outline-none
          active:tw-bg-blue-800
          hover:tw-bg-blue-600'/>
          <Button onClick={clearDB}>Clear DB</Button>
        </div>
      </form>
      <h5 className='tw-mt-4'>List of Task:</h5>
      <ul className='tw-mt-2'>
        {tasks && tasks?.length === 0 && <div>You have no current tasks</div>}
        {tasks && tasks.map((item, index) => (
          <li key={index}>{item.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndexeddbApi;
