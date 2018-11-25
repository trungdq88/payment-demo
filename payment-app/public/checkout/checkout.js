let client;

navigator.serviceWorker.addEventListener('message', e => {
  client = e.source;
  dataElement.innerText = 'message data: ' + JSON.stringify(e.data);
});

navigator.serviceWorker.controller.postMessage('payment_app_window_ready');

function onPay() {
  if (!client) return;
  const response = {
    methodName: 'https://d5b3b805.ngrok.io/pay',
    details: { id: '123456' },
  };
  client.postMessage(response);
  // Chrome will close all windows in the scope of the service worker
  // after the service worker responds to the 'paymentrequest' event.
}

function onCancel() {
  if (!client) return;
  client.postMessage('The payment request is cancelled by user');
  // Chrome will close all windows in the scope of the service worker
  // after the service worker responds to the 'paymentrequest' event.
}
