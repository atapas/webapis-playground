import {StorageType} from "@/modules/demos/storage";

export const hasSupport = (): boolean => {
  return 'localStorage' in window && 'sessionStorage' in window;
}

type StorageCallback = (session: StorageType, isSuccessful: boolean) => void;

const localStorageHandler =  {
  set(callback: StorageCallback): void {
    const localStorageKeyElement = document.getElementById('js-input-local-storage--key') as HTMLInputElement;
    const localStorageValueElement = document.getElementById('js-input-local-storage--value') as HTMLInputElement;
    try {
      localStorage.setItem(localStorageKeyElement.value, localStorageValueElement.value);
      localStorageKeyElement.value = "";
      localStorageValueElement.value = "";
      callback(StorageType.LOCAL, true);
    } catch (e) {
      callback(StorageType.LOCAL, false);
      console.error(`Unable to set localStorage ${e}`);
    }
  },
  get(): Record<string, string> {
    return ({...localStorage});
  },
  clear(callback: () => void): void {
    try {
      localStorage.clear();
      callback();
    } catch (e) {
      console.error(`Unable to clear localStorage ${e}`);
    }
  },
}

const sessionStorageHandler =  {
  set(callback: StorageCallback): void {
    const sessionStorageKeyElement = document.getElementById('js-input-session-storage--key') as HTMLInputElement;
    const sessionStorageValueElement = document.getElementById('js-input-session-storage--value') as HTMLInputElement;
    try {
      sessionStorage.setItem(sessionStorageKeyElement.value, sessionStorageValueElement.value);
      sessionStorageKeyElement.value = "";
      sessionStorageValueElement.value = "";
      callback(StorageType.SESSION, true);
    } catch (e) {
      callback(StorageType.SESSION, false);
      console.error(`Unable to set sessionStorage ${e}`);
    }
  },
  get(): Record<string, string> {
    return ({...sessionStorage});
  },
  clear(callback: () => void): void {
    try {
      sessionStorage.clear();
      callback();
    } catch (e) {
      console.error(`Unable to clear sessionStorage ${e}`);
    }
  },
}

const run = {
  sessionStorageHandler,
  localStorageHandler,
};

export default run;
