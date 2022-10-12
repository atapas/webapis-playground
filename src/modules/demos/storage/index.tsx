import React from 'react';

import { NotSupported } from 'components';

import run, { hasSupport } from '../../apis/storage';

const UNKNOWN_STRING = 'Unknown';

function Network() {
  const [data] = React.useState(run());

  if (!hasSupport()) {
    return <NotSupported />;
  }

  return (
    <div
      className="
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
              Storage Type
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
          <tr>
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
                Local Storage
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
                {data?.localStorage
                  ? JSON.stringify(data?.localStorage)
                  : null || UNKNOWN_STRING}
              </span>
            </td>
          </tr>
          <tr className="tw-bg-gray-50">
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
                Session Storage
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
                {data?.sessionStorage
                  ? JSON.stringify(data?.sessionStorage)
                  : null || UNKNOWN_STRING}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Network;
