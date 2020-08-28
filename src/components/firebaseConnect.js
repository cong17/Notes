import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBrApKBZBcrWt4ECKRi7t0JFYIYOFOZAoE",
    authDomain: "notesreactjs-6b8c4.firebaseapp.com",
    databaseURL: "https://notesreactjs-6b8c4.firebaseio.com",
    projectId: "notesreactjs-6b8c4",
    storageBucket: "notesreactjs-6b8c4.appspot.com",
    messagingSenderId: "549882508650",
    appId: "1:549882508650:web:6436a8db79446a1df82113",
    measurementId: "G-0GDPTMPEKP"
};

firebase.initializeApp(firebaseConfig);


export const dataNode = firebase.database().ref("dataForNode/");
// // xem data
// data.once("value").then((snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
// });
//sua du lieu
// data.set({
//     id: 1,
//     title: "Ghi chu ngay 26-07-2020",
//     content: "ghi chu da dc sua"
// })

//them du lieu vao
// data.push({
//     title: "Ghi chu so 3",
//     content: "noi dung ghi chu so 3"
// })

// xoa du lieu
// data.child("-MFewwKhYIt4zHPmjsRP").remove();