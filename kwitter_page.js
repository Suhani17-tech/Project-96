
const firebaseConfig = {
    apiKey: "AIzaSyDf8q3G9SZQXPu05owAkE9P9fXpBiIvqHY",
    authDomain: "project-94-88f02.firebaseapp.com",
    databaseURL: "https://project-94-88f02-default-rtdb.firebaseio.com",
    projectId: "project-94-88f02",
    storageBucket: "project-94-88f02.appspot.com",
    messagingSenderId: "352250698754",
    appId: "1:352250698754:web:d3e2e6c078941d06209b1b"
  };

  firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");


    function send(){
msg= document.getElementById("msg").value;
firebase.database().ref(room_name).push({
     message: msg,
     name: user_name,
     like: 0
});
document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();
