import React from 'react';

import { Button, Tag, NotSupported } from 'components';

import run, { hasSupport } from '../../apis/battery-status';

function Battery() {
  if (!hasSupport()) {
    return <NotSupported />;
  }

  return (
    <div
      className="
        tw-flex
        tw-flex-col
        tw-items-center md:tw-items-start
      "
    >
      <Button onClick={run}>Get Battery Status</Button>

      <div
        className="
          tw-shadow
          tw-overflow-hidden
          tw-border-b 
          tw-border-gray-200
          sm:tw-rounded-lg
          tw-mt-4
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
                Property
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
                  Charging
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
                  id="js-battery--charging"
                  className="
                    tw-text-sm
                    tw-text-gray-900
                  "
                >
                  Unknow
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
                  Level
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
                  <Tag id="js-battery--level">Unknow</Tag>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Battery;
