//@ts-nocheck
export const hasSupport = (): boolean => Boolean('PaymentRequest' in window);

function updateDetails(details, shippingOption, resolve, reject) {
  let selectedShippingOption;
  let otherShippingOption;
  if (shippingOption === 'standard') {
    selectedShippingOption = details.shippingOptions[0];
    otherShippingOption = details.shippingOptions[1];
    details.total.amount.value = '55.00';
  } else if (shippingOption === 'express') {
    selectedShippingOption = details.shippingOptions[1];
    otherShippingOption = details.shippingOptions[0];
    details.total.amount.value = '67.00';
  } else {
    reject("Unknown shipping option '" + shippingOption + "'");
    return;
  }

  selectedShippingOption.selected = true;
  otherShippingOption.selected = false;
  details.displayItems.splice(2, 1, selectedShippingOption);

  resolve(details);
}

function initPaymentRequest() {
  let networks = [
    'amex',
    'diners',
    'discover',
    'jcb',
    'mastercard',
    'unionpay',
    'visa',
    'mir',
  ];
  let types = ['debit', 'credit', 'prepaid'];
  let supportedInstruments = [
    {
      supportedMethods: 'basic-card',
      data: { supportedNetworks: networks, supportedTypes: types },
    },
  ];

  let details = {
    total: {
      label: 'Donation',
      amount: { currency: 'USD', value: '55.00' },
    },
    displayItems: [
      {
        label: 'Original donation amount',
        amount: { currency: 'USD', value: '65.00' },
      },
      {
        label: 'Friends and family discount',
        amount: { currency: 'USD', value: '-10.00' },
      },
    ],

    shippingOptions: [
      {
        id: 'standard',
        label: 'Standard shipping',
        amount: { currency: 'USD', value: '0.00' },
        selected: true,
      },
      {
        id: 'express',
        label: 'Express shipping',
        amount: { currency: 'USD', value: '12.00' },
      },
    ],
  };

  let options = {
    requestPayerName: true,
    requestPayerPhone: true,
    requestPayerEmail: true,
    requestShipping: true,
  };

  let request = new PaymentRequest(supportedInstruments, details, options);

  request.addEventListener('shippingaddresschange', function (evt) {
    evt.updateWith(Promise.resolve(details));
  });

  request.addEventListener('shippingoptionchange', function (evt) {
    evt.updateWith(
      new Promise(function (resolve, reject) {
        updateDetails(details, request.shippingOption, resolve, reject);
      })
    );
  });

  return request;
}

const sendPaymentToServer = instrumentResponse => {
  // There's no server-side component of these samples. No transactions are
  // processed and no money exchanged hands. Instantaneous transactions are not
  // realistic. Add a 2 second delay to make it seem more real.
  setTimeout(function () {
    instrumentResponse
      .complete('success')
      .then(function () {
        console.log('Done');
        (
          document.getElementById('js-payment--message') as HTMLElement
        ).innerHTML =
          '<span class="success-msg"> The payment is successful. We are shipping your order. </span>';
      })
      .catch(function (err) {
        console.error(err);
      });
  }, 2000);
};

function run() {
  console.log('initiate purchase');
  (document.getElementById('js-payment--message') as HTMLElement).innerHTML =
    '<span/>';
  let request = initPaymentRequest();
  request
    .show()
    .then(function (instrumentResponse) {
      console.log({ instrumentResponse });
      sendPaymentToServer(instrumentResponse);
    })
    .catch(function (err) {
      console.error(err);
    });
}

export default run;
