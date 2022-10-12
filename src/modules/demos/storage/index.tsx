import run, { hasSupport } from '../../apis/storage';
import React, {useEffect, useState} from "react";
import {Input} from "@/components/Input";
import {Button} from "@/components/Button";

function Storage() {
  const [localStorageData, setLocalStorageData] = useState<Record<string, string>>({});
  const [sessionStorageData, setSessionStorageData] = useState<Record<string, string>>({});
  const initData = () => {
    setLocalStorageData(run.localStorageHandler.get());
    setSessionStorageData(run.sessionStorageHandler.get());
  }
  
  useEffect(() => {
    initData();
  }, []);
  
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <>
      <>
        <h2 className="tw-text-xl tw-font-bold tw-mb-3">
          Local Storage
          <small
            className="tw-underline tw-text-sm tw-ml-2 tw-cursor-pointer"
            onClick={() => run.localStorageHandler.clear(initData)}
          >
            Clear Local Storage
          </small>
        </h2>
        <div className="tw-mb-6">
          <div className="tw-grid tw-grid-cols-3 tw-gap-4">
            <div>
              <Input
                id="js-input-local-storage--key"
                type="text"
                name="key"
                placeholder="Key"
              />
            </div>
            <div>
              <Input
                id="js-input-local-storage--value"
                type="text"
                name="value"
                placeholder="Value"
              />
            </div>
            <Button onClick={() => run.localStorageHandler.set(initData)}>Save</Button>
          </div>
          <div
            className="
          tw-mt-4
          tw-shadow
          tw-overflow-hidden
          tw-border-b 
          tw-border-gray-200
          sm:tw-rounded-lg
        "
          >
            <table
              className="
            tw-w-full
            tw-min-w-full
            tw-divide-y
            tw-divide-gray-200
          "
            >
              <thead className="tw-bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="
                  tw-px-6
                  tw-py-3
                  tw-text-left
                  tw-text-xs
                  tw-font-medium
                  tw-text-gray-500
                  tw-uppercase
                  tw-tracking-wider
                "
                >
                  Key
                </th>
                <th
                  scope="col"
                  className="
                  tw-px-6
                  tw-py-3
                  tw-text-left
                  tw-text-xs
                  tw-font-medium
                  tw-text-gray-500
                  tw-uppercase
                  tw-tracking-wider
                "
                >
                  Value
                </th>
              </tr>
              </thead>
              <tbody
                className="
            tw-bg-white
              tw-divide-y
              tw-divide-gray-200
            "
              >
              {Object.keys(localStorageData).map((key: string, index: number) => {
                return (
                  <tr key={key + index}>
                    <td
                      className="
                  tw-px-6
                  tw-py-4
                  tw-whitespace-nowrap
                "
                    >
                      <div
                        className="
                    tw-text-sm
                    tw-text-gray-900
                  "
                      >
                        {key}
                      </div>
                    </td>
                    <td
                      className="
                  tw-px-6
                  tw-py-4
                  tw-whitespace-nowrap
                "
                    >
              <span
                className="
                    tw-text-sm
                    tw-text-gray-900
                  "
              >
                {localStorageData[key]}
              </span>
                    </td>
                  </tr>
                );
              })}
              </tbody>
            </table>
          </div>
        </div>
      </>
      
      <>
        <h2 className="tw-text-xl tw-font-bold tw-mb-3">
          Session Storage
          <small
            className="tw-underline tw-text-sm tw-ml-2 tw-cursor-pointer"
            onClick={() => run.sessionStorageHandler.clear(initData)}
          >
            Clear Session Storage
          </small>
        </h2>
        <div className="tw-mb-6">
          <div className="tw-grid tw-grid-cols-3 tw-gap-4">
            <div>
              <Input
                id="js-input-session-storage--key"
                type="text"
                name="key"
                placeholder="Key"
              />
            </div>
            <div>
              <Input
                id="js-input-session-storage--value"
                type="text"
                name="value"
                placeholder="Value"
              />
            </div>
            <Button onClick={() => run.sessionStorageHandler.set(initData)}>Save</Button>
          </div>
          <div
            className="
          tw-mt-4
          tw-shadow
          tw-overflow-hidden
          tw-border-b 
          tw-border-gray-200
          sm:tw-rounded-lg
        "
          >
            <table
              className="
            tw-w-full
            tw-min-w-full
            tw-divide-y
            tw-divide-gray-200
          "
            >
              <thead className="tw-bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="
                  tw-px-6
                  tw-py-3
                  tw-text-left
                  tw-text-xs
                  tw-font-medium
                  tw-text-gray-500
                  tw-uppercase
                  tw-tracking-wider
                "
                >
                  Key
                </th>
                <th
                  scope="col"
                  className="
                  tw-px-6
                  tw-py-3
                  tw-text-left
                  tw-text-xs
                  tw-font-medium
                  tw-text-gray-500
                  tw-uppercase
                  tw-tracking-wider
                "
                >
                  Value
                </th>
              </tr>
              </thead>
              <tbody
                className="
            tw-bg-white
              tw-divide-y
              tw-divide-gray-200
            "
              >
              {Object.keys(sessionStorageData).map((key: string, index: number) => {
                return (
                  <tr key={key + index}>
                    <td
                      className="
                  tw-px-6
                  tw-py-4
                  tw-whitespace-nowrap
                "
                    >
                      <div
                        className="
                    tw-text-sm
                    tw-text-gray-900
                  "
                      >
                        {key}
                      </div>
                    </td>
                    <td
                      className="
                  tw-px-6
                  tw-py-4
                  tw-whitespace-nowrap
                "
                    >
              <span
                className="
                    tw-text-sm
                    tw-text-gray-900
                  "
              >
                {sessionStorageData[key]}
              </span>
                    </td>
                  </tr>
                );
              })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </>
  );
}

export default Storage;
