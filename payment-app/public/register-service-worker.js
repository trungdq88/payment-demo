async function register() {
  // Check if service worker is available
  if ('serviceWorker' in navigator) {
    // Register a service worker
    const registration = await navigator.serviceWorker.register(
      // A service worker JS file is separate
      '/service-worker.js',
    );
    // Check if Payment Handler is available
    if (!registration.paymentManager) return;

    registration.paymentManager.userHint =
      'beePay is the honestbee in-app wallet';
    registration.paymentManager.instruments.set(
      // Payment instrument key can be any string.
      'beepay-payment-method',
      // Payment instrument detail
      {
        name: 'beePay',
        method: 'https://d5b3b805.ngrok.io/pay',
      },
    );
  }
}

register();
