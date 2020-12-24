var firebaseConfig = {
    apiKey: "AIzaSyBbbD__WmO_VISFRtoerkOOToEktRwLTmo",
    authDomain: "letschat-da7ab.firebaseapp.com",
    databaseURL: "https://letschat-da7ab-default-rtdb.firebaseio.com",
    projectId: "letschat-da7ab",
    storageBucket: "letschat-da7ab.appspot.com",
    messagingSenderId: "73682676966",
    appId: "1:73682676966:web:db9dc8dc154829393cdf27",
    measurementId: "G-MMVLW68931"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");

  function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });
  document.getElementById("msg").value = "";
  }




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
