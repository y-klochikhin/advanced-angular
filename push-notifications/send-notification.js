const webPush = require('web-push');

const vapidPublicKey = 'BFtbzvCEW9sZResG-kdyDrgW_0ZmtD-ymmkLftUvLZfjRzFJ7Y-LHgrorA5ayBqUqVnu0svWG5y11GXlJVP87YU';
const vapidPrivateKey = 'BbhXbWjUpK1nVFMkaXkgcFvnAu8w7yAVEmzU5zfCoFk';
const pushSubscription = {
    endpoint: "https://fcm.googleapis.com/fcm/send/eiykwM8r7Dc:APA91bGwtu7QZsNH-1lBu8nndnMTZhFc03R5BVVJUQSw8rHI9DzGFrynsY8ao44BQrwb7UgvC4ED2i7PhyiBkBB5mE5ERFsB3tazcXFzVkaA0s6lVPmC4WkqgNJULPA6SYOIk49YwgH7",
    keys: {
        auth: "iJJbmKA0n7Aq6KVRwYcq7A",
        p256dh: "BHQiS4JIahPPRlyPGgJgQ1dT6FAt4OzgI_UF5LmB7gk3BDmFhQNm6rRiHSE9aUjwSBBjIN-3l2-Tk47zqZnBUsA"
    }
};
const payload = JSON.stringify({
    notification: {
        title: 'Push notifications demo',
        body: 'Do you want install Angular?',
        icon: 'assets/icons/icon-512x512.png',
        data: {
            transaction_id: '21a3804e-6d71-4a56-b513-535709c37c0f'
        },
        actions: [{title: "Yes", action: "apply"}, {title: "No, thanks", action: "cancel"}]
    }
});

webPush.setVapidDetails(
    'http://localhost:8080',
    vapidPublicKey,
    vapidPrivateKey
);

webPush.sendNotification(pushSubscription, payload);
