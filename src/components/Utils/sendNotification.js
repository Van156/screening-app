

const sendPushNotification = (message) => {
    const notification = {
        title: 'New message',
        body: message,
        vibrate: [200, 100, 200],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1,
        },
        actions: [
            { action: 'explore', title: 'Go to the site' },
            { action: 'close', title: 'Close the notification' },
        ],
    };

    navigator.serviceWorker.ready.then((sw) => {
        sw.showNotification('New message', notification);
    });
}

const sendSMSNotification = (message) => {
    const sms = {
        body: message,
        to: '+1234567890',
    };

    navigator.serviceWorker.ready.then((sw) => {
        sw.showNotification('New message', sms);
    });
}

const sendEmailNotification = (message) => {
    const email = {
        body: message,
        to: 'someemail@email.com',
    };

    navigator.serviceWorker.ready.then((sw) => {
        sw.showNotification('New message', email);
    });
}

export { sendPushNotification, sendSMSNotification, sendEmailNotification };