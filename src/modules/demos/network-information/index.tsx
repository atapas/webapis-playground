import React from 'react';

import { NotSupported, Tag } from 'components';

import run, { hasSupport } from '../../apis/network-information';

const UNKNOWN_STRING = 'Unknown';

function Network() {
  const [data] = React.useState<
    NetworkInformation & {
      effectiveType?: 'readonly';
      rtt?: 'readonly';
      downlink?: 'readonly';
      downlinksMax?: 'readonly';
      saveData?: 'readonly';
    }
  >(run());

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
                Network Type
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
                {data?.effectiveType || UNKNOWN_STRING}
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
                Round Trip Time(rtt)
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
                {data?.rtt || UNKNOWN_STRING}
              </span>
            </td>
          </tr>
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
                Bandwidth estimate(in MBPS)
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
                {data?.downlink || UNKNOWN_STRING}
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
                Max Bandwidth estimate(in MBPS)
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
                {data?.downlinksMax || UNKNOWN_STRING}
              </span>
            </td>
          </tr>
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
                Save data enabled
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
                {data?.saveData ? (
                  <Tag className="tw-bg-green-500 hover:tw-bg-green-600">
                    Yes
                  </Tag>
                ) : (
                  <Tag className="tw-bg-red-500 hover:tw-bg-red-600">No</Tag>
                )}
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
                Device Connection Type
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
                {data?.type || UNKNOWN_STRING}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Network;
