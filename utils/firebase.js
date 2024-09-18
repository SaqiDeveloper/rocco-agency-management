const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});


module.exports.sendPushNotification = async (registrationToken, title, body) => {
    try {
        const message = {
            notification: {
                title: title,
                body: body,
            },
            token: registrationToken,
        };

        const response = await admin.messaging().send(message);
        console.log('Successfully sent notification:', response);
        return response;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

module.exports.sendBulkPushNotification = async (tokens, title, body) => {
    try {
        const message = {
            notification: {
                title: title,
                body: body,
            },
            tokens: tokens,
        };

        const response = await admin.messaging().sendEachForMulticast(message);
        console.log('Successfully sent notification:', response);
        return response;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

