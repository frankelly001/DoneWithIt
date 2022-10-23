import apiClient from "./client";

const register = (pushToken) =>
  apiClient.post("/expoPushTokens", { token: pushToken });

export default {
  register,
};

// "plugins": [
//     [
//       "expo-notifications",
//       {
//         "icon": "./local/assets/notification-icon.png",
//         "color": "#ffffff",
//         "sounds": [
//           "./local/assets/notification-sound.wav",
//           "./local/assets/notification-sound-other.wav"
//         ]
//       }
//     ]
//   ],

// Object {
//   "date": 1651579249879,
//   "request": Object {
//     "content": Object {
//       "autoDismiss": true,
//       "badge": null,
//       "body": "Bro, what's up, let's code an app",
//       "data": Object {
//         "_displayInForeground": true,
//       },
//       "sound": "default",
//       "sticky": false,
//       "subtitle": null,
//       "title": "zuccidaniel:",
//     },
//     "identifier": "0:1651579249884290%0ac519e6f9fd7ecd",
//     "trigger": Object {
//       "channelId": null,
//       "remoteMessage": Object {
//         "collapseKey": null,
//         "data": Object {
//           "body": "{\"_displayInForeground\":true}",
//           "experienceId": "@frankelly/DoneWithIt",
//           "message": "Bro, what's up, let's code an app",
//           "scopeKey": "@frankelly/DoneWithIt",
//           "title": "zuccidaniel:",
//         },
//         "from": "367315174693",
//         "messageId": "0:1651579249884290%0ac519e6f9fd7ecd",
//         "messageType": null,
//         "notification": null,
//         "originalPriority": 2,
//         "priority": 2,
//         "sentTime": 1651579249879,
//         "to": null,
//         "ttl": 2419200,
//       },
//       "type": "push",
//     },
//   },
// } heyyyyyyyyyyyyyy

// // recieved
// Object {
//   "actionIdentifier": "expo.modules.notifications.actions.DEFAULT",
//   "notification": Object {
//     "date": 1651579249879,
//     "request": Object {
//       "content": Object {
//         "autoDismiss": true,
//         "badge": null,
//         "body": "Bro, what's up, let's code an app",
//         "data": Object {
//           "_displayInForeground": true,
//         },
//         "sound": "default",
//         "sticky": false,
//         "subtitle": null,
//         "title": "zuccidaniel:",
//       },
//       "identifier": "0:1651579249884290%0ac519e6f9fd7ecd",
//       "trigger": Object {
//         "channelId": null,
//         "remoteMessage": Object {
//           "collapseKey": null,
//           "data": Object {
//             "body": "{\"_displayInForeground\":true}",
//             "experienceId": "@frankelly/DoneWithIt",
//             "message": "Bro, what's up, let's code an app",
//             "scopeKey": "@frankelly/DoneWithIt",
//             "title": "zuccidaniel:",
//           },
//           "from": "367315174693",
//           "messageId": "0:1651579249884290%0ac519e6f9fd7ecd",
//           "messageType": null,
//           "notification": null,
//           "originalPriority": 2,
//           "priority": 2,
//           "sentTime": 1651579249879,
//           "to": null,
//           "ttl": 2419200,
//         },
//         "type": "push",
//       },
//     },
//   },
// } heyyyyyyyyyyyyyy
