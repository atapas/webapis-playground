export const hasSupport = (): boolean => {
  return 'localStorage' in window && 'sessionStorage' in window;
}

const localStorageHandler =  {
  set(callback: () => void): void {
    const localStorageKeyElement = document.getElementById('js-input-local-storage--key') as HTMLInputElement;
    const localStorageValueElement = document.getElementById('js-input-local-storage--value') as HTMLInputElement;
    try {
      localStorage.setItem(localStorageKeyElement.value, localStorageValueElement.value);
      alert('Key/Value pair saved successfully to Local Storage');
      localStorageKeyElement.value = "";
      localStorageValueElement.value = "";
      callback();
    } catch (e) {
      alert('Error saving Key/Value pair');
    }
  },
  get(): Record<string, string> {
    return ({...localStorage});
  },
  clear(callback: () => void): void {
    try {
      localStorage.clear();
      alert('Local Storage successfully cleared');
      callback();
    } catch (e) {
      alert('Error clearing Local Storage');
    }
  },
}

const sessionStorageHandler =  {
  set(callback: () => void): void {
    const sessionStorageKeyElement = document.getElementById('js-input-session-storage--key') as HTMLInputElement;
    const sessionStorageValueElement = document.getElementById('js-input-session-storage--value') as HTMLInputElement;
    try {
      sessionStorage.setItem(sessionStorageKeyElement.value, sessionStorageValueElement.value);
      alert('Key/Value pair saved successfully to Session Storage');
      sessionStorageKeyElement.value = "";
      sessionStorageValueElement.value = "";
      callback();
    } catch (e) {
      alert('Error saving Key/Value pair');
    }
  },
  get(): Record<string, string> {
    return ({...sessionStorage});
  },
  clear(callback: () => void): void {
    try {
      sessionStorage.clear();
      alert('Session Storage successfully cleared');
      callback();
    } catch (e) {
      alert('Error clearing Session Storage');
    }
  },
}

const run = {
  sessionStorageHandler,
  localStorageHandler,
};

export default run;
