if (!window.PaymentRequest) {
  window.alert('This browser does not support PaymentRequest');
}

async function checkout() {
  const supportedPaymentMethods = [
    { supportedMethods: 'basic-card' },
    // {
    //   supportedMethods: ['https://spay.samsung.com'],
    //   data: {
    //     version: '1', // always 1 until further notice
    //     productId: '2bc3e6da781e4e458b18bc', // Service ID from partner portal
    //     allowedCardNetworks: ['mastercard', 'visa'],
    //     merchantName: 'Shop Samsung (demo)',
    //     // merchantName must be identical to merchant name on portal
    //     orderNumber: '1233123',
    //   },
    // },
    // { supportedMethods: 'https://bobpay.xyz/pay' },
    { supportedMethods: 'https://d5b3b805.ngrok.io/pay' },
    // {
    //   supportedMethods: 'https://google.com/pay',
    //   data: googlePaymentDataRequest,
    // },
  ];

  const paymentDetails = {
    total: {
      label: 'Total',
      amount: { currency: 'USD', value: 10 },
    },
  };

  const request = new PaymentRequest(supportedPaymentMethods, paymentDetails);

  try {
    const paymentResponse = await request.show();
    console.log('Payment detail:', paymentResponse);
    console.log('Now send the detail to server / gateway...');
    console.log('Simulate to complete after 3 seconds');
    setTimeout(() => {
      console.log('Completed');
      paymentResponse.complete();
      window.alert('Success!');
    }, 3000);
  } catch (e) {
    console.log(e);
  }

  // More: https://developers.google.com/web/fundamentals/payments/merchant-guide/deep-dive-into-payment-request
}
