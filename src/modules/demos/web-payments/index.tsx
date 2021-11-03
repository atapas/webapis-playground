import React from 'react';

import { RiShoppingCart2Fill } from 'react-icons/ri';

import { Button, NotSupported } from 'components';

import run, { hasSupport } from '../../apis/web-payments';

function WebPayments() {
  if (!hasSupport()) {
    return <NotSupported />;
  }

  return (
    <React.Fragment>
      <span
        className="
          tw-block
          tw-text-base
          tw-italic
          tw-mb-8
        "
      >
        Feel free to try out this information for purchase(Dont worry, it is all
        FAKE!!! 🙊)
      </span>
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
                  Credit Card Number
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
                  5115883692618333
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
                  Name on the Card
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
                  Jhon Doe
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
                  Card Expiry
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
                  3020
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
                  CVV
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
                  007
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <span id="js-payment--message"></span>
      <div className="tw-flex tw-mt-4 tw-justify-end">
        <Button leftIcon={<RiShoppingCart2Fill />} onClick={run}>
          Click here to buy
        </Button>
      </div>
    </React.Fragment>
  );
}

export default WebPayments;
