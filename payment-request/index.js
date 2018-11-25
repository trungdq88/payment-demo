if (!window.PaymentRequest) {
  window.alert('This browser does not support PaymentRequest');
}

async function checkout() {
  const supportedPaymentMethods = [{ supportedMethods: 'basic-card' }];

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
    }, 3000);
  } catch (e) {
    console.log(e);
  }

  // More: https://developers.google.com/web/fundamentals/payments/merchant-guide/deep-dive-into-payment-request
}
