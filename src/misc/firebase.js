import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyAmFQmOQcKwIIMfgn_vxZ6uuV7RY6Q9Ic4',
  authDomain: 'chat-web-app-9cd77.firebaseapp.com',
  databaseURL: 'https://chat-web-app-9cd77-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-9cd77',
  storageBucket: 'chat-web-app-9cd77.appspot.com',
  messagingSenderId: '444114297708',
  appId: '1:444114297708:web:c670d5667fb55772bb4949',
};

const app = firebase.initializeApp(config);
export const auth = firebase.auth();
export const database = firebase.database();
export const storage = firebase.storage();
